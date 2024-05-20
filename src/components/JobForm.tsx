import * as yup from "yup";
import { useFormik } from "formik";
import FormInput from "./forms/FormInput";
import { DivWithoutScrollBar } from "./DivWithoutScrollBar";
import { Portal } from "./Portal";
import Button from "./forms/Button";
import { useEffect, useMemo } from "react";
import { createJob, resetCreateJob, resetUpdateJob, updateJob } from "@/redux";
import { useRedux } from "@/hooks/useRedux";
import { Loader, Spinner } from "./progress";
import { showErrorNotification, showSuccessNotification } from "@/utils";
import { doDatesMatch } from "./HolidayForm";
import { JobInterface } from "@/data/jobs";

const urlRegex = /^(https:\/\/)([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegex = /^\+234\d{10}$/;

export interface JobFormData {
  role: string;
  description: string;
  requirements: string[];
  applicationLink: string;
  contactLinkType: "email" | "phoneNumber";
  contactLink: string;
  applicationDeadline: string | Date;
}

interface JobFormProps {
  onClose: () => void;
  isOpen: boolean;
  editData?: JobInterface | null;
}

const JobForm = ({ onClose, isOpen, editData }: JobFormProps) => {
  const { dispatch, useStateSelector } = useRedux();

  // Job State
  const {
    isCreatingJob,
    jobCreated,
    createError,
    isUpdatingJob,
    jobUpdated,
    updateError,
  } = useStateSelector((state) => state.Jobs);

  const defaultValues = useMemo(
    () => ({
      role: editData?.role || "",
      description: editData?.description || "",
      requirements: editData?.requirements || [],
      applicationLink: editData?.applicationLink || "",
      contactLinkType: editData?.contactLinkType || "email",
      contactLink: editData?.contactLink || "",
      applicationDeadline: editData?.applicationDeadline || new Date(),
    }),
    [editData]
  );

  const jobSchema = yup.object({
    role: yup.string().required("Please provide job role."),
    description: yup.string().required("Please provide job description."),
    requirements: yup
      .array()
      .of(yup.string().required("Please provide job requirements."))
      .min(1, "Please provide at least one job requirement."),
    applicationLink: yup
      .string()
      .required("Please provide enrollment link.")
      .matches(urlRegex, "Please enter a valid url."),
    contactLinkType: yup
      .string()
      .oneOf(
        ["email", "phoneNumber"],
        "Contact link type must be either 'email' or 'phoneNumber'."
      )
      .required("Please specify contact link type"),
    contactLink: yup
      .string()
      .required("Please provide a contact link.")
      .when("contactLinkType", (contactLinkType, schema) => {
        return contactLinkType[0] === "email"
          ? schema.matches(emailRegex, "Please enter a valid email address.")
          : schema.matches(
              phoneNumberRegex,
              "Please enter a valid phone number."
            );
      }),
    applicationDeadline: yup
      .date()
      .required("Please provide application deadline."),
  });

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: defaultValues,
    validationSchema: jobSchema,
    onSubmit: (values) => {
      editData
        ? dispatch(updateJob({ jobId: editData._id, data: values }))
        : dispatch(createJob(values));
    },
  });

  // Successful job posting
  useEffect(() => {
    if (jobCreated) {
      showSuccessNotification("Job Created", 1300);
      dispatch(resetCreateJob());
      onClose();
    }
  }, [jobCreated]);

  // Posting job error
  useEffect(() => {
    if (createError) {
      showErrorNotification(createError, 1300);
      dispatch(resetCreateJob());
    }
  }, [createError]);

  // Successful update
  useEffect(() => {
    if (jobUpdated) {
      showSuccessNotification("Job Updated", 1300);
      dispatch(resetUpdateJob());
      onClose();
    }
  }, [jobUpdated]);

  // Error update
  useEffect(() => {
    if (updateError) {
      showErrorNotification("An error occured. Please try again", 1300);
      dispatch(resetUpdateJob());
    }
  }, [updateError]);

  // Set-up login for disabling submit button
  const shouldDeactivateButton = useMemo(() => {
    const isRequirmentsMatch =
      validation.values.requirements.every(
        (requirement, index) => requirement === editData?.requirements[index]
      ) &&
      validation.values.requirements.length === editData?.requirements.length;
    return (
      isCreatingJob ||
      isUpdatingJob ||
      (editData?.role === validation.values.role &&
        editData?.description === validation.values.description &&
        isRequirmentsMatch &&
        editData?.applicationLink === validation.values.applicationLink &&
        editData?.contactLinkType === validation.values.contactLinkType &&
        editData?.contactLink === validation.values.contactLink &&
        doDatesMatch(
          editData?.applicationDeadline,
          validation.values.applicationDeadline
        ))
    );
  }, [isCreatingJob, validation.values, isUpdatingJob]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Portal
      onClose={() => onClose()}
      shouldModalCloseOnClick={false}
      modalContentContainerStyle="rounded-md px-4 sm:px-6"
      isOpen={isOpen}
      showBackdropElement={true}
    >
      <h2 className="text-xl sm:text-2xl mb-6 text-white neue-regular font-bold">
        {editData ? "Edit Job" : "Job Form"}
      </h2>
      {/* <Alert type="info" className="mb-4">
          You must select question category before you can fill in other fields
        </Alert> */}
      {(isCreatingJob || isUpdatingJob) && <Loader />}
      <DivWithoutScrollBar className="pb-60 sm:pb-32 h-5/6 overflow-auto relative">
        <form
          className="relative w-full flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <FormInput
            type="text"
            name="role"
            label="Job Role"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Enter job role"
            value={validation.values.role || ""}
            validation={validation}
            className="neue-regular text-gray-300"
          />
          <FormInput
            type="text"
            name="description"
            label="Description"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Enter job description"
            value={validation.values.description || ""}
            validation={validation}
            className="neue-regular text-gray-300"
          />
          <FormInput
            type="multiple-input"
            name="requirements"
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            label="Requirements"
            validation={validation}
            placeholder="Enter requirements"
            value={validation.values.requirements || []}
            defaultValue={editData?.requirements}
          />
          <FormInput
            type="text"
            name="applicationLink"
            label="Application Link"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Enter enrollment link"
            value={validation.values.applicationLink || ""}
            validation={validation}
            className="neue-regular text-gray-300"
          />
          <FormInput
            type="chad-select"
            label="Contact link type"
            name="contactLinkType"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            validation={validation}
            value={validation.values.contactLinkType || ""}
            placeholder="Select contact link type"
            options={["email", "phoneNumber"]}
            defaultValue={editData?.contactLinkType}
          />
          <FormInput
            type="text"
            name="contactLink"
            label="Contact Link"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder={
              validation.values.contactLinkType === "email"
                ? "example@gmail.com"
                : "+234 000 000 0000"
            }
            value={validation.values.contactLink || ""}
            validation={validation}
            className="neue-regular text-gray-300"
          />
          <FormInput
            type="date"
            name="applicationDeadline"
            label="Deadline"
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            value={validation.values.applicationDeadline}
            validation={validation}
            min={new Date()}
            max={"12/12/2090"}
          />
          <div className="mt-8 col-span-full">
            <Button
              type="submit"
              className="bg-[var(--base-primary)]"
              disabled={shouldDeactivateButton}
            >
              {isCreatingJob || isUpdatingJob ? <Spinner type="plain" /> : " "}
              {!editData && (isCreatingJob ? "Posting Job..." : "Post Job")}
              {editData && (isCreatingJob ? "Updating Job..." : "Update Job")}
            </Button>
          </div>
        </form>
      </DivWithoutScrollBar>
    </Portal>
  );
};

export default JobForm;
