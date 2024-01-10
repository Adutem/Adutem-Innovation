import styled from "styled-components";
import pencilTree from "../../assets/videos/pencil-tree.mp4";
import { Divi } from "./Intro";

const Community = () => {
  return (
    <div className="pt-6 md:pt-20">
      <Divi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12 lg:flex gap-8">
        <FirstContainer className="text-white mb-6 md:mb-0 flex-1">
          <h4
            className="mb-4 font-medium"
            style={{ fontSize: "clamp(1rem, 6vw ,1.7rem)" }}
          >
            Commitment To Diversity
          </h4>
          <div className="flex flex-col gap-4 ">
            <p
              className="faded"
              style={{ fontSize: "clamp(0.75rem, 5.2vw ,1.1rem)" }}
            >
              DesignInDC has an unwavering commitment to diversity. Unlike other
              agencies, our commitment is not rhetoric but rather a central
              component that makes up the essence of our company. Working with a
              diverse team, as it relates to age, gender, and ethnicity, has
              played a key role in our firm's success.
            </p>
            <p
              className="faded"
              style={{ fontSize: "clamp(0.75rem, 5.2vw ,1.1rem)" }}
            >
              As a creative agency, we believe not only in diversity as it
              relates to race, but diversity in thought. This is why we
              prioritize hiring talent from various backgrounds, ages, and
              genders, as it fosters different viewpoints and cultivates
              creative synergy.
            </p>
          </div>
        </FirstContainer>
        <SecondContainer className="flex-1">
          <video
            src={pencilTree}
            className="w-full h-auto"
            loop
            playsInline
            muted
            autoPlay
          />
        </SecondContainer>
      </Divi>
    </div>
  );
};

const FirstContainer = styled.div`
  p.faded {
    color: rgba(255, 255, 255, 0.75);
  }
`;
const SecondContainer = styled.div``;

export default Community;
