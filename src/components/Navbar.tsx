import React, { useEffect, useRef } from "react";
import Animator from "../utils/modules/animation/animation";
import { useScrollPosition } from "../hooks";

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
  }, [value]);
  return (
    <div className="fixed top-0 left-0 flex justify-between items-center px-6 w-full py-4 bg-[var(--black)]">
      <h1
        className="neue-ultrabold text-3xl  maa-transition-[1s] maa-translateX-[100px]"
        ref={h1Ref as any}
      >
        Adutem <br />
        <span>Innovation</span>
      </h1>
      <button
        className="rounded-2xl bg-blue-800 px-9 py-4 flex items-center gap-2 maa-transition-[1s]"
        ref={getInTouchBtnRef as any}
      >
        Get in touch
        <i className="fi fi-rr-arrow-small-right flex  text-xl -maa-rotate-[45deg]"></i>
      </button>
      <p
        className="gray-white-color -maa-translateX-[100px] maa-transition-[1s]"
        ref={menuRef as any}
      >
        Menu
      </p>
    </div>
  );
};

export default Navbar;
