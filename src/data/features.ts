import featureImage1 from "../assets/images/featured-project-1.jpg";
import featureImage2 from "../assets/images/featured-project-2.jpg";
import featureImage3 from "../assets/images/featured-project-3.jpg";
import featureImage4 from "../assets/images/featured-project-4.jpg";
import featureImage5 from "../assets/images/featured-project-5.jpg";
import featureImage6 from "../assets/images/featured-project-6.jpg";

export interface Feature {
  title: string;
  imageUrl: string;
  shortDescription: string;
  linkTo: string;
  keyWords: string[];
}

const features: Feature[] = [
  {
    title: "world bank/2023 water resources group",
    shortDescription:
      "We partnered with 2030 Water Resources Group, a division of the World Bank, to curate an online experience that was both engaging and impactful. With an interactive map, compelling infographics, and a clear call-to-action to join the water security movement, the resulting site is intuitive and engaging.",
    imageUrl: featureImage1,
    linkTo: "",
    keyWords: [
      "web development",
      "interactive map",
      "seo optimization",
      "ux / ui design",
      "web design",
    ],
  },
  {
    title: "DowntownDC",
    shortDescription:
      "Our ongoing collaboration with DowntownDC, the oldest Business Improvement District (BID) in DC, began when we produced several videos for their annual awards ceremony. Since then, we have created a new website for the organization, as well as designed their online annual report [more specifics here].",
    imageUrl: featureImage2,
    linkTo: "",
    keyWords: [
      "web development",
      "social media strategy",
      "event calendar integration",
      "post-production (video)",
      "annual report design",
      "web design",
    ],
  },
  {
    title: "Summit Ridge Energy",
    shortDescription:
      "Summit Ridge Energy is one of our nation’s leading solar providers. Applying our multiservice approach, we transformed their online platform to better reflect the caliber of their work. We redesigned and developed their website, integrating a hero video, optimized content, and dynamic infographics. To help users understand the company’s community solar program, we also created a custom animation explainer video.",
    imageUrl: featureImage3,
    linkTo: "",
    keyWords: [
      "web development",
      "hero video",
      "live and animated explainer video",
      "ux / ui design",
      "animation",
      "photography",
      "iconography",
      "web design",
    ],
  },
  {
    title: "JFL Consulting",
    shortDescription:
      "We worked alongside JFL Consulting, a top-tier network security company, to elevate their digital presence. First, we redesigned and developed their website, incorporating fresh content and a custom hero video. Upon successfully completing that initial phase, we created a custom support portal for clients.",
    imageUrl: featureImage4,
    linkTo: "",
    keyWords: [
      "web development",
      "client support portal",
      "content creation",
      "360<sup>o<sup> production photography",
      "hero video",
      "web design",
    ],
  },
  {
    title: "Reflexion",
    shortDescription:
      "Reflexion is a cutting-edge cognitive sports-training company. What started as a website redesign project for the burgeoning tech start-up quickly evolved into a lasting creative partnership. We went on to create a mobile gaming platform where prospective clients can test-drive the company’s neuro-training program, and continue to provide maintenance services.",
    imageUrl: featureImage5,
    linkTo: "",
    keyWords: [
      "web development",
      "explainer video",
      "ux / ui design",
      "animation",
      "web and mobile apps",
      "t-shirt design",
      "maintenance retainer package",
      "web design",
    ],
  },
  {
    title: "EXAMiT",
    shortDescription:
      "EXAMiT began as an idea: an AP physics platform that promoted both learning and social connectivity. We kicked off the project by scoping out the required product features which led us into a larger collaboration to build out the organization’s unique app. Through marketing and maintenance, we continue to foster EXAMiT’s growth.",
    imageUrl: featureImage6,
    linkTo: "",
    keyWords: [
      "web development",
      "custom social portal",
      "learning management system",
      "product design",
      "marketing and maintenance",
      "web design",
    ],
  },
];

export default features;
