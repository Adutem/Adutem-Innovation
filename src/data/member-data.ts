// import ziadFoty from "../assets/images/team/ziad-foty.jpg";
// import robertMielnik from "../assets/images/team/robert-mielnik.jpg";
// import nancySzarkowski from "../assets/images/team/nancy-szarkowski.jpg";
// import fuadFoty from "../assets/images/team/fuad-foty.jpg";
// import lukasLysik from "../assets/images/team/lukas-lysik.jpg";
// import peterRaphael from "../assets/images/team/peter.jpg";
import adeola from "../assets/images/team/adeola_c.png";
import adura from "../assets/images/team/adura_c.png";
import anifat from "../assets/images/team/anifat_c.png";
import philip from "../assets/images/team/philip_c.png";
import tifeh from "../assets/images/team/tifeh_c.png";

export interface Lead {
  name: string;
  imageUrl: string;
  role: string;
}

// const leads: Lead[] = [
//   {
//     name: "Ziad Foty",
//     role: "CEO",
//     imageUrl: ziadFoty,
//   },
//   {
//     name: "Robert M",
//     role: "COO",
//     imageUrl: robertMielnik,
//   },
//   {
//     name: "Nancy Szarkowski",
//     role: "CCO (Chief Creative Office)",
//     imageUrl: nancySzarkowski,
//   },
//   {
//     name: "Fuad Foty",
//     role: "CFO",
//     imageUrl: fuadFoty,
//   },
//   {
//     name: "Lukas Lysik",
//     role: "CTO",
//     imageUrl: lukasLysik,
//   },
//   {
//     name: "Peter Raphael",
//     role: "Director of Business Development",
//     imageUrl: peterRaphael,
//   },
// ];

// export default leads;

const teamMembers: Lead[] = [
  {
    name: "Adura",
    role: "CEO",
    imageUrl: adura,
  },
  {
    name: "Adeola",
    role: "Marketing Lead",
    imageUrl: adeola,
  },
  {
    name: "Anifat",
    role: "CFO",
    imageUrl: anifat,
  },
  // {
  //   name: "Tifeh",
  //   role: "Design Lead",
  //   imageUrl: tifeh,
  // },
  {
    name: "Philip",
    role: "Tech Lead",
    imageUrl: philip,
  },
];

export default teamMembers;
