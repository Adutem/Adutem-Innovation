import styled from "styled-components";
import ClientFeedBackCard from "./ClientFeedBackCard";
import { useState, useRef, useEffect } from "react";
import feedbacks from "../../data/feedback";

const ClientFeedBack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [justRendered, setJustRendered] = useState(true);
  const [direction, setDirection] = useState("");
  const [currentData, setCurrentData] = useState(() => feedbacks[activeIndex]);
  const infoContainerRef = useRef<HTMLElement | undefined>(undefined);
  const clientNameRef = useRef<HTMLElement | undefined>(undefined);
  const clientRoleRef = useRef<HTMLElement | undefined>(undefined);
  const thumbnailImageRef = useRef<HTMLElement | undefined>(undefined);

  useEffect(() => {
    console.log("Called useEffect", activeIndex);
    if (justRendered) {
      setJustRendered(false);
      return;
    }
    if (infoContainerRef.current) {
      let currents = [
        infoContainerRef.current,
        clientNameRef.current!,
        clientRoleRef.current!,
        thumbnailImageRef.current!,
      ];
      currents.forEach((el) => {
        if (el) {
          el.classList.add("fade-out");
        }
      });

      let displayTmo = setTimeout(() => {
        currents.forEach((el) => {
          if (el) {
            el.classList.remove("fade-out");
          }
        });
        setCurrentData(feedbacks[activeIndex]);
        clearTimeout(displayTmo);
      }, 800);
      // infoContainerRef.current.style.display = "none";

      // let displayTmo = setTimeout(() => {
      //   infoContainerRef.current.style.display = "block";
      //   clearTimeout(displayTmo);
      // }, 100);
    }
  }, [activeIndex]);

  return (
    <Container className="bg-[hsl(240,12%,18%)] py-24 w-full">
      <div className="fit-container">
        <p className="text-blue-700 text-[2rem]">We love our clients</p>
        <p className="text-2xl mb-4">And clients love to work with us</p>
        <ClientFeedBackCard
          feedback={currentData}
          infoContainerRef={infoContainerRef}
          clientNameRef={clientNameRef}
          clientRoleRef={clientRoleRef}
          thumbnailImageRef={thumbnailImageRef}
        />
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev >= 2 ? 0 : Math.min(prev + 1, 2)))
          }
          className="p-6 bg-blue-700"
        >
          Click to move index
        </button>
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
