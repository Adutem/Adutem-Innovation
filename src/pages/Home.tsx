import React, { useEffect, useState } from "react";
import Intro from "../components/home/Intro";
import Qualities from "../components/home/Qualities";
import FeaturedProject from "../components/home/FeaturedProject";
import WhatWeDo from "../components/home/WhatWeDo";
import Footer from "../components/home/Footer";
import ClientFeedBack from "../components/home/ClientFeedBack";
import { useRedux } from "@/hooks/useRedux";
import { getActiveHoliday } from "@/redux";

const Home = () => {
  document.documentElement.style.background = "var(--black)";
  // Redux utils
  const { dispatch } = useRedux();

  useEffect(() => {
    dispatch(getActiveHoliday(true));
  }, []);

  return (
    <>
      <Intro />
      <Qualities />
      {/* <FeaturedProject /> */}
      <WhatWeDo />
      <ClientFeedBack />
      <Footer hideIdea={false} />
    </>
  );
};

export default Home;
