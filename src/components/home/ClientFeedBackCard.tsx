import { PropsWithChildren } from "react";
import { FeedBackData, thumbNails } from "../../data/feedback";
import styled from "styled-components";

export interface FeedBackCardProps extends PropsWithChildren {
  activeIndex: number;
}

const ClientFeedBackCard = ({ activeIndex }: FeedBackCardProps) => {
  return (
    <div className="min-h-60 flex gap-8 flex-col lg:flex-row">
      <div className="left-container flex flex-col justify-between lg:flex-1">
        <div></div>
        <WhatTheySay className="text-3xl lg:max-w-[380px] italic flex items-center relative overflow-hidden lg:overflow-visible min-h-[180px] sm:min-h-[140px] lg:min-h-max">
          <span
            className={`${
              activeIndex === 0 && "is-active"
            } opacity-0 maa-translateY-[100px] absolute left-0`}
          >
            <q>Their technical ability was particularly impressive.</q>
          </span>
          <span
            className={`${
              activeIndex === 1 && "is-active"
            } opacity-0 maa-translateY-[100px] absolute left-0`}
          >
            <q>The end result was outstanding!</q>
          </span>
          <span
            className={`${
              activeIndex === 2 && "is-active"
            } opacity-0 maa-translateY-[100px] absolute left-0`}
          >
            <q>
              Overall, loved working with the team at Design in DC and look
              forward to a continued partnership with them.
            </q>
          </span>
        </WhatTheySay>
        <AboutClient className="relative flex items-end overflow-hidden lg:overflow-visible">
          <span
            className={`${
              activeIndex === 0 && "is-active"
            } opacity-0 maa-translateY-[60px] absolute left-0`}
          >
            <p className="mb-1 font-semibold text-[var(--grayWhite)] text-lg">
              Carol Corman
            </p>
            <p>President - Prism Inc.</p>
          </span>
          <span
            className={`${
              activeIndex === 1 && "is-active"
            } opacity-0 maa-translateY-[60px] absolute left-0`}
          >
            <p className="mb-1 font-semibold text-[var(--grayWhite)] text-lg">
              Amr El-Bayoumi
            </p>
            <p>Actor</p>
          </span>
          <span
            className={`${
              activeIndex === 2 && "is-active"
            } opacity-0 maa-translateY-[60px] absolute left-0`}
          >
            <p className="mb-1 font-semibold text-[var(--grayWhite)] text-lg">
              Pinakin Patel
            </p>
            <p>CEO - IT Concept</p>
          </span>
        </AboutClient>
      </div>
      <RightContainer className="right-container lg:flex-1 bg-black lg:overflow-hidden">
        <ThumbnailContainer className="review-video-container w-full h-full overflow-hidden relative">
          {(thumbNails || []).map((thumbNail, i) => (
            <img
              src={thumbNail}
              className={`${
                activeIndex === i && "is-active"
              } opacity-0 maa-scale-[1.15] absolute left-0 top-0 w-full h-full cover object-cover object-center`}
            />
          ))}

          <div
            className="player absolute top-1/2 left-1/2 w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center cursor-pointer z-20"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <i className="fi fi-sr-play flex text-gray-700 text-2xl"></i>
          </div>
        </ThumbnailContainer>
      </RightContainer>
    </div>
  );
};

const RightContainer = styled.div`
  height: clamp(200px, 40vw, 420px);

  .review-video-container img {
    transition: 1s ease;
  }

  &:hover > .review-video-container img {
    transform: scale(1.05);
  }
`;

const WhatTheySay = styled.p`
  & > span {
    transition: 1s ease;
    z-index: 1;
  }

  & > span.is-active {
    opacity: 1;
    transform: translateY(0px);
    z-index: 10;
  }
`;

const AboutClient = styled.div`
  min-height: 100px;

  & > span {
    transition: 1s ease;
    z-index: 1;
  }

  & > span.is-active {
    opacity: 1;
    transform: translateY(0px);
    z-index: 10;
  }
`;

const ThumbnailContainer = styled.div`
  & > img {
    transition: 1s ease;
    z-index: 1;
    transform-origin: center;
  }

  & > img.is-active {
    opacity: 1;
    transform: scale(1);
    z-index: 10;
  }
`;

export default ClientFeedBackCard;
