import React, { useEffect, useRef } from "react";
import Animator from "../utils/modules/animation/animation";
import { useScrollPosition } from "../hooks";

const Navbar = () => {
  const h1Ref = useRef<HTMLElement | Element | null>();

  const removeClass = () => {
    if (h1Ref.current) {
      h1Ref.current.classList.remove("maa-translateX-[200px]");
    }
  };

  const addClass = () => {
    if (h1Ref.current) {
      h1Ref.current.classList.add("maa-translateX-[200px]");
    }
  };

  const { isPastPosition } = useScrollPosition(
    h1Ref.current,
    150,
    removeClass,
    addClass
  );

  useEffect(() => {
    new Animator();
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0 }}>
      <h1 className="neue-ultrabold maa-transition-[1s]" ref={h1Ref as any}>
        Hello
      </h1>
      <p className="gray-white-color">World</p>
    </div>
  );
};

export default Navbar;
