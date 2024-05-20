import * as yup from "yup";
import { useFormik } from "formik";
import FormInput from "./forms/FormInput";
import { DivWithoutScrollBar } from "./DivWithoutScrollBar";
import { Portal } from "./Portal";
import Button from "./forms/Button";
import { useEffect, useMemo } from "react";
import { HolidayData, resetUpdateHoliday, updateHoliday } from "@/redux";
import { useRedux } from "@/hooks/useRedux";
import { Loader, Spinner } from "./progress";
import { showErrorNotification, showSuccessNotification } from "@/utils";

interface HolidayFormProps {
  onClose: () => void;
  isOpen: boolean;
  editData?: HolidayData | null;
}

const getDateTime = (value: string | Date) => new Date(value).getTime();

const getDateDetails = (value: string | Date) => {
  const newDate = new Date(value);
  return {
    day: newDate.getDate(),
    month: newDate.getMonth(),
    year: newDate.getFullYear(),
  };
};

export const doDatesMatch = (
  dateOne: string | Date,
  dateTwo: string | Date
) => {
  const newDateOne = getDateDetails(dateOne);
  const newDateTwo = getDateDetails(dateTwo);
  return (
    newDateOne.day === newDateTwo.day &&
    newDateOne.month === newDateTwo.month &&
    newDateOne.year === newDateTwo.year
  );
};

const HolidayForm = ({ onClose, isOpen, editData }: HolidayFormProps) => {
  const { dispatch, useStateSelector } = useRedux();

  const { isUpdatingHoliday, holidayUpdated, updateError } = useStateSelector(
    (state) => state.Holiday
  );

  const defaultValues = useMemo(
    () => ({
      textContent: editData?.textContent || "",
      startDate: editData?.startDate || new Date(),
      endDate: editData?.endDate || new Date(),
      isDeactivated: editData?.isDeactivated || false,
    }),
    [editData]
  );

  const holidaySchema = yup.object({
    textContent: yup.string().required("Please provide some content"),
    startDate: yup.string().required("Please provide start date"),
    endDate: yup.string().required("Please provide end date"),
  });

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: defaultValues,
    validationSchema: holidaySchema,
    onSubmit: (values) => {
      if (!editData?._id) return;
      dispatch(updateHoliday({ holidayId: editData._id, data: values }));
    },
  });

  // Set-up logic for disabling activate button
  const shouldDeactivateButton = useMemo(() => {
    return (
      isUpdatingHoliday ||
      (editData?.textContent === validation.values.textContent &&
        doDatesMatch(editData?.startDate, validation.values.startDate) &&
        doDatesMatch(editData?.endDate, validation.values.endDate) &&
        editData?.isDeactivated === validation.values.isDeactivated) ||
      !validation.values.textContent
    );
  }, [isUpdatingHoliday, validation.values]);

  // Successful update
  useEffect(() => {
    if (holidayUpdated) {
      showSuccessNotification("Job Updated", 1300);
      dispatch(resetUpdateHoliday());
      onClose();
    }
  }, [holidayUpdated]);

  // Error update
  useEffect(() => {
    if (updateError) {
      showErrorNotification("An error occured. Please try again", 1300);
      dispatch(resetUpdateHoliday());
    }
  }, [updateError]);

  return (
    <Portal
      onClose={() => onClose()}
      shouldModalCloseOnClick={false}
      modalContentContainerStyle="rounded-md"
      isOpen={isOpen}
      showBackdropElement={true}
    >
      <h2 className="text-xl sm:text-2xl mb-6 text-white neue-regular font-bold">
        Holiday Form
      </h2>
      {/* <h1 className="text-xl sm:text-2xl mb-6 font-medium text-[var(--base-primary)]">
        {shouldEdit ? "Edit Question" : "Create Queston"}
      </h1> */}
      {/* <Alert type="info" className="mb-4">
          You must select question category before you can fill in other fields
        </Alert> */}
      {isUpdatingHoliday && <Loader />}
      <DivWithoutScrollBar className="pb-60 sm:pb-32 h-5/6 overflow-auto relative">
        <form
          className="relative w-full flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Called here!");
            validation.handleSubmit();
            return false;
          }}
        >
          <FormInput
            type="textarea"
            name="textContent"
            label="Holiday Text"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Enter holiday text"
            value={validation.values.textContent || ""}
            validation={validation}
            className="neue-regular text-gray-300"
          />
          <FormInput
            type="date"
            name="startDate"
            label="Start Date"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Enter start date"
            value={validation.values.startDate}
            validation={validation}
            min={new Date()}
            max={validation.values.endDate}
            className="neue-regular text-gray-300"
          />
          <FormInput
            type="date"
            name="endDate"
            label="End Date"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Enter end date"
            value={validation.values.endDate}
            validation={validation}
            min={validation.values.startDate}
            max={"12/12/2050"}
            className="neue-regular text-gray-300"
          />
          <FormInput
            type="switch"
            name="isDeactivated"
            label="Deactivated"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Deactivated"
            value={validation.values.isDeactivated}
            validation={validation}
            className="neue-regular text-gray-300"
          />

          <div className="mt-8 col-span-full">
            <Button
              type="submit"
              className="bg-[var(--base-primary)]"
              disabled={shouldDeactivateButton}
            >
              {isUpdatingHoliday && <Spinner type="plain" />}
              {isUpdatingHoliday ? "Activating..." : "Activate"}
            </Button>
          </div>
        </form>
      </DivWithoutScrollBar>
    </Portal>
  );
};

export default HolidayForm;
