import React from "react";
import Intro from "../components/home/Intro";
import Qualities from "../components/home/Qualities";
import FeaturedProject from "../components/home/FeaturedProject";
import WhatWeDo from "../components/home/WhatWeDo";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div className="mt-36">
      <Intro />
      <Qualities />
      <FeaturedProject />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default Home;
