export interface JobInterface {
  _id: string | number;
  role: string;
  description: string;
  requirements: string[];
  applicationLink: string;
  applicationDeadline: Date;
  contactLinkType: "email" | "phoneNumber";
  contactLink: string;
}

const jobs: JobInterface[] = [
  {
    _id: 1,
    role: "Lead Software Engineer",
    description: "Lead Software Engineer",
    requirements: ["Full time", "Remote"],
    applicationLink: "https://www.linkedin.com/jobs/view/3495813502/",
    applicationDeadline: new Date(),
    contactLinkType: "email",
    contactLink: "philipowolabi79@gmail.com",
  },
  {
    _id: 2,
    role: "Lead Product Manager",
    description: "Product & Brand Designer with 5 years of experience.",
    requirements: [
      "5 years of experience",
      "Ready to move to the USA",
      "Has a portfolio hosted on the web",
    ],
    applicationLink: "https://www.linkedin.com/jobs/view/3495813502/",
    applicationDeadline: new Date(),
    contactLinkType: "email",
    contactLink: "philipowolabi507@gmail.com",
  },
  {
    _id: 3,
    role: "Content Strategist",
    description: "Highly skilled content manager with 5 years of experience.",
    requirements: [
      "5 years of experience",
      "Has a portofolio hosted on the web",
      "Remote",
      "Ready to move to the USA",
      "Very experienced with SEO",
    ],
    applicationLink: "https://www.linkedin.com/jobs/view/3495813502/",
    applicationDeadline: new Date(),
    contactLinkType: "phoneNumber",
    contactLink: "+2348153026203",
  },
];

export default jobs;
