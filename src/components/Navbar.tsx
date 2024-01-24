import React, { useEffect, useRef } from "react";
import Animator from "../utils/modules/animation/animation";
import { useScrollPosition } from "../hooks";
import styled from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";

const routeBgMap = {
  "/": "black",
  "/contact": "transparent",
};

interface NavbarProps {
  toggleNavBar: () => void;
  isNavbarOpen: boolean;
}

const Navbar = ({ toggleNavBar, isNavbarOpen }: NavbarProps) => {
  const h1Ref = useRef<HTMLElement | Element | null>();
  const menuRef = useRef<HTMLElement | Element | null>();
  const getInTouchBtnRef = useRef<HTMLElement | Element | null>();
  const containerRef = useRef<HTMLElement | null>();
  const location = useLocation();

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
      containerRef.current.style.background =
        routeBgMap[location.pathname as keyof typeof routeBgMap] || "black";
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
      containerRef.current.style.background = "transparent";
    }
  };

  const value = useScrollPosition(
    null,
    location.pathname.includes("/projects/") ? 300 : 70,
    onTrue,
    onFalse
  );
  // useScrollPosition(menuRef.current, 90, onTrue, onFalse);

  useEffect(() => {
    new Animator();
  }, []);
  return (
    <>
      <Container
        className="fixed top-0 left-0 flex justify-between items-center px-4 md:px-6 w-full py-4 bg-[transparent] maa-transition-[0.5s]"
        ref={containerRef as any}
      >
        <Heading
          className="neue-ultrabold text-2xl md:text-3xl  maa-transition-[.5s] translateX-hundred text-white"
          ref={h1Ref as any}
        >
          <Link
            to={"/"}
            className="text-inherit"
            style={{
              fontSize: "inherit",
              fontWeight: "inherit",
              fontFamily: "inherit",
            }}
          >
            {!isNavbarOpen ? (
              <>
                ADUTEM
                {/* <br /> */}
                {/* <span>Innovation</span> */}
              </>
            ) : (
              <>
                <br />
                <br />
              </>
            )}
          </Link>
        </Heading>
        {!isNavbarOpen && location.pathname !== "/contact" && (
          <Link
            className="rounded-2xl bg-[var(--base-color)] px-9 py-4 items-center gap-2 maa-transition-[0.5s] text-white hidden md:flex"
            ref={getInTouchBtnRef as any}
            to={"/contact"}
          >
            Get in touch
            <i className="fi fi-rr-arrow-small-right flex  text-xl -maa-rotate-[45deg]"></i>
          </Link>
        )}
        <Menu
          className="gray-white-color translateX-neg-hundred maa-transition-[0.5s] flex items-center gap-2 cursor-pointer"
          ref={menuRef as any}
          onClick={toggleNavBar}
        >
          {isNavbarOpen ? "Close" : "Menu"}
          {isNavbarOpen ? (
            <i className="fi fi-br-cross-small text-white flex text-2xl"></i>
          ) : (
            <i className="fi fi-br-bars-sort flex text-white maa-rotateY-[180deg]"></i>
          )}
        </Menu>
      </Container>
      <main
        className={`${
          location.pathname !== "/projects" &&
          location.pathname !== "/services" &&
          !location.pathname.includes("/projects")
            ? "mt-36"
            : "mt-0"
        } mx-auto md:mx-0 bg-transparent `}
      >
        <Outlet />
      </main>
    </>
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

const Heading = styled.h1`
  font-variant: small-caps;
`;
const Menu = styled.p``;
export default Navbar;
