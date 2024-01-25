// Images
import webDev from "../assets/images/services/web-dev.jpg";
import appDev from "../assets/images/services/app-dev.jpg";
import media from "../assets/images/services/media.jpg";
import design from "../assets/images/services/design.jpg";
import marketing from "../assets/images/services/marketing.jpg";

// Hero Images
import webDevHero from "../assets/images/services/hero-images/web-dev.jpg";
import appDevHero from "../assets/images/services/hero-images/app-dev.jpg";
import mediaHero from "../assets/images/services/hero-images/media.jpg";
import designHero from "../assets/images/services/hero-images/design.jpg";
import marketingHero from "../assets/images/services/hero-images/marketing.jpg";

interface CategoryDetailType {
  categoryName: string;
  categoryDescription: string;
  categoryTasks: string[];
}

// Service interface
export interface Service {
  id: string | number;
  name: string;
  thumbNail: string;
  serviceCategories: string[];
  learnMore: string;
  categoryDetails: CategoryDetailType[];
  heroImage: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "Web Design & Development",
    thumbNail: webDev,
    heroImage: webDevHero,
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
    categoryDetails: [
      {
        categoryName: "Website Design",
        categoryDescription:
          "Following the latest UX/UI strategies, we create websites which push the boundaries of interactivity and innovation. Our emphasis is on digital storytelling – every brand has a story, and every story deserves to be shared in a unique and compelling way. Our custom websites are designed to fit you and your brand’s exact specifications while engaging users, converting sales and generating leads.",
        categoryTasks: [
          "UX/UI design",
          "Responsive design",
          "Mobile optimization",
          "Custom modules",
          "Custom intake forms",
          "Interactive features",
          "Blog integrations",
        ],
      },
      {
        categoryName: "CMS Development",
        categoryDescription:
          "With over 35 years of combined experience in Custom Management System (CMS) development, we’re well-versed in an array of systems, such as WordPress, Drupal, Joomla, and Craft CMS. When it comes to WordPress, our modus operandi, we enable seamless back-end customization, allowing admins to quickly access and change content without having to touch a line of code.",
        categoryTasks: [
          "WordPress",
          "Drupal",
          "Joomla",
          "Craft CMS",
          "Custom CMS development",
          "ACF development",
          "Custom plug-ins",
        ],
      },
      {
        categoryName: "E-Commerce Creation/Development",
        categoryDescription:
          "Curate an intuitive online shopping experience with an easy-to-use e-commerce integration. Not only do we have experience with platforms like Shopify, Magento, and WooCommerce, we’ve also created custom e-commerce portals for clients interested in advanced customization.",
        categoryTasks: [
          "Shopify",
          "Magento",
          "WooCommerce",
          "Shipping integrations",
          "Payment integrations",
          "Custom e-commerce integration",
        ],
      },
      {
        categoryName: "Website Development",
        categoryDescription:
          "Our team of expert web developers specializes in transforming complex front-end designs into sleek and sophisticated code. From robust databases to server-side scripting, we ensure that your website functions flawlessly and stays high-performing despite increases in traffic load. All of our websites are integrated with a user-friendly CMS and equipped with a customized back-end admin panel to give you the keys to the car once the site is launched.",
        categoryTasks: [
          "Content migration",
          "CMS integration",
          "Custom training videos",
          "On-site SEO",
          "Quality assurance",
          "Hosting",
          "Deployment",
        ],
      },
      {
        categoryName: "Website Maintenance",
        categoryDescription:
          "At Adutem Innovation, we live by the credo that a website is only as good as its ongoing maintenance; as an evolving organism, a website requires routine checkups to remain healthy and high-performing. Whether you’re looking to fix bugs, swaps content, monitor uptime, review analytics or more, our monthly maintenance packages ensure your website continues to meet the demands of an ever-changing digital environment.",
        categoryTasks: [
          "Monthly WordPress updates",
          "Daily backups",
          "Regular malware scans",
          "Speed monitoring",
          "Monthly analytic reports",
        ],
      },
      {
        categoryName: "UX Research",
        categoryDescription:
          "User behavior should dictate a website’s design, not the other way around. Through usability testing, industry research, data analysis, and user personas, we delve deep into your user base to determine how to maximize engagement. By mapping out individual user journeys and determining the optimal user flow, our UX researchers provide a comprehensive blueprint to guide the design of your digital platform.",
        categoryTasks: [
          "Custom user personas",
          "User journeys",
          "Usability testing",
          "Site-mapping exercise",
          "In-depth market research",
          "Competitor analysis",
          "Low fidelity wireframes",
        ],
      },
      {
        categoryName: "Heuristic Analysis",
        categoryDescription:
          "If your digital platform isn’t performing as well as you’d like, it might be time to perform a heuristic analysis. By following a strict set of inspection methodology guidelines, our UX experts catch errors, ensure efficiency, and enhance usability. At the end of the evaluation, you’ll receive a detailed report highlighting problem areas and outlining possible solutions.",
        categoryTasks: [
          "Usability evaluation",
          "Navigation and information architecture review",
          "Form and input design evaluation",
          "Accessibility review",
          "Mobile and responsive design assessment",
          "Task flow analysis",
          "User feedback analysis",
        ],
      },
      {
        categoryName: "HDesign Audit",
        categoryDescription:
          "When it comes to branding across a variety of channels, consistency is key. Differences in visual design, messaging, and user experience from one platform to another can be off-putting for users and may even lead to a decreased conversion rate. During a design audit, our experts cross-analyze your digital platforms, flag inconsistencies, and offer actionable advice for how to remedy them.",
        categoryTasks: [
          "Layout and composition analysis",
          "Color and branding assessment",
          "Imagery and graphics review",
          "Brand consistency analysis",
          "Visual hierarchy assessment",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "App Development",
    thumbNail: appDev,
    heroImage: appDevHero,
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
    categoryDetails: [
      {
        categoryName: "CRM Integration",
        categoryDescription:
          "Selecting the appropriate Customer Relationship Management (CRM) system – which aids in managing, tracking, automating, and streamlining interactions with your clients – is a critical decision for your business. Our team of developers and marketing strategists conduct an extensive discovery process to identify and integrate the CRM solution that best aligns with your unique business model. And, in the event that an existing option doesn’t meet your requirements, we can develop a custom CRM system tailored exclusively for you.",
        categoryTasks: [
          "Sales automation",
          "Database management",
          "Lead management",
          "Client interaction tracking",
          "Workflow automation",
          "Business intelligence and reporting",
          "Knowledge management",
          "Mobile support",
        ],
      },
      {
        categoryName: "Web Application Development",
        categoryDescription:
          "For unique businesses, we provide innovative solutions through our custom web application development services. Whether you are looking to create a hybrid application or automate certain processes, our focus is on delivering tailor-made digital platforms that cater to the distinct needs of your business and enhance efficiency, all while pushing the boundaries of design. All of our custom web apps are user-centric and boast cross-browser capabilities.",
        categoryTasks: [
          "Web app design",
          "Web app development",
          "Testing",
          "Web app post-launch support",
          "API integration",
          "CRM integration",
        ],
      },
      {
        categoryName: "Mobile Application Development",
        categoryDescription:
          "Over 85% of Americans now own a cell phone, making mobile applications more popular, and more essential to a brand’s marketing strategy, than ever. But compared to their web-app counterparts, mobile apps demand a specific set of requirements. Our experienced developers and UX specialists will map out and create an application optimized specifically for mobile and ensure it’s available on Apple and GooglePlay stores.",
        categoryTasks: [
          "Market research",
          "Mobile app UX/UI design",
          "Mobile app development",
          "Prototyping",
          "Beta testing",
        ],
      },
      {
        categoryName: "Intranet Portal Development",
        categoryDescription:
          "A company’s internal communication and collaboration is crucial for its success, and an intranet portal plays a significant role in achieving these goals. Our team of expert developers works closely with you to design and develop customized intranet portals tailored to your specific business needs. From document management to employee directories, we integrate all necessary features into the portal to ensure seamless information exchange among employees.",
        categoryTasks: [
          "Custom portals",
          "Comprehensive feature integration",
          "Scalability",
          "Security and privacy",
          "Ongoing support and maintenance",
        ],
      },
      {
        categoryName: "LMS Development",
        categoryDescription:
          "We recognize the transformative power of eLearning and its growing significance in today’s increasingly digital world. Whether you are an educational institution, a business seeking employee training solutions, or an individual content creator, our comprehensive LMS development solutions will empower you to deliver a seamless learning experience.",
        categoryTasks: [
          "LearnDash integration",
          "Custom LMS Development",
          "LMS integration",
          "LMS customization and theming",
          "Mobile LMS development",
          "LMS support and maintenance",
        ],
      },
      {
        categoryName: "QA",
        categoryDescription:
          "In the digital world, quality is everything. Our experienced QA testers perform rigorous testing to identify bugs, errors, and inconsistencies, ensuring your website meets industry standards. From usability to accessibility, we cover all aspects of website QA testing to guarantee your website is user-friendly, fast, and efficient.",
        categoryTasks: [
          "Validation testing",
          "Input testing",
          "Browser testing",
          "Device testing",
          "Bug testing",
          "Performance testing",
          "Accessibility testing",
          "Wrap-up report",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Videography & Photography",
    thumbNail: media,
    heroImage: mediaHero,
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
    categoryDetails: [
      {
        categoryName: "Animation",
        categoryDescription:
          "In today’s digital landscape, capturing attention is more important than ever, and animation has become an essential tool in increasing engagement. Whether you want to showcase a product with 3D renders, create an animated explainer video for difficult concepts, or add a dynamic motion graphic to your social media post, our experienced animation team will collaborate with you to bring your ideas to life.",
        categoryTasks: [
          "3D rendering and visualization",
          "Motion graphics",
          "Animation explainer videos",
          "2D animation, 3D animation",
          "Modeling",
          "Simulations",
        ],
      },
      {
        categoryName: "Photography",
        categoryDescription:
          "Professionalism is the key to success in business. Using state-of-the-art equipment, our seasoned photographers produce stunning images to help elevate your brand’s marketing collateral and enhance your business’s overall public image.",
        categoryTasks: [
          "Headshots",
          "Product photography",
          "360-degree photography",
          "Event photography",
          "In studio or on location",
          "Photo editing",
        ],
      },
      {
        categoryName: "Creative",
        categoryDescription:
          "Have an idea for a video project or ad campaign, but don’t know where to begin? That’s where our creative services come in. With directorial advice, script guidance, and storyboarding sessions, we’ll put your vision into action.",
        categoryTasks: [
          "Moodboard",
          "Storyboard",
          "Script development",
          "Direction",
        ],
      },
      {
        categoryName: "Production",
        categoryDescription:
          "Create cost-effective, captivating videos to share across marketing channels. From site-management to videography to talent acquisition, our production team takes care of everything so you don’t have to.",
        categoryTasks: [
          "Producing",
          "Sound (field-mixing)",
          "Commercials",
          "Hero videos",
          "Corporate videos",
          "Ad campaigns",
          "Permitting",
          "Location scouting",
        ],
      },
      {
        categoryName: "Post-Production",
        categoryDescription:
          "Video editing, color correction, motion graphics, sound and music design – we offer a diverse range of post-production services that transform raw footage into high-quality deliverables. Our professional video editors are fluent in Davinci Resolve, Premier Pro, Avid, Final Cut Pro, Cinema 3D, Illustrator, Adobe Animate, Pro Tools and more.",
        categoryTasks: [
          "Video editing",
          "Sound and music design",
          "Color",
          "Motion graphics",
        ],
      },
      {
        categoryName: "Live Broadcasting & Webcasting",
        categoryDescription:
          "Communicate directly with your audience with our live broadcasting and webcasting services. Our team can join you on location, or set up equipment remotely for you to share your message across a variety of platforms.",
        categoryTasks: ["Live events", "Conferences", "Galas"],
      },
    ],
  },
  {
    id: 4,
    name: "Design & Branding",
    thumbNail: design,
    heroImage: designHero,
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
    categoryDetails: [
      {
        categoryName: "Print Design",
        categoryDescription:
          "Digital is not the only way to promote you and your product. When it comes to marketing, print design is still an effective marketing tool – recent research confirms that people retain information better after reading material in print rather than on-screen. At Adutem Innovation, our graphic designers specialize in creating eye-catching hardcopy assets engineered to have a lasting impact on your audience.",
        categoryTasks: [
          "Annual reports",
          "Ad design",
          "Brochure design",
          "Business card design",
          "Letterhead design",
          "Stationery design",
          "Media kits",
        ],
      },
      {
        categoryName: "Digital Design",
        categoryDescription:
          "Our digital designers are experts at communicating your brand through a variety of digital assets. From eye-catching email templates to digital ads and annual report design, our team of designers leverages the latest design trends and technologies to craft cutting-edge digital design solutions.",
        categoryTasks: [
          "Email templates",
          "Social media posts",
          "Ad design",
          "Annual report design",
          "Pitch decks",
        ],
      },
      {
        categoryName: "Logo Design",
        categoryDescription:
          "A logo is more than just a company’s visual icon. If it’s well-designed, a logo increases brand recognition, imparts professionalism, and fosters brand loyalty. Our specialized logo designers have extensive experience creating unique logos for companies and organizations across a wide array of industries.",
        categoryTasks: [
          "Discovery Discussion",
          "Research and Mood Board",
          "Concept development",
          "Vectorized logo",
        ],
      },
      {
        categoryName: "Brand Strategy",
        categoryDescription:
          "Set your brand up for success with a comprehensive strategy. Working with our branding specialist and marketing team, we’ll help you devise and execute a plan that generates brand awareness, aligns with your long-term goals, and fosters ongoing loyalty.",
        categoryTasks: [
          "Brand messaging development",
          "Email campaigns",
          "Social media strategy",
          "Public relations",
        ],
      },
      {
        categoryName: "Brand Identity",
        categoryDescription:
          "Coalesce your brand’s mission and value propositions into a distinctive identity with our marketing experts. Through workshops, extensive research, and interviews with external stakeholders, current clients, and board members, we will help you create a brand that has everyone buzzing.",
        categoryTasks: [
          "Brand style guide",
          "Brand mission, vision, and values",
          "Brand positioning",
          "Rebranding",
        ],
      },
    ],
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
    categoryDetails: [
      {
        categoryName: "Marketing Strategy",
        categoryDescription:
          "It’s not enough to offer top-tier products and services – a business needs a comprehensive marketing strategy to reach its full potential. Our experienced team of marketing specialists will assess your short-, medium-, and long-term goals and devise a step-by-step plan to propel you there.",
        categoryTasks: [
          "Marketing analyses",
          "Market research",
          "Review of analytics",
          "Strategy development",
          "Strategy execution",
          "Strategy management",
        ],
      },
      {
        categoryName: "Seo",
        categoryDescription:
          "There’s a reason search engine optimization (SEO) is still the most commonly used digital marketing technique. Aside from increasing overall engagement, SEO continues to have the highest ROI compared to other marketing strategies. Implementing the latest onsite and offsite SEO strategies, our SEO experts improve your website’s search engine ranking and increase organic traffic to ensure your digital platform achieves its maximum potential.",
        categoryTasks: [
          "Onsite SEO",
          "Offsite SEO",
          "SEO audit",
          "Analytic review",
          "Keyword research",
          "Keyword monitoring",
          "Backlinking strategy",
        ],
      },
      {
        categoryName: "Content Strategy",
        categoryDescription:
          "The effectiveness of a digital platform relies heavily on its written copy. To achieve optimal performance, content and design must work together in tandem. Our skilled content strategists conduct thorough research to ensure that the copy on your digital asset – whether it’s a website, blog post, or social media post – is not only fresh and compelling, but also optimized for user experience (UX).",
        categoryTasks: [
          "Web content",
          "Content curation",
          "Blog post creation",
          "Social media post copy",
          "Industry research",
        ],
      },
      {
        categoryName: "Social Media Management",
        categoryDescription:
          "As a brand, it’s of the utmost importance to constantly engage with and grow your consumer base. But who has the time? We do. Our social media strategists schedule and publish content, monitor trends, reply to comments, and expand your following so you can focus on building your brand.",
        categoryTasks: [
          "Instagram, Facebook, LinkedIn, Twitter, TikTok",
          "Static or video posts",
          "Schedule and publish content",
          "User engagement",
          "Monthly or bi-weekly analytic reports",
        ],
      },
      {
        categoryName: "Email Marketing",
        categoryDescription:
          "Through email sequencing, template creation, newsletters, integrations with automated email marketing platforms, and optimized on-site call-to-actions, we help capture and maintain subscribers. Our team creates highly personalized and scalable email marketing campaigns, helping to convert prospects into customers and one-time users into repeat clients.",
        categoryTasks: [
          "Mail Chimp integrations",
          "Custom templates",
          "Strategy overview",
          "Segmentation",
          "Re-engagement strategy",
          "A/B testing",
        ],
      },
      {
        categoryName: "Paid Ad Campaigns",
        categoryDescription:
          "Reach your target audience, drive traffic to your website, and increase brand awareness with a paid ad campaign. After extensive industry research, our marketing team will create and execute a strategy for how to allocate your advertising budget to maximize ROI.",
        categoryTasks: [
          "PPC",
          "Retargeting campaigns",
          "Paid search",
          "Social media advertising",
          "Banner ads",
          "Native ads",
          "Commercial spots",
        ],
      },
    ],
    heroImage: marketingHero,
  },
];

export default services;
