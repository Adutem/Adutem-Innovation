export interface NavLink {
  title: string;
  to: string;
}

const navLinks: NavLink[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Work",
    to: "/projects",
  },
  {
    title: "Services",
    to: "/services",
  },
  {
    title: "Team",
    to: "/team",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

export default navLinks;
