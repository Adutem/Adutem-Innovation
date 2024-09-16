import styled from "styled-components";
import ClientFeedBackCard from "./ClientFeedBackCard";
import { useState } from "react";
import feedbacks from "../../data/feedback";

const ClientFeedBack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className="bg-[hsl(240,12%,18%)] py-24 w-full">
      <div className="w-[100%] px-8 lg:max-w-[982px] lg:mx-auto lg:w-11/12 lg:px-0">
        <p className="text-[var(--base-color)] text-[2rem]">
          We love our clients
        </p>
        <p className="text-2xl mb-12 lg:mb-4">
          And clients love to work with us
        </p>
        <ClientFeedBackCard activeIndex={activeIndex} />
        <div className="flex items-center mt-12">
          <div className="flex-1"> </div>
          <div className="flex items-center gap-4">
            <i
              className="fi fi-sr-arrow-alt-left flex text-white hover:text-[var(--base-color)] transition-colors text-3xl cursor-pointer"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev <= 0 ? 3 : Math.max(prev - 1, 0)
                )
              }
            ></i>
            <i
              className="fi fi-sr-arrow-alt-right flex text-white hover:text-[var(--base-color)] transition-colors text-3xl cursor-pointer"
              onClick={() =>
                setActiveIndex((prev) =>
                  prev >= 3 ? 0 : Math.min(prev + 1, 3)
                )
              }
            ></i>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  & > * {
    color: var(--white);
  }
`;

export default ClientFeedBack;
