import * as yup from "yup";
import { useFormik } from "formik";
import FormInput from "./forms/FormInput";
import { DivWithoutScrollBar } from "./DivWithoutScrollBar";
import { Portal } from "./Portal";
import Button from "./forms/Button";
import { useMemo } from "react";

interface HolidayFormData {
  textContent: string;
  startDate: Date;
  endDate: Date;
}

interface HolidayFormProps {
  onClose: () => void;
  isOpen: boolean;
  editData?: HolidayFormData | null;
}

const HolidayForm = ({ onClose, isOpen, editData }: HolidayFormProps) => {
  const defaultValues = useMemo(
    () => ({
      textContent: editData?.textContent || "",
      startDate: editData?.startDate || new Date(),
      endDate: editData?.endDate || new Date(),
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
      console.log(values);
    },
  });

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
      {/* <h1 className="text-xl sm:text-2xl mb-6 font-medium text-[var(--primary)]">
        {shouldEdit ? "Edit Question" : "Create Queston"}
      </h1> */}
      {/* <Alert type="info" className="mb-4">
          You must select question category before you can fill in other fields
        </Alert> */}
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

          <div className="mt-8 col-span-full">
            <Button type="submit" className="bg-[var(--primary)]">
              Activate
            </Button>
          </div>
        </form>
      </DivWithoutScrollBar>
    </Portal>
  );
};

export default HolidayForm;
