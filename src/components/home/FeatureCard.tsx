import React from "react";
import { Feature } from "../../data/features";

interface FeatureProps extends Feature {
  isActive: boolean;
  isBeforeActiveFeature: boolean;
  isAfterActiveFeature: boolean;
}

const FeatureCard = ({
  imageUrl,
  keyWords,
  linkTo,
  shortDescription,
  title,
  isActive,
  isBeforeActiveFeature,
  isAfterActiveFeature,
}: FeatureProps) => {
  return (
    <div
      className={`h-[500px] ${
        isActive ? "maa-scale-[1]" : "maa-scale-[0.7]"
      } maa-transition-[1s] `}
      style={{
        width: `clamp(250px, 91vw, 600px)`,
        minWidth: `clamp(250px, 91vw, 928px)`,
        transformOrigin: isBeforeActiveFeature
          ? "right"
          : isAfterActiveFeature
          ? "left"
          : "center",
      }}
    >
      <div
        className={`no-wrap overflow-hidden pb-6 w-full transition-opacity  maa-transition-[1s]  ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className=" list-[square] flex gap-8 list-inside infinite-translate w-max">
          {[...keyWords, ...keyWords].map((feature, i) => (
            <li
              className="font-medium uppercase text-[var(--white)] opacity-60"
              style={{ whiteSpace: "nowrap" }}
              aria-hidden={i > 4}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="h-full w-full relative bg-gray-600 bg-cover bg-"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="overlay w-full h-full p-12  bg-gradient-to-t features-container cursor-pointer">
          <div className="flex flex-col justify-end items-start h-full overflow-y-hidden feature-content-container">
            <div className="flex flex-col justify-end items-start maa-translateY-[70%] maa-transition-[0.4s]">
              <h3 className="text-[var(--grayWhite)] mb-6 text-4xl font-medium capitalize">
                {title}
              </h3>
              <p className="text-white">{shortDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
