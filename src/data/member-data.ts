import ziadFoty from "../assets/images/team/ziad-foty.jpg";
import robertMielnik from "../assets/images/team/robert-mielnik.jpg";
import nancySzarkowski from "../assets/images/team/nancy-szarkowski.jpg";
import fuadFoty from "../assets/images/team/fuad-foty.jpg";
import lukasLysik from "../assets/images/team/lukas-lysik.jpg";
import peterRaphael from "../assets/images/team/peter.jpg";

export interface Lead {
  name: string;
  imageUrl: string;
  role: string;
}

const leads: Lead[] = [
  {
    name: "Ziad Foty",
    role: "CEO",
    imageUrl: ziadFoty,
  },
  {
    name: "Robert M",
    role: "COO",
    imageUrl: robertMielnik,
  },
  {
    name: "Nancy Szarkowski",
    role: "CCO (Chief Creative Office)",
    imageUrl: nancySzarkowski,
  },
  {
    name: "Fuad Foty",
    role: "CFO",
    imageUrl: fuadFoty,
  },
  {
    name: "Lukas Lysik",
    role: "CTO",
    imageUrl: lukasLysik,
  },
  {
    name: "Peter Raphael",
    role: "Director of Business Development",
    imageUrl: peterRaphael,
  },
];

export default leads;
