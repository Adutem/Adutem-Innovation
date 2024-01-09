import React from "react";
import Footer from "../components/home/Footer";
import Intro from "../components/team/Intro";

const Team = () => {
  document.documentElement.style.background = "black";
  return (
    <div className="w-11/12 mx-auto max-w-[1024px]  pb-7">
      <Intro />
      <Footer hideIdea={false} />
    </div>
  );
};

export default Team;
