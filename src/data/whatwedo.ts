export interface WhatWeDoDataType {
  name: string;
  keyWords: string[];
  linkTo: string;
}

const whatWeDoData: WhatWeDoDataType[] = [
  {
    name: "Web design & Development",
    linkTo: "",
    keyWords: [
      "web design",
      "web development",
      "ux / ui design",
      "corporate web design",
      "e-commerce web development",
    ],
  },
  {
    name: "App Development",
    linkTo: "",
    keyWords: [
      "mobile app development",
      "custom crm development",
      "intranet development",
      "api integrations",
      "portal development",
    ],
  },
  {
    name: "Videography & Photography",
    linkTo: "",
    keyWords: [
      "amination & motion graphics",
      "video production",
      "3d rendering & visualization",
      "post production & video editing",
      "product photography",
      "corporate headshots",
    ],
  },
  {
    name: "Marketing",
    linkTo: "",
    keyWords: [
      "marketing strategy",
      "content strategy",
      "social media",
      "email marketing",
      "seo",
      "paid ads / ppc",
    ],
  },
  {
    name: "design & branding",
    linkTo: "",
    keyWords: [
      "ux / ui design",
      "interactive design",
      "graphic design",
      "product design",
      "brand style guide",
      "brand strategy",
    ],
  },
];

export default whatWeDoData;
