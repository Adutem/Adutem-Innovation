import { Divi } from "../components/team/Intro";
import styled from "styled-components";
import serviceHero from "../assets/images/service-hero.jpg";
import Footer from "../components/home/Footer";
import servicesData from "../data/services";
import ServiceCard from "../components/service/ServiceCard";
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export const services: string[] = [
  "Web Design & Development",
  "App Development",
  "Videography & Photography",
  "Design & Branding",
  "Marketing Strategy",
];

const CustomDivi = styled(Divi)`
  scroll-behavior: smooth;

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

  .slider-section {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Services = () => {
  const [currentService, setCurrentService] = useState("");
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

  const updateCurrentService = (val: string) => {
    setCurrentService(val);
  };

  document.documentElement.style.background = "var(--black)";
  return (
    <CustomDivi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
      <div className="absolute top-0 left-0 right-0 w-full hero">
        <img
          src={serviceHero}
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <h1
        className="text-white leading-tight md:leading-tight mb-4 md:pt-40 pt-24 sm:pt-28 text-left max-w-[850px]"
        style={{ fontSize: "clamp(1.2rem, 7.7vw, 45px)" }}
      >
        We provide a full range of web services
      </h1>
      <p
        className="faded max-w-[750px]"
        style={{ fontSize: "clamp(0.75rem, 4.9vw ,1.1rem)" }}
      >
        At DesignInDC, we take a 360° approach to our projects. A successful
        digital experience requires the seamless integration of multiple
        elements, which is why our agency offers an array of services, from
        interface design to custom photography to digital marketing.
      </p>
      <div
        className="flex items-center justify-between py-3 sm:py-8 md:py-10 sticky md:relative top-14 bg-black pt-6 slider-section"
        ref={parentCardContainerRef as any}
      >
        <div className="cursor-pointer left-scroller scroller">
          <button
            disabled={!isBackButtonVisible}
            onClick={() => handleScroll(-1)}
          >
            <i className="fi fi-sr-arrow-alt-left text-white text-xl sm:text-2xl md:text-3xl flex"></i>
          </button>
        </div>
        <div
          className="flex-1 overflow-auto mx-4"
          ref={cardContainerRef as any}
          onScroll={() => handleScroll(null)}
        >
          <div className=" text-white flex gap-4 sm:gap-6 md:gap-8">
            {services.map((service) => (
              <a
                className={`faded text-base font-semibold whitespace-nowrap ${
                  (currentService === service ||
                    location.hash ===
                      `#${encodeURI(service.toLowerCase() + "-service")}`) &&
                  "text-[var(--base-color)]"
                }`}
                href={`#${service.toLowerCase()}-service`}
                style={{ fontSize: "clamp(0.75rem, 4.2vw ,1rem)" }}
                onClick={() => updateCurrentService(service)}
              >
                {service}
              </a>
            ))}
          </div>
        </div>
        <div className="right-scroller scroller cursor-pointer">
          <button
            disabled={!isForwardButtonVisible}
            onClick={() => handleScroll(1)}
          >
            <i className="fi fi-sr-arrow-alt-right text-white text-xl sm:text-2xl md:text-3xl flex"></i>
          </button>
        </div>
      </div>
      <div className="my-8 sm:my-12 md:my-14">
        <div className="grid grid-cols-1 gap-0 md:gap-12 ">
          {servicesData.map((service) => (
            <ServiceCard {...service} />
          ))}
        </div>
      </div>
      <Footer hideIdea={false} />
    </CustomDivi>
  );
};

export default Services;
