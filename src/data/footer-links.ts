export interface FooterLink {
  title: string;
  to: string;
}

const footerLinks: FooterLink[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Work",
    to: "/projects",
  },
  {
    title: "Our Services",
    to: "/services",
  },
  {
    title: "Our Team",
    to: "/team",
  },
  // {
  //   title: "Careers",
  //   to: "/careers",
  // },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Contact Us",
    to: "/contact",
  },
  // {
  //   title: "Employee Portal",
  //   to: "/employee-portal",
  // },
];

export default footerLinks;
