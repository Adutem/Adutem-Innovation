import works from "../data/works";
import { Divi } from "../components/team/Intro";
import styled from "styled-components";
import workHero from "../assets/images/work-hero.jpg";
import ProjectCard from "../components/work/ProjectCard";
import Footer from "../components/home/Footer";
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useScrollPosition } from "../hooks";
import newWorks from "../data/new-work";

export const projectCategory: string[] = [
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

  div.hero {
    height: auto;
    max-height: 250px;
  }

  & > *:not(.hero):not(.sticky) {
    position: relative;
    z-index: 100;
  }

  & > .sticky {
    z-index: 120;
  }
`;

const Work = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const cardContainerRef = useRef<HTMLElement | null>(null);
  const parentCardContainerRef = useRef<HTMLElement | null>(null);
  const [isBackButtonVisible, setIsBackButtonVisible] =
    useState<boolean>(false);
  const [isForwardButtonVisible, setIsForwardButtonVisible] =
    useState<boolean>(true);
  const location = useLocation();

  const handleScroll = (value: number | null) => {
    if (!cardContainerRef.current) return;
    let contScrollWidth = cardContainerRef?.current?.scrollWidth;
    let currentScroll = cardContainerRef.current.scrollLeft;
    let visibleWidth = cardContainerRef?.current.getBoundingClientRect().width;
    if (value && value > 0) {
      let availableScroll = contScrollWidth - currentScroll - visibleWidth;
      if (availableScroll > visibleWidth) {
        let scrollingTo = currentScroll + visibleWidth;
        cardContainerRef.current.scrollTo({
          top: 0,
          left: scrollingTo,
          behavior: "smooth",
        });
        setIsBackButtonVisible(true);
        setIsForwardButtonVisible(true);
      } else {
        cardContainerRef.current.scrollTo({
          top: 0,
          left: contScrollWidth,
          behavior: "smooth",
        });
        setIsForwardButtonVisible(false);
        setIsBackButtonVisible(true);
      }
    } else if (value && value < 0) {
      let availableScroll = currentScroll - visibleWidth;
      if (availableScroll > 0) {
        cardContainerRef.current.scrollTo({
          top: 0,
          left: availableScroll,
          behavior: "smooth",
        });
        setIsForwardButtonVisible(true);
        setIsBackButtonVisible(true);
      } else {
        cardContainerRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setIsForwardButtonVisible(true);
        setIsBackButtonVisible(false);
      }
    } else {
      if (
        currentScroll > 0 &&
        !(currentScroll >= contScrollWidth - visibleWidth)
      ) {
        setIsForwardButtonVisible(true);
        setIsBackButtonVisible(true);
      } else if (currentScroll === 0) {
        setIsForwardButtonVisible(true);
        setIsBackButtonVisible(false);
      } else {
        setIsForwardButtonVisible(false);
        setIsBackButtonVisible(true);
      }
    }
  };

  const updateCurrentCategory = (val: string) => {
    setCurrentCategory(val);
  };

  const onTrue = () => {
    if (parentCardContainerRef.current) {
      parentCardContainerRef.current.style.background = "#000";
    }
  };

  const onFalse = () => {
    if (parentCardContainerRef.current) {
      parentCardContainerRef.current.style.background = "transparent";
    }
  };

  const value = useScrollPosition(null, 300, onTrue, onFalse);

  document.documentElement.style.background = "var(--black)";

  return (
    <CustomDivi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
      <div className="absolute top-0 left-0 right-0 w-full hero">
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
      {/* <div
        className="flex items-center justify-between my-6 sm:my-8 md:my-10 sticky md:relative top-14 bg-transparent py-3"
        ref={parentCardContainerRef as any}
      >
        <div className="cursor-pointer left-scroller scroller">
          <button
            disabled={!isBackButtonVisible}
            onClick={() => handleScroll(-1)}
          >
            <i className="fi fi-sr-arrow-alt-left text-white text-3xl flex"></i>
          </button>
        </div>
        <div
          className="flex-1 overflow-hidden mx-4"
          ref={cardContainerRef as any}
          onScroll={() => handleScroll(null)}
        >
          <div className=" text-white flex gap-4 sm:gap-6 md:gap-">
            {projectCategory.map((category) => (
              <a
                className={`faded text-base font-semibold whitespace-nowrap ${
                  (currentCategory === category ||
                    location.hash ===
                      `#${encodeURI(category.toLowerCase() + "-project")}`) &&
                  "text-[var(--base-color)]"
                }`}
                href={`#${category.toLowerCase()}-project`}
                style={{ fontSize: "clamp(0.75rem, 4.2vw ,1rem)" }}
                onClick={() => updateCurrentCategory(category)}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
        <div className="right-scroller scroller cursor-pointer">
          <button
            disabled={!isForwardButtonVisible}
            onClick={() => handleScroll(1)}
          >
            <i className="fi fi-sr-arrow-alt-right text-white text-3xl flex"></i>
          </button>
        </div>
      </div> */}
      <div className="my-8 sm:my-12 md:my-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* <div className="grid grid-cols-1 gap-12 sm:grid-cols-2"> */}
          {/* {works.map((work) => (
            <ProjectCard {...work} />
          ))} */}
          {newWorks.map((work) => (
            <div
              className="text-white cursor-pointer fade-up-card delay-200 opacity-40 translate-x-6 translate-y-20 min-h-[400px] "
              style={{
                transition: "transform 0.5s, opacity 0.7s ease",
              }}
            >
              <iframe
                className="w-full h-full"
                // width="560" height="315"
                src={`https://www.youtube.com/embed/${work.url}?si=${work.si}&amp;controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <Footer hideIdea={false} />
    </CustomDivi>
  );
};

export default Work;
