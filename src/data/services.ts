// Images
import webDev from "../assets/images/services/web-dev.jpg";
import appDev from "../assets/images/services/app-dev.jpg";
import media from "../assets/images/services/media.jpg";
import design from "../assets/images/services/design.jpg";
import marketing from "../assets/images/services/marketing.jpg";

// Service interface
export interface Service {
  id: string | number;
  name: string;
  thumbNail: string;
  serviceCategories: string[];
  learnMore: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Web Design & Development",
    thumbNail: webDev,
    serviceCategories: [
      "Web Design",
      "Web Development",
      "UI / UX Design",
      "Corporate Web Design",
      "Wordpress Development",
      "E-commerce Web Development",
      "Website Maintenance",
      "Custom Web Design",
    ],
    learnMore: "/",
  },
  {
    id: 2,
    name: "App Development",
    thumbNail: appDev,
    serviceCategories: [
      "Web Application",
      "Mobile App Development",
      "Intranet Portal Development",
      "Custom CRM / CMS Development",
      "API Integration",
      "CRM Integration",
      "Custom LMS (Learning Management System) Development",
      "Manual & Automated QA (Quality Assurance)",
      "React Development",
      "Laravel/PHP Development",
      "Node.Js Development",
    ],
    learnMore: "/",
  },
  {
    id: 3,
    name: "Videography & Photography",
    thumbNail: media,
    serviceCategories: [
      "Pre-Production",
      "Video Production",
      "Editing / Post-Production",
      "Animation",
      "Motion Graphics",
      "3D Rendering & Visualization",
      "Scripting",
      "Product Photography",
      "Corporate Headshots",
    ],
    learnMore: "/",
  },
  {
    id: 4,
    name: "Design & Branding",
    thumbNail: design,
    serviceCategories: [
      "UI / UX Design",
      "Design Audit",
      "Interactive Design Prototyping",
      "Logo Design",
      "Graphics Design",
      "Product Design",
      "Brand Style Guide",
    ],
    learnMore: "/",
  },
  {
    id: 5,
    name: "Marketing Strategy",
    thumbNail: marketing,
    serviceCategories: [
      "Marketing Strategy",
      "Sales Strategy / Consulting",
      "Content Strategy",
      "Email Marketing",
      "SEO",
      "Paid Ads / PPC",
      "Social Media Strategy",
    ],
    learnMore: "/",
  },
];

export default services;
