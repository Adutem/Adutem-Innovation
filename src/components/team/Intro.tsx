import reviewVideo from "../../assets/videos/review.mp4";
import styled from "styled-components";
import { useScrollPosition } from "../../hooks";

const Intro = () => {
  const { isPastPosition } = useScrollPosition(null, 70);
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
            !isPastPosition && "scale-reduce"
          }`}
          style={{ transformOrigin: "bottom" }}
        >
          <video
            className="w-full h-auto"
            loop
            muted
            playsInline
            autoPlay
            src={reviewVideo}
          />
        </div>
      </Divi>
    </div>
  );
};

export const Divi = styled.div`
  padding-left: 0.8rem;
  padding-right: 0.8rem;

  .video-container {
    transition: 0.4s ease;
  }

  .video-container.scale-reduce {
    transform: scale(0.9);
  }

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
