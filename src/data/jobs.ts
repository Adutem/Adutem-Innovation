export interface JobInterface {
  id: string | number;
  role: string;
  description: string;
  requirements: string[];
  applicationLink: string;
}

const jobs: JobInterface[] = [
  {
    id: 1,
    role: "Lead Software Engineer",
    description: "Lead Software Engineer",
    requirements: ["Full time", "Remote"],
    applicationLink: "https://www.linkedin.com/jobs/view/3495813502/",
  },
  {
    id: 2,
    role: "Lead Product Manager",
    description: "Product & Brand Designer with 5 years of experience.",
    requirements: [
      "5 years of experience",
      "Ready to move to the USA",
      "Has a portofolio hosted on the web",
    ],
    applicationLink: "https://www.linkedin.com/jobs/view/3495813502/",
  },
  {
    id: 3,
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
  },
];

export default jobs;
