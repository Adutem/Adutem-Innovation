import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";

interface DataType {
  question: string;
  answer: string;
}

interface AccordionProps {
  data: DataType;
}

export const Accordion = ({ data: { question, answer } }: AccordionProps) => {
  const butRef = useRef<any>(null);

  useEffect(() => {
    butRef.current.addEventListener("click", function (e: any) {
      console.log("clicked");
      e.target.classList.toggle("active");
      const text = e.target.nextElementSibling;
      if (text.style.maxHeight) {
        text.style.maxHeight = "";
      } else {
        text.style.maxHeight = text.scrollHeight + "px";
      }
    });
  }, []);

  return (
    <AccordionContainer>
      <AccordionBtn ref={butRef}>
        <Question>{question}</Question>
        <i
          className="fi fi-rr-caret-down flex text-white"
          style={{ pointerEvents: "none" }}
        ></i>
      </AccordionBtn>
      <Panel>
        <p className="text-black text-sm neue-regular">{parse(answer)}</p>
      </Panel>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
`;

const AccordionBtn = styled.button`
  width: 100%;
  padding: 1rem 1.2rem;
  border: none;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  //   border-radius: 0.8rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  transition: 0.4s;
  text-align: left;
  //   background-color: var(--base-color-trans);
  // background-color: #f43686;
  background-color: var(--base-color);
  //   border-bottom: 1px solid var(--base-color);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  i {
    width: 25px;
    height: 25px;
    font-size: 1.4rem;
    transition: 0.5s ease;
    transform-style: preserve-3d;
    transform-origin: center;
  }

  &.active {
    border-bottom-right-radius: 0rem;
    border-bottom-left-radius: 0rem;
  }

  &.active i {
    transform: rotateZ(180deg);
  }
`;

const Question = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  //   color: var(--black-green);
  color: white;
  pointer-events: none;
  font-family: neue-regular;
`;

const Panel = styled.div`
  font-family: sans-serif;
  font-size: 0.9rem;
  line-height: 1.5rem;
  //   background-color: rgb(248, 248, 248);
  //   background-color: #f43686;
  background-color: var(--base-color-trans);
  overflow: hidden;
  transition: 0.5s;
  max-height: 0;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  p {
    padding: 1rem 1.5rem;
  }
`;
export default Accordion;
