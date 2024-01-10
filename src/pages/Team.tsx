import React from "react";
import Footer from "../components/home/Footer";
import Intro from "../components/team/Intro";
import Community from "../components/team/Community";
import Leaderboard from "../components/team/Leaderboard";

const Team = () => {
  document.documentElement.style.background = "black";
  return (
    <div>
      <Intro />
      <Community />
      <Leaderboard />
      <Footer hideIdea={false} />
    </div>
  );
};

export default Team;
