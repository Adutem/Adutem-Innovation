import React from "react";
import Intro from "../components/home/Intro";
import Qualities from "../components/home/Qualities";
import FeaturedProject from "../components/home/FeaturedProject";
import WhatWeDo from "../components/home/WhatWeDo";

const Home = () => {
  return (
    <div style={{ height: "10000px" }} className="mt-36">
      <Intro />
      <Qualities />
      <FeaturedProject />
      <WhatWeDo />
    </div>
  );
};

export default Home;
