import { useState } from "react";
import { FormGroupComponent } from "../components/FormInput";
import Footer from "../components/home/Footer";
import styled from "styled-components";

interface FormDataVals {
  name: string;
  email: string;
  phoneNumber: string;
  organization: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormDataVals>({
    name: "",
    email: "",
    phoneNumber: "",
    organization: "",
  });

  const handleInputChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  document.documentElement.style.background = "rgba(34,34,39,.94)";

  return (
    <div>
      <div className="px-4 md:px-8 md:flex md:gap-14 md:justify-evenly md:py-36">
        <FirstContainer className="flex-1 flex-grow-[3] md:max-w-xl">
          <h4 className="text-white text-3xl">Let's Talk!</h4>
          <p className="text-white text-base mt-2 mb-4">
            Fill out the following to get your project started
          </p>
          <form>
            <FormGroupComponent
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name*"
            />
            <FormGroupComponent
              name="email"
              type="text"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email*"
            />
            <FormGroupComponent
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
            <FormGroupComponent
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Your organization"
            />
            <SubmitButton className="rounded-2xl text-[var(--base-color)] px-6 py-3 items-center gap-2 maa-transition-[0.5s] bg-white flex my-5 w-full text-center justify-center">
              Submit
              <i className="fi fi-rr-arrow-small-right flex  text-xl"></i>
            </SubmitButton>
          </form>
        </FirstContainer>
        <SecondContainer className="bg-[rgba(34,34,39,.94)] p-4 border-y my-20 md:px-12 py-8 md:my-0 flex-1 md:max-w-96 flex-grow-[2] md:flex md:flex-col md:justify-between">
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
