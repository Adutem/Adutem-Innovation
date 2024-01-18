// Thumbnails
import reflexionThumbnail from "../assets/images/projects/reflexion/thumbNail.jpg";
import altumintThumbnail from "../assets/images/projects/altumint/thumbNail.jpg";
import jflThumbnail from "../assets/images/projects/jfl/thumbNail.jpg";
import wrgThumbnail from "../assets/images/projects/wrg/thumbNail.jpg";

// Hero media
import reflexionHeroImage from "../assets/images/projects/reflexion/heroImage.jpg";
import altumintHeroImage from "../assets/images/projects/altumint/heroImage.jpg";
import jflHeroImage from "../assets/images/projects/jfl/heroImage.jpg";
import wrgHeroVideo from "../assets/videos/projects/wrg/waterresourcesgroup-video.mp4";

// Preview Poster
import reflexionPreviewVideoPoster from "../assets/images/projects/reflexion/banner-poster-reflexion.jpg";
import altumintPreviewVideoPoster from "../assets/images/projects/altumint/banner-poster-altumint.jpg";
import jflPreviewVideoPoster from "../assets/images/projects/jfl/banner-poster-jfl.jpg";
import wrgPreviewVideoPoster from "../assets/images/projects/wrg/banner-poster-wrg.jpg";

// Preview Video
import reflexionPreviewVideo from "../assets/videos/projects/reflexion/preview.mp4";
import altumintPreviewVideo from "../assets/videos/projects/altumint/preview-altumint.mp4";
import jflPreviewVideo from "../assets/videos/projects/jfl/preview-jfl.mp4";
import wrgPreviewVideo from "../assets/videos/projects/wrg/preview-water.mp4";

// Hero Project SnapShot
import reflexionHeroProjectSnapShot from "../assets/images/projects/reflexion/heroProjectSnapshot.jpg";
import altumintHeroProjectSnapShot from "../assets/images/projects/altumint/heroProjectSnapshot.jpg";
import jflHeroProjectSnapShot from "../assets/images/projects/jfl/heroProjectSnapshot.jpg";
import wrgHeroProjectSnapShot from "../assets/images/projects/wrg/heroProjectSnapshot.jpg";

// Web SnapShots
import reflexionProjectSnapShotForWebA from "../assets/images/projects/reflexion/projectSnapShotsForWebA.jpg";
import altumintProjectSnapShotForWebA from "../assets/images/projects/altumint/projectSnapShotsForWebA.jpg";
import jflProjectSnapShotForWebA from "../assets/images/projects/jfl/projectSnapShotsForWebA.jpg";
import wrgProjectSnapShotForWebA from "../assets/images/projects/wrg/projectSnapShotsForWebA.jpg";

import reflexionProjectSnapShotForWebB from "../assets/images/projects/reflexion/projectSnapShotsForWebB.jpg";
import altumintProjectSnapShotForWebB from "../assets/images/projects/altumint/projectSnapShotsForWebB.jpg";
import jflProjectSnapShotForWebB from "../assets/images/projects/jfl/projectSnapShotsForWebB.jpg";
import wrgProjectSnapShotForWebB from "../assets/images/projects/wrg/projectSnapShotsForWebB.jpg";

// Mobile SnapShots
import reflexionProjectSnapShotForMobileA from "../assets/images/projects/reflexion/projectSnapShotsForMobileA.jpg";
import jflProjectSnapShotForMobileA from "../assets/images/projects/jfl/projectSnapShotsForMobileA.jpg";
import wrgProjectSnapShotForMobileA from "../assets/images/projects/wrg/projectSnapShotsForMobileA.jpg";
import reflexionProjectSnapShotForMobileB from "../assets/images/projects/reflexion/projectSnapShotsForMobileB.jpg";
import jflProjectSnapShotForMobileB from "../assets/images/projects/jfl/projectSnapShotsForMobileB.jpg";
import wrgProjectSnapShotForMobileB from "../assets/images/projects/wrg/projectSnapShotsForMobileB.jpg";
import reflexionProjectSnapShotForMobileC from "../assets/images/projects/reflexion/projectSnapShotsForMobileC.jpg";
import jflProjectSnapShotForMobileC from "../assets/images/projects/jfl/projectSnapShotsForMobileC.jpg";
import wrgProjectSnapShotForMobileC from "../assets/images/projects/wrg/projectSnapShotsForMobileC.jpg";

