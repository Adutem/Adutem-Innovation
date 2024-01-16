import works from "../data/works";
import { Divi } from "../components/team/Intro";
import styled from "styled-components";
import workHero from "../assets/images/work-hero.jpg";
import ProjectCard from "../components/work/ProjectCard";
import Footer from "../components/home/Footer";

const projectCategory: string[] = [
  "All",
  "Apps",
  "Construction/Landscaping",
  "Education",
  "IT",
  "Maintenance",
  "NGO/Government",
  "Photography/Graphics",
  "SEO",
  "Video",
  "Websites",
];

const CustomDivi = styled(Divi)`
  p.faded {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const Work = () => {
  return (
    <CustomDivi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
      <div className="absolute top-0 left-0 right-0 w-full h-[120px]">
        <img
          src={workHero}
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <h1
        className="text-white leading-normal md:leading-tight mb-2 pt-28 text-left max-w-[850px]"
        style={{ fontSize: "clamp(1.2rem, 7.7vw, 55px)" }}
      >
        Work
      </h1>
      <p
        className="faded"
        style={{ fontSize: "clamp(0.75rem, 4.9vw ,1.1rem)" }}
      >
        We follow a creative step-by-step process to transform your vision into
        reality by creating a digital identity that integrates diverse marketing
        elements to resonate with your target audience. Explore our work by
        clicking on a case study below.
      </p>
      <div className="flex items-center justify-between my-6 sm:my-8 md:my-10">
        <div className="cursor-pointer left-scroller scroller">
          <i className="fi fi-sr-arrow-alt-left text-white text-3xl flex"></i>
        </div>
        <div className="flex-1 overflow-hidden mx-4">
          <div className=" text-white flex gap-8">
            {projectCategory.map((category) => (
              <p className="faded text-base font-semibold">{category}</p>
            ))}
          </div>
        </div>
        <div className="right-scroller scroller cursor-pointer">
          <i className="fi fi-sr-arrow-alt-right text-white text-3xl flex"></i>
        </div>
      </div>
      <div className="my-8 sm:my-12 md:my-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {works.map((work) => (
            <ProjectCard {...work} />
          ))}
        </div>
      </div>
      <Footer hideIdea={false} />
    </CustomDivi>
  );
};

export default Work;
