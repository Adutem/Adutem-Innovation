import clutchName from "../assets/images/blog/clutch-name.jpg";
import digitalMarketing from "../assets/images/blog/digital-marketing.jpg";
import seoBasics from "../assets/images/blog/seo-basics.jpg";
import howToGetMoreQualified from "../assets/images/blog/how-to-get-more.jpg";
import howChatGPT from "../assets/images/blog/how-chatgpt.jpg";

export interface BlogPost {
  id: string | number;
  title: string;
  shortDescription: string;
  thumbNail: string;
  publicationDate: string | Date;
  tag: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "Clutch Names Design In DC as one of the Game Changing Branding Agencies in Washington DC",
    shortDescription:
      "In today’s digital landscape, branding has evolved far beyond logos and slogans. It’s a rich tapestry of aggressive advertising, immersive user experiences, and narratives that reach people through compelling content and visuals.  Modern brands recognize the importance of developing a strong digital image, utilizing an array of digital tools that include web design, app development, […]",
    thumbNail: clutchName,
    publicationDate: new Date(),
    tag: "Marketing",
  },
  {
    id: 2,
    title: "Digital Marketing Cheat Sheet: Your Guide to a Successful Campaign",
    shortDescription:
      "Unlock the Secrets to Successful Digital Marketing Today, a solid understanding of digital marketing is essential for any business or individual looking to thrive online. However, many people shy away from digital marketing because they don’t fully comprehend its intricacies.  If you find yourself in this position, fear not!  In this comprehensive cheat sheet, we […]",
    thumbNail: digitalMarketing,
    publicationDate: new Date(),
    tag: "Marketing",
  },
  {
    id: 3,
    title: "SEO Basics: How to Optimize Your Website",
    shortDescription:
      "Learn the Basics of SEO to Boost Your Online Presence In today’s digital landscape, having a strong online presence is crucial for the success of any business or website. With millions of websites competing for attention, how can you ensure your content stands out?  This is where Search Engine Optimization (SEO) comes into play. Understanding […]",
    thumbNail: seoBasics,
    publicationDate: new Date(),
    tag: "SEO",
  },
  {
    id: 4,
    title: "How to Get More Qualified Leads with Paid Advertising",
    shortDescription:
      "In today’s digital marketplace, paid ads are essential for businesses looking to maximize marketing potential with the highest ROI. With the right strategy, paid advertising can drive traffic, increase brand awareness, and generate qualified leads from your target audience. Our comprehensive guide teaches you how to implement a successful paid ad campaign into your digital […]",
    thumbNail: howToGetMoreQualified,
    publicationDate: new Date(),
    tag: "Marketing",
  },
  {
    id: 5,
    title: "How ChatGPT 4 Will Revolutionize Modern Marketing",
    shortDescription:
      "ChatGPT 4 is transforming both the AI landscape and marketing strategies. With its advanced capabilities and human-like responses, it enhances customer engagement, improves efficiency, and accelerates content creation. From automating data analysis to personalized interactions, incorporating ChatGPT saves time and resources. Let’s explore how ChatGPT works and the profound impact it has on modern marketing. […]",
    thumbNail: howChatGPT,
    publicationDate: new Date(),
    tag: "Uncategorized",
  },
];

export default blogPosts;
