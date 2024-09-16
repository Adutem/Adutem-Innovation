import classNames from "classnames";
import styled from "styled-components";
import { LinkButton } from "../reusables";

const sectionData = [
  {
    iconName: "fi fi-sr-sticker",
    title: " Generic Offers That Don't Speak To Your Ideal Customer",
    description:
      "Running the same offer as all of your competition will commoditize your business, significantly reducing the quality of lead and increase cost.",
  },
  {
    iconName: "fi fi-sr-meeting-alt",
    title: "No Follow Up System",
    description:
      "Not having 24/7 phone coverage and not calling leads within 5 minutes will significantly reduce the number of leads you turn into appointments.",
  },
  {
    iconName: "fi fi-sr-calculator-money",
    title: "Poor Post-Estimate Follow Up Systems",
    description:
      "Most clients do not have a dialed in process to add value and follow up with customers after they give an estimate. Often they rely on an office manager to follow up multiple days (if not weeks) after an estimate is given, resulting in as much as 15% of deals lost to competitors.",
  },
  {
    iconName: "fi fi-sr-data-transfer",
    title: "Wrong Marketing Platform",
    description:
      "Selecting the wrong marketing platform to show your ads, not marketing where the highest density of your customers are",
  },
  {
    iconName: "fi fi-sr-improve-user",
    title: "Weak Ad Optimization Strategy",
    description:
      "Optimizing your ad campaigns once a week, not using a data driven approach to understand how your campaigns are performing or need to be optimized. A lack of testing on creatives and offers will significantly impact the long term performance of your end-to-end system",
  },
];

export const SectionThree = () => {
  return (
    <div className="my-20 md:my-24">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-semibold text-gray-900 text-2xl md:text-3xl neue-regular">
            Why is your Marketing
          </span>
          <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl neue-regular">
            Not Performing?
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-12 sm:mt-16 md:mt-20">
        <GridEl>
          {sectionData.map((data) => (
            <div
              className="flex-col gap-2 fade-up-card delay-200 opacity-40 translate-x-6 translate-y-20"
              style={{
                transition: "transform 0.5s, opacity 0.7s ease",
              }}
            >
              <div className="danger-bg w-16 h-16 rounded-full grid place-items-center">
                <i
                  className={classNames(
                    data.iconName,
                    "flex text-3xl text-[var(--base-color)]"
                  )}
                ></i>
              </div>
              <h3 className="mt-2 font-semibold text-xl neue-regular">
                {data.title}
              </h3>
              <p className="text-sm mt-2 leading-relaxed neue-regular">
                {data.description}
              </p>
            </div>
          ))}
        </GridEl>
      </div>

      {/* Survey form */}
      <LinkButton href="/survey" className="mt-8">
        Start your Marketing Journey Now
      </LinkButton>
    </div>
  );
};

const GridEl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media screen and (min-width: 992px) {
    gap: 4rem 3rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;
