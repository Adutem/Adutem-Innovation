import React from "react";
import Intro from "../components/home/Intro";
import WhatWeDo from "../components/home/WhatWeDo";
import FeaturedProject from "../components/home/FeaturedProject";

const Home = () => {
  return (
    <div style={{ height: "10000px" }} className="mt-36">
      <Intro />
      <WhatWeDo />
      <FeaturedProject />
    </div>
  );
};

export default Home;
