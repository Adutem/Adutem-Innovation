import reviewVideo from "../../assets/videos/review.mp4";
import styled from "styled-components";
import { useScrollPosition } from "../../hooks";
import useInView from "../../hooks/useInView";
import { useEffect, useRef } from "react";

const Intro = () => {
  const { isPastPosition } = useScrollPosition(null, 70);
  const videoContainerRef = useRef<HTMLElement | Element | null>(null);
  const videoPlayerRef = useRef<HTMLElement | Element | null>(null);
  const { inView, topFromOffSet } = useInView({
    ref: videoContainerRef.current,
    outOfViewTo: "bottom",
    topOffSetFromBottom: 150,
  });

  useEffect(() => {
    if (inView) {
      let scaleValue = 0;
      if (topFromOffSet < 0) {
        scaleValue = 45;
      } else {
        scaleValue = Math.min(Math.max(topFromOffSet, 45), 150);
      }
      const scalePercent = scaleValue / 150;
      const scalePercentToIdp = parseFloat(scalePercent.toFixed(1));
      console.log(scaleValue, scalePercentToIdp);
      if (
        videoPlayerRef.current &&
        videoPlayerRef.current instanceof HTMLElement
      ) {
        videoPlayerRef.current.style.transform = `scale(${scalePercentToIdp})`;
      }
    }
  }, [inView, topFromOffSet]);

  return (
    <div>
      <Divi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
        <h1
          className="leading-normal md:leading-tight mb-11 text-white text-left pt-0 md:pt-10  max-w-[850px]"
          style={{ fontSize: "clamp(1.2rem, 7.7vw, 45px)" }}
        >
          We're a team of nimble, highly skilled individuals with diverse
          creative backgrounds
        </h1>
        <div className="text-white grid md:flex grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-6 items-center md:justify-between w-11/12 md:w-full mx-auto md:mx-0 max-w-[800px] my-16 md:mt-24">
          <div>
            <h4 className="text-3xl sm:text-4xl mb-2">50 +</h4>
            <p className="text-base text-gray-400">Employees</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl mb-2">300 +</h4>
            <p className="text-base text-gray-400">Projects</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl mb-2">5 +</h4>
            <p className="text-base text-gray-400">Years of experience</p>
          </div>
          <div>
            <h4 className="text-3xl sm:text-4xl mb-2">20 +</h4>
            <p className="text-base text-gray-400">Awards</p>
          </div>
        </div>
        <div
          className={`my-16 md:mt-24 video-container ${
            // !isPastPosition && "scale-reduce"
            ""
          }`}
          ref={videoContainerRef as any}
        >
          <video
            className="w-full h-auto"
            loop
            muted
            playsInline
            autoPlay
            src={reviewVideo}
            ref={videoPlayerRef as any}
            style={{ transformOrigin: "bottom" }}
          />
        </div>
      </Divi>
    </div>
  );
};

export const Divi = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;

  .video-container video {
    transition: 1.2s ease;
    transform: scale(0.3);
  }

  // .video-container.scale-reduce {
  //   transform: scale(0.9);
  // }

  @media screen and (min-width: 420px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

export default Intro;
