import * as yup from "yup";
import { useFormik } from "formik";
import FormInput from "./forms/FormInput";
import { DivWithoutScrollBar } from "./DivWithoutScrollBar";
import { Portal } from "./Portal";
import Button from "./forms/Button";
import { useMemo } from "react";

const urlRegex = /^(https:\/\/)([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;

interface JobFormData {
  role: string;
  description: string;
  requirements: string[];
  enrollmentLink: string;
}

interface JobFormProps {
  onClose: () => void;
  isOpen: boolean;
  editData?: JobFormData | null;
}

const JobForm = ({ onClose, isOpen, editData }: JobFormProps) => {
  const defaultValues = useMemo(
    () => ({
      role: editData?.role || "",
      description: editData?.description || "",
      requirements: editData?.requirements || [],
      enrollmentLink: editData?.enrollmentLink || "",
    }),
    [editData]
  );

  const jobSchema = yup.object({
    role: yup.string().required("Please provide job role."),
    description: yup.string().required("Please provide job description."),
    requirements: yup.array().required("Please provide job requirements."),
    enrollmentLink: yup
      .string()
      .required("Please provide enrollment link.")
      .matches(urlRegex, "Please enter a valid url."),
  });

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: defaultValues,
    validationSchema: jobSchema,
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
            type="text"
            name="enrollmentLink"
            label="Enrollment Link"
            onBlur={validation.handleBlur}
            onChange={validation.handleChange}
            placeholder="Enter enrollment link"
            value={validation.values.enrollmentLink || ""}
            validation={validation}
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

export default JobForm;
