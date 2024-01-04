import { PropsWithChildren } from "react";
import backgroundImage from "../../assets/images/what-we-do.jpg";
import styled from "styled-components";

interface HeadingProps extends PropsWithChildren {
  text: string;
  i: number;
}

const Qualities = () => {
  return (
    <Container
      className="relative h-max mt-32"
      //   style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-left-top bg-cover bg-black background opacity-60"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {["Create", "Collaborate", "Disrupt"].map((text, i) => (
        <Heading text={text} i={i} />
      ))}
      <div className="py-8 flex justify-center gap-7 items-start text-[var(--white)] z-100 relative">
        <p
          className="max-w-sm text-lg"
          data-aos={"fade-left"}
          data-aos-duration={1000}
          data-aos-offset={400}
        >
          A local DC digital design agency with global reach. At Adutem
          Innovation, we view clients as creative partners.
        </p>
        <p
          className="max-w-sm text-lg"
          data-aos={"fade-left"}
          data-aos-duration={1000}
          data-aos-offset={400}
        >
          Together, we transform digital platforms through the fusion of diverse
          ideas
        </p>
      </div>
    </Container>
  );
};

const Heading = ({ text, i }: HeadingProps) => {
  return (
    <h2
      className={`max-md:text-[10vw] text-[4.44vw] border-[#f1f1f1] border-b-[0.2px] py-8 ${
        i % 2 === 0 ? "text-left" : "text-right"
      } hover:text-blue-700 transition-colors text-white duration-500`}
    >
      <span
        className="w-11/12 mx-auto max-w-[928px] block text-[inherit]"
        data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-duration={1000}
      >
        {text}
      </span>
    </h2>
  );
};

const Container = styled.div`
  & > *:not(.background) {
    position: relative;
    z-index: 20;
    background: transparent;
  }
`;

export default Qualities;
