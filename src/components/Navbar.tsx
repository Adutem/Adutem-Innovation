import React, { useEffect, useRef } from "react";
import Animator from "../utils/modules/animation/animation";
import { useScrollPosition } from "../hooks";
import styled from "styled-components";

const Navbar = () => {
  const h1Ref = useRef<HTMLElement | Element | null>();
  const menuRef = useRef<HTMLElement | Element | null>();
  const getInTouchBtnRef = useRef<HTMLElement | Element | null>();
  const containerRef = useRef<HTMLElement | Element | null>();

  const onTrue = () => {
    if (h1Ref.current) {
      h1Ref.current.classList.remove("translateX-hundred");
    }
    if (menuRef.current) {
      menuRef.current.classList.remove("translateX-neg-hundred");
    }
    if (getInTouchBtnRef.current) {
      getInTouchBtnRef.current.classList.add("-maa-translateY-[150px]");
    }
    if (containerRef.current) {
      containerRef.current.classList.add("bg-black");
    }
  };

  const onFalse = () => {
    if (h1Ref.current) {
      h1Ref.current.classList.add("translateX-hundred");
    }
    if (menuRef.current) {
      menuRef.current.classList.add("translateX-neg-hundred");
    }
    if (getInTouchBtnRef.current) {
      getInTouchBtnRef.current.classList.remove("-maa-translateY-[150px]");
    }
    if (containerRef.current) {
      containerRef.current.classList.remove("bg-black");
    }
  };

  const value = useScrollPosition(null, 70, onTrue, onFalse);
  // useScrollPosition(menuRef.current, 90, onTrue, onFalse);

  useEffect(() => {
    new Animator();
  }, []);
  return (
    <Container
      className="fixed top-0 left-0 flex justify-between items-center px-4 md:px-6 w-full py-4 bg-[transparent] maa-transition-[0.5s]"
      ref={containerRef as any}
    >
      <Heading
        className="neue-ultrabold text-3xl  maa-transition-[.5s] translateX-hundred text-white"
        ref={h1Ref as any}
      >
        Adutem <br />
        <span>Innovation</span>
      </Heading>
      <button
        className="rounded-2xl bg-blue-800 px-9 py-4 items-center gap-2 maa-transition-[0.5s] text-white hidden md:flex"
        ref={getInTouchBtnRef as any}
      >
        Get in touch
        <i className="fi fi-rr-arrow-small-right flex  text-xl -maa-rotate-[45deg]"></i>
      </button>
      <Menu
        className="gray-white-color translateX-neg-hundred maa-transition-[0.5s]"
        ref={menuRef as any}
      >
        Menu
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  z-index: 100000;

  h1.translateX-hundred {
    transform: translateX(100px);
  }
  p.translateX-neg-hundred {
    transform: translateX(-100px);
  }
  @media screen and (max-width: 768px) {
    h1,
    p,
    h1.translateX-hundred,
    p.translateX-neg-hundred {
      transform: translate(0) !important;
    }
  }
`;

const Heading = styled.h1``;
const Menu = styled.p``;
export default Navbar;
