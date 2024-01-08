import React from "react";
import Intro from "../components/home/Intro";
import Qualities from "../components/home/Qualities";
import FeaturedProject from "../components/home/FeaturedProject";
import WhatWeDo from "../components/home/WhatWeDo";
import Footer from "../components/home/Footer";
import ClientFeedBack from "../components/home/ClientFeedBack";

const Home = () => {
  document.documentElement.style.background = "var(--black)";
  // document.body.style.background = "var(--black)";
  // (document.querySelector("#root") as HTMLDivElement).style.background =
  //   "var(--black)";

  return (
    <>
      <Intro />
      <Qualities />
      <FeaturedProject />
      <WhatWeDo />
      <ClientFeedBack />
      <Footer hideIdea={false} />
    </>
  );
};

export default Home;
