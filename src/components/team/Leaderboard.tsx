import leads from "../../data/member-data";
import MemberCard from "./MemberCard";
import { Divi } from "./Intro";

const Leaderboard = () => {
  return (
    <div>
      <Divi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
        <h2
          className="text-white my-10 sm:my-15 md:my-20 font-medium"
          style={{ fontSize: "clamp(1.7rem , 6vw, 60px)" }}
        >
          Our Leadership
        </h2>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-6 md:gap-8 lg:grid-cols-3 lg:grid-rows-2 items-stretch place-content-stretch">
          {leads.map((lead) => (
            <MemberCard {...lead} />
          ))}
        </div>
      </Divi>
    </div>
  );
};

export default Leaderboard;
