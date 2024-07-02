import { useEffect, useState } from "react";
import Footer from "../components/home/Footer";
import styled from "styled-components";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRedux } from "@/hooks/useRedux";
import { contactOrg, resetContactOrg } from "@/redux";
import { emailRegex } from "@/constant/regex";
import { showErrorNotification, showSuccessNotification } from "@/utils";
import FormInput from "@/components/forms/FormInput";
import { Loader } from "@/components/progress";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // redux utilsc
  const { dispatch, useStateSelector } = useRedux();
  const navigate = useNavigate();

  // contact state
  const { formSubmissionError, formSubmitted, submittingForm } =
    useStateSelector((state) => state.Contact);

  // validation schema
  const contactValidationSchema = yup.object({
    fullName: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .matches(emailRegex, "Please enter a valid email"),
    phoneNumber: yup.string().required("Please provide your contact info"),
    organization: yup.string().required("Please provide your organization"),
    message: yup.string().required("Please leave a message"),
  });

  const defaultValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    organization: "",
    message: "",
  };

  // form validation
  const validation = useFormik({
    enableReinitialize: false,
    initialValues: defaultValues,
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      dispatch(contactOrg(values));
    },
  });

  const { handleBlur, handleChange, handleSubmit, values } = validation;

  useEffect(() => {
    if (formSubmitted) {
      showSuccessNotification("Your message has been received", 1500);
      let tmo = setTimeout(() => {
        dispatch(resetContactOrg());
        return navigate("/");
      }, 1000);
    }
  }, [formSubmitted]);

  useEffect(() => {
    if (formSubmissionError) {
      showErrorNotification(formSubmissionError, 1500);
      dispatch(resetContactOrg());
    }
  }, [formSubmissionError]);

  // document.documentElement.style.background = "rgba(34,34,39,.94)";
  document.documentElement.style.background = "#000";
  document.body.style.background = "#000";

  return (
    <div>
      <div className="px-4 md:px-8 md:flex md:gap-14 md:justify-evenly md:py-36">
        <FirstContainer className="flex-1 flex-grow-[3] md:max-w-xl relative">
          <h4 className="text-[var(--base-color)] text-3xl neue-regular">
            Let's Talk!
          </h4>
          <p className="text-gray-400 text-sm mt-2 mb-4 neue-regular">
            Fill out the following to get your project started
          </p>
          {submittingForm && <Loader />}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              return false;
            }}
          >
            <FormInput
              name="fullName"
              label="Your Name*"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.fullName}
              placeholder="e.g John Doe"
              validation={validation}
            />
            <FormInput
              name="email"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              placeholder="e.g: example@gmail.com"
              validation={validation}
            />
            <FormInput
              name="phoneNumber"
              label="Phone Number"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.phoneNumber}
              placeholder="xxx-xxxx-xxxx"
              validation={validation}
            />
            <FormInput
              name="organization"
              label="Your Organization"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.organization}
              placeholder="e.g. Example Inc"
              validation={validation}
            />
            <FormInput
              name="message"
              label="Message"
              onBlur={handleBlur}
              onChange={handleChange}
              type="textarea"
              value={values.message}
              placeholder="Here..."
              validation={validation}
            />
            <SubmitButton
              className="rounded-lg text-[var(--base-color)] px-6 py-3 items-center gap-2 maa-transition-[0.5s] bg-white flex my-5 w-full text-center justify-center neue-regular"
              type="submit"
            >
              Submit
              <i className="fi fi-rr-arrow-small-right flex  text-xl"></i>
            </SubmitButton>
          </form>
        </FirstContainer>
        <SecondContainer className="transparent-white p-4 my-20 md:px-12 py-8 md:my-0 flex-1 md:max-w-96 flex-grow-[2] md:flex md:flex-col md:justify-center gap-6 max-h-[400px] md:self-center">
          <div>
            <p className="faded text-sm">Find Us</p>
            <address className="text-base md:text-lg flex flex-col gap-1 mb-4">
              <span>1011 Millenial Ave IB,</span>
              <span>Suite 400 #13</span>
              <span>
                Ibadan, 201109 <br />
              </span>
            </address>
          </div>
          <div>
            <p className="faded text-sm">Email us:</p>
            <p className="mb-4 text-base md:text-lg">
              <a>Adutem05@gmail.com</a>
            </p>
          </div>
          <div>
            <p className="faded text-sm">Call us:</p>
            <p className="text-base md:text-lg">
              <a href="tel:+2347053295453">+(234)-7053295453</a>
            </p>
          </div>
        </SecondContainer>
      </div>
      <Footer hideIdea={true} />
    </div>
  );
};

const FirstContainer = styled.div``;
const SecondContainer = styled.div`
  * {
    color: white;
  }

  *.faded {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SubmitButton = styled.button`
  i {
    transition: 1.2s ease;
  }
  &:hover i {
    transform: translateX(10px);
  }
`;

export default Contact;
