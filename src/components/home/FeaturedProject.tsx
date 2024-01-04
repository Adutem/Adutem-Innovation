import useInView from "../../hooks/useInView";
import { useEffect, useRef, useState } from "react";
import features from "../../data/features";
import FeatureCard from "./FeatureCard";

const FeaturedProject = () => {
  const containerRef = useRef(null);
  const parentCardContainerRef = useRef<HTMLElement | HTMLDivElement | null>(
    null
  );
  const cardContainerRef = useRef<HTMLElement | HTMLDivElement | null>(null);
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);
  const [isForwardButtonVisible, setIsForwardButtonVisible] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const [containerRefState, setContainerRefState] = useState(
    () => containerRef.current
  );
  const [containerBackground, setContainerBackground] =
    useState(`hsl(240, 12%, 0%)`);

  const handleScroll = (value: number | null) => {
    console.log("adsfjkasjdfklsajk");
    if (
      !cardContainerRef ||
      !parentCardContainerRef ||
      !cardContainerRef.current ||
      !parentCardContainerRef.current
    )
      return;
    let contScrollWidth = cardContainerRef.current.scrollWidth as number;
    let currentScroll = cardContainerRef.current.scrollLeft as number;
    // let visibleWidth = cardContainerRef.current.getBoundingClientRect()
    //   .width as number;
    let visibleWidth = parentCardContainerRef.current.getBoundingClientRect()
      .width as number;
    console.log("Here");
    if (value && value > 0) {
      setCurrentTrackIndex((prev) => Math.min(prev + value, 5));
      console.log(currentTrackIndex);
      cardContainerRef.current.style.transform = `translateX(-${
        (visibleWidth + 80) * Math.min(currentTrackIndex + value, 5)
      }px)`;
      setIsBackButtonVisible(true);
      if (currentTrackIndex >= 4) {
        setIsForwardButtonVisible(false);
      } else {
        setIsForwardButtonVisible(true);
      }
      let availableScroll = contScrollWidth - currentScroll - visibleWidth;
      if (availableScroll > visibleWidth) {
        // let scrollingTo = currentScroll + visibleWidth;
        // parentCardContainerRef.current.scrollTo({
        //   top: 0,
        //   left: scrollingTo,
        //   behavior: "smooth",
        // });
      } else {
        // cardContainerRef.current.scrollTo({
        //   top: 0,
        //   left: contScrollWidth,
        //   behavior: "smooth",
        // });
        // setIsForwardButtonVisible(false);
        // setIsBackButtonVisible(true);
      }
    } else if (value && value < 0) {
      setCurrentTrackIndex((prev) => Math.max(prev + value, 0));
      console.log(currentTrackIndex);
      cardContainerRef.current.style.transform = `translateX(-${
        (visibleWidth + 80) * Math.max(currentTrackIndex + value, 0)
      }px)`;
      setIsForwardButtonVisible(true);
      if (currentTrackIndex <= 1) {
        setIsBackButtonVisible(false);
      } else {
        setIsBackButtonVisible(true);
      }
      let availableScroll = currentScroll - visibleWidth;
      if (availableScroll > 0) {
        // cardContainerRef.current.scrollTo({
        //   top: 0,
        //   left: availableScroll,
        //   behavior: "smooth",
        // });
        // setIsForwardButtonVisible(true);
        // setIsBackButtonVisible(true);
      } else {
        // cardContainerRef.current.scrollTo({
        //   top: 0,
        //   left: 0,
        //   behavior: "smooth",
        // });
        // setIsForwardButtonVisible(true);
        // setIsBackButtonVisible(false);
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

  const { inView, topFromOffSet } = useInView({
    ref: containerRefState,
    outOfViewTo: "bottom",
    topOffSetFromBottom: 100,
  });

  useEffect(() => {
    if (inView) {
      // console.log(topFromOffSet);
      // console.log(containerBackground);
      if (topFromOffSet > 0) {
        let maximumValue = Math.min(topFromOffSet, 300);
        const percentage = (maximumValue / 300) * 15;
        const containerBackground = `hsl(240, 12%, ${percentage}%)`;
        setContainerBackground(containerBackground);
      } else {
        setContainerBackground(`hsl(240, 12%, 0%)`);
      }
    }
  }, [inView, topFromOffSet]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerRefState(containerRef.current);
    }
  }, [containerRef]);

  return (
    <div
      className="py-24 maa-transition-[1s]"
      ref={containerRef}
      style={{ backgroundColor: containerBackground }}
    >
      <h2 className="text-[var(--grayWhite)] text-center text-5xl font-semibold">
        Featured Project
      </h2>
      <div className="h-[600px] my-8 flex items-center relative overflow-x-hidden">
        {isBackButtonVisible && (
          <div
            className="cursor-pointer left-scroller scroller absolute left-[8%] z-20"
            onClick={() => handleScroll(-1)}
          >
            <i className="fi fi-rr-arrow-left text-white text-4xl flex"></i>
          </div>
        )}

        <div
          className="w-11/12 mx-auto max-w-[928px]"
          ref={parentCardContainerRef as any}
        >
          <div
            className={`w-max h-max flex gap-20 -maa-transition-[0.9s]`}
            ref={cardContainerRef as any}
            // onScroll={() => handleScroll(null)}
          >
            {features.map((feature, i) => (
              <FeatureCard
                {...feature}
                isActive={i === currentTrackIndex}
                isBeforeActiveFeature={currentTrackIndex > i}
                isAfterActiveFeature={currentTrackIndex < i}
              />
            ))}
          </div>
        </div>
        {isForwardButtonVisible && (
          <div
            className="right-scroller scroller absolute right-[8%] top-[50%] -maa-translateY-[50%] cursor-pointer"
            onClick={() => handleScroll(1)}
          >
            <i className="fi fi-rr-arrow-right text-white text-4xl flex"></i>
          </div>
        )}
      </div>
      {/* <div className="no-wrap overflow-hidden py-6 w-11/12 mx-auto max-w-[928px]">
        <ul className=" list-[square] flex gap-8 list-inside infinite-translate w-max">
          {[
            "wed development",
            "interactive map",
            "seo optimization",
            "ux / ui design",
            "web design",
            "wed development",
            "interactive map",
            "seo optimization",
            "ux / ui design",
            "web design",
          ].map((feature, i) => (
            <li
              className="font-medium uppercase text-[var(--white)] opacity-60"
              style={{ whiteSpace: "nowrap" }}
              aria-hidden={i > 4}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div> */}
      {/* <div className="py-10 w-11/12 ms-auto max-w-[928px] bg-red-900"></div> */}
    </div>
  );
};

export default FeaturedProject;