type ProjectCategory =
  | "All"
  | "Apps"
  | "Construction/Landscaping"
  | "Education"
  | "IT"
  | "Maintenance"
  | "NGO/Government"
  | "Photography/Graphics"
  | "SEO"
  | "Video"
  | "Websites";

interface ProjectFeedback {
  whatTheySay: string;
  clientName: string;
  clientRole: string;
}

interface HeroMedia {
  type: "video" | "image";
  mediaUrl: string;
}
export interface ProjectData {
  id: string | number;
  title: string;
  shortDescription: string;
  thumbNailUrl: string;
  heroMedia: HeroMedia;
  heroShortTag: string;
  aboutTheCompany: string;
  whatWeDo: string[];
  previewVideoPoster: string;
  previewVideo: string;
  aboutTheProject: string[];
  heroProjectSnapShot: string;
  feedback: ProjectFeedback | null;
  projectSnapShotsForWeb: [string, string];
  projectSnapShotsForMobile?: [string, string, string];
  moreProjects?: string[];
  projectCategory: ProjectCategory[];
}

const works: ProjectData[] = [
  {
    id: 1,
    title: "Reflexion",
    shortDescription:
      "Web Design & Development, Web & Mobile App, UX/UI Design, Explainer Video, Animation, Maintenance and other",
    thumbNailUrl: reflexionThumbnail,
    heroMedia: {
      type: "image",
      mediaUrl: reflexionHeroImage,
    },
    heroShortTag: "Play More, See More",
    aboutTheCompany:
      "Reflexion is a cognitive sports-training service which uses data-driven, speed-focused AI technology to bolster its clients’ physical and mental capabilities. The company’s clients include professional athletes, businesspeople and rehab patients who “neuro train” using a state-of-the-art touchscreen lightboard. The technology, which tracks progress and tailors drill sessions accordingly, strengthens clients’ cognition and sharpens skills such as decision-making, reaction time and hand-eye coordination.",
    whatWeDo: [
      "Web Design",
      "Web Development",
      "Explainer Video",
      "UX/UI design",
      "Animation",
      "Web and Mobile Apps",
      "T-shirts Design",
      "Maintenance Retainer Package",
    ],
    previewVideoPoster: reflexionPreviewVideoPoster,
    previewVideo: reflexionPreviewVideo,
    aboutTheProject: [
      "As a pioneer in sports training, Reflexion wanted a website which reflects the company’s unique, AI-powered methods. First and foremost, its Edge suite of cognition-sharpening tools is a game changer for athletes seeking to outperform competitors. But Reflexion also wanted to display the nuances of the technology’s applications outside of sports—for rehab, physical therapy and business training. So Reflexion partnered with Design in DC to co-create a site as dynamic, engaging and stimulating as the company itself.",
      "Hoping to start off with a bang, DDC learned the science behind cognitive sports training and created an eye-popping, animated explainer video. This set the tone for the rest of the site which, in demonstrating Edge’s applications, offers compelling visuals, content and CTAs, including “request demo” and “learn more” buttons on every page. DDC and Reflexion also brainstormed to create a free mobile app enabling users to sample neuro training video-game-style. The app is a big draw, translating into increased traffic on Reflexion’s website and brand promotion for the company. Design in DC continues to partner with Reflexion via an open-ended maintenance contract, which involves continual maintenance, upgrades and promotion of the site.",
    ],
    heroProjectSnapShot: reflexionHeroProjectSnapShot,
    feedback: {
      whatTheySay:
        "They provided a level of service that was easily beyond their cost.",
      clientName: "Matt Campagna",
      clientRole: "CEO, Reflexion",
    },
    projectSnapShotsForWeb: [
      reflexionProjectSnapShotForWebA,
      reflexionProjectSnapShotForWebB,
    ],
    projectSnapShotsForMobile: [
      reflexionProjectSnapShotForMobileA,
      reflexionProjectSnapShotForMobileB,
      reflexionProjectSnapShotForMobileC,
    ],
    projectCategory: ["Apps", "Websites"],
  },
  {
    id: 2,
    title: "Altumint",
    shortDescription:
      "Web Design & Development, UX/UI Design, Intranet Portal, Logo Design, Video Editing, Maintenance and other",
    thumbNailUrl: altumintThumbnail,
    heroMedia: {
      type: "image",
      mediaUrl: altumintHeroImage,
    },
    heroShortTag: "Deep Visual Intelligence for an Optimized World",
    aboutTheCompany:
      "Powered by top-tier AI, Altumint is a visual intelligence company which benefits a variety of industries by mixing the latest in surveillance technology with optimal solutions to formidable challenges. The industries range from education to law enforcement to retail sales, and the technology includes automated vehicle recognition, traffic enforcement and person detection. The company’s biggest strength—aside from its focus on customer service—is its turnkey solutions, each one leveraging superior AI software to meet a client’s specific needs.",
    whatWeDo: [
      "Web Design",
      "Web Development",
      "UX/UI Design",
      "Logo Design",
      "Conference video edits",
      "Ongoing Maintenance",
    ],
    previewVideoPoster: altumintPreviewVideoPoster,
    previewVideo: altumintPreviewVideo,
    aboutTheProject: [
      "After merging with another company, and expanding its capabilities and customer base, Altumint sought to reinvent itself online, with a bold new logo and an all-encompassing website setting it apart from competitors. Design in DC dove into the project wholeheartedly—first by designing a mind’s-eye graphic for the logo, then laying out a dynamic home page which highlights the AI technology while showing, via icons and pop-ups, its sweeping applications, including safety, mobility and intelligence. A DDC-produced promo video also sums up the company’s sweeping array of services.",
      "From the home page, visitors with specific interests can link to detailed, easy-to-read subpages, each displaying the full range of Altumint’s capabilities. Law enforcement, for example, delves into the company’s traffic, security and forensic services; Education focuses on child and campus safety; Transportation on traffic flow. Retail, the company’s newest clientele, covers customer behaviors as well as store safety and security. Overall, the site is sleek and modern-looking, easy to navigate and features multiple CTAs and customer testimonials. Altumint was so happy with the rebranding, it entered into a retainer agreement with DDC, which continues to help the business grow.",
    ],
    heroProjectSnapShot: altumintHeroProjectSnapShot,
    feedback: {
      whatTheySay:
        "Outstanding technical competence and receptivity to customer input. A well balanced team of marketing, technical development, and text and artistic content creators. Fast and efficient.",
      clientName: "Marcos Sirota",
      clientRole: "President, Altumint",
    },
    projectSnapShotsForWeb: [
      altumintProjectSnapShotForWebA,
      altumintProjectSnapShotForWebB,
    ],
    projectCategory: ["Websites"],
  },
  {
    id: 3,
    title: "JFL",
    shortDescription:
      "Web Design & Development, UX/UI Design, Client Support Portal, Hero Video, 360° Product Photography and other",
    thumbNailUrl: jflThumbnail,
    heroMedia: {
      type: "image",
      mediaUrl: jflHeroImage,
    },
    heroShortTag: "Your Security is Our Priority",
    aboutTheCompany:
      "JFL Consulting is a premier cybersecurity company whose services, products, and expertise ensure the secure optimization of their clients’ online operations. JFL’s skilled experts work closely with both Federal and commercial clients, offering a range of customizable solutions that mitigate security risks and protect potentially vulnerable computer network systems. The company is also the sole proprietor of their signature product, the Mobile Air Cyber Kit (MACK). A portable, military-approved, high-performance IT network system, MACK serves as an on-the-go data center.",
    whatWeDo: [
      "Web Design",
      "Web Development",
      "Client Support Portal",
      "Content Creation",
      "360° Product Photography",
      "Hero Video",
    ],
    previewVideoPoster: jflPreviewVideoPoster,
    previewVideo: jflPreviewVideo,
    aboutTheProject: [
      "Although the company employed some of the best minds in the cybersecurity industry, JFL Consulting’s online presence left a lot to be desired. Looking to improve their credibility and increase authority in the field, JFL wanted a clean and modern website that showcased their cutting-edge technology in a way that didn’t alienate users who were less fluent in cybersecurity terminology. Inspired by Apple’s simplicity and sophistication, we began reimagining JFL’s new digital platform.",
      "Our first priority was to streamline navigation. Incorporating a mega menu, users can now see JFL Consulting’s full spectrum of services and products at a quick glance and select the areas most relevant to them. To increase immediate engagement, our video editors created a dynamic hero video for the site’s homepage that highlights the company’s key value propositions. Meanwhile, our content strategist replaced dense, jargon-filled paragraphs with digestible morsels that dynamically load as the user scrolls. An entire product page was dedicated to MACK’s ingenuity, complete with 360° product photography which offers potential customers a revolving view of the avant-garde device. Once the website redesign was complete, JFL returned to Design in DC to build out a client support portal.",
    ],
    heroProjectSnapShot: jflHeroProjectSnapShot,
    feedback: {
      whatTheySay:
        "They provided a level of service that was easily beyond their cost.",
      clientName: "Montana Fredrick",
      clientRole: "Head of Marketing, Foodspace Technology",
    },
    projectSnapShotsForWeb: [
      jflProjectSnapShotForWebA,
      jflProjectSnapShotForWebB,
    ],
    projectSnapShotsForMobile: [
      jflProjectSnapShotForMobileA,
      jflProjectSnapShotForMobileB,
      jflProjectSnapShotForMobileC,
    ],
    projectCategory: ["Apps", "Websites"],
  },
  {
    id: 4,
    title: "2030 Water Resources Group",
    shortDescription:
      "Web Design & Development, UX/UI Design, Interactive Map, On-Site SEO Optimization and other",
    thumbNailUrl: wrgThumbnail,
    heroMedia: {
      type: "image",
      mediaUrl: wrgHeroVideo,
    },
    heroShortTag:
      "FOUNDED BY THE WORLD BANK <br /> Collective Action on Water Security for People, Environment, and Economy",
    aboutTheCompany:
      "A multi-donor trust fund hosted by the World Bank Group, 2030 Water Resources Group aims to help countries reach water security by the year 2030. To achieve this goal, the organization has two overarching mandates: to increase global awareness among decision-makers about the importance of water for people, environments, and economies; and to help decision-makers facilitate the sustainable use of water. With over 1000 partners worldwide, 2030 WRG operates at the public, private, and civil level in countries across the globe.",
    whatWeDo: [
      "Web Design",
      "Web Development",
      "UX/UI Design",
      "Interactive Map",
      "On-Site SEO Optimization",
    ],
    previewVideoPoster: wrgPreviewVideoPoster,
    previewVideo: wrgPreviewVideo,
    aboutTheProject: [
      "When 2030 WRG approached Design in DC, its website was overflowing with important information but lacked a dynamic and user-friendly interface. Our task was to transform the existing site into an interactive digital experience that would both captivate and educate users. We wanted site visitors to understand 2030 WRG’s initiatives with as few clicks as possible, while also incentivizing those users to take part in the growing water security movement.",
      'In order for users to properly visualize 2030 WRG’s global model, our team designed an interactive map illustrating 2030 WRG’s ongoing projects. The clickable map displays the organization’s impressive reach while enabling users to learn more about each region’s water-security challenges. Since 2030 WRG serves as a hub for water security-related materials, our team compiled and categorized the organization’s many documents on one "Resource” page. A cross-site search functionality now allows researchers to easily locate items they’re looking for without having to wade through immense amounts of information. To reflect the focus of the organization’s important work, our designers incorporated a subtle wave animation on the site’s main pages.',
    ],
    heroProjectSnapShot: wrgHeroProjectSnapShot,
    feedback: null,
    projectSnapShotsForWeb: [
      wrgProjectSnapShotForWebA,
      wrgProjectSnapShotForWebB,
    ],
    projectSnapShotsForMobile: [
      wrgProjectSnapShotForMobileA,
      wrgProjectSnapShotForMobileB,
      wrgProjectSnapShotForMobileC,
    ],
    projectCategory: ["Apps", "Websites"],
  },
];

export default works;
