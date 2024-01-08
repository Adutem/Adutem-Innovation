import React, { useEffect, useRef } from "react";
import Animator from "../utils/modules/animation/animation";
import { useScrollPosition } from "../hooks";
import styled from "styled-components";

const Navbar = () => {
  const h1Ref = useRef<HTMLElement | Element | null>();
  const menuRef = useRef<HTMLElement | Element | null>();
  const getInTouchBtnRef = useRef<HTMLElement | Element | null>();

  const onTrue = () => {
    if (h1Ref.current) {
      h1Ref.current.classList.remove("maa-translateX-[100px]");
    }
    if (menuRef.current) {
      menuRef.current.classList.remove("-maa-translateX-[100px]");
    }
    if (getInTouchBtnRef.current) {
      getInTouchBtnRef.current.classList.add("-maa-translateY-[150px]");
    }
  };

  const onFalse = () => {
    if (h1Ref.current) {
      h1Ref.current.classList.add("maa-translateX-[100px]");
    }
    if (menuRef.current) {
      menuRef.current.classList.add("-maa-translateX-[100px]");
    }
    if (getInTouchBtnRef.current) {
      getInTouchBtnRef.current.classList.remove("-maa-translateY-[150px]");
    }
  };

  const value = useScrollPosition(null, 70, onTrue, onFalse);
  // useScrollPosition(menuRef.current, 90, onTrue, onFalse);

  useEffect(() => {
    new Animator();
  }, []);
  return (
    <Container className="fixed top-0 left-0 flex justify-between items-center px-4 md:px-6 w-full py-4 bg-[transparent]">
      <h1
        className="neue-ultrabold text-3xl  maa-transition-[.5s] maa-translateX-[100px] text-white"
        ref={h1Ref as any}
      >
        Adutem <br />
        <span>Innovation</span>
      </h1>
      <button
        className="rounded-2xl bg-blue-800 px-9 py-4 items-center gap-2 maa-transition-[0.5s] text-white hidden md:flex"
        ref={getInTouchBtnRef as any}
      >
        Get in touch
        <i className="fi fi-rr-arrow-small-right flex  text-xl -maa-rotate-[45deg]"></i>
      </button>
      <p
        className="gray-white-color -maa-translateX-[100px] maa-transition-[0.5s]"
        ref={menuRef as any}
      >
        Menu
      </p>
    </Container>
  );
};

const Container = styled.div`
  @media screen and (max-width: 768px) {
    h1,
    p {
      transform: translate(0);
    }
  }
`;

export default Navbar;
