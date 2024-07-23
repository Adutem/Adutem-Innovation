import faqs from "@/data/faq";
import styled from "styled-components";
import Accordion from "../Accordion";
import { results } from "@/data/testimonies";
import resultVideo from "@/assets/videos/Garage-Floors-of-Austin-Marketing-Analysis.mp4";
import resultPoster from "@/assets/posters/result-poster.png";

type Props = {};
export const SectionFour = ({}: Props) => {
  return (
    <div className="my-20 md:my-24">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl neue-regular">
            {/* Testimonials */}
            Some Explosive Result
          </span>
          <span className="font-medium text-gray-900 text-xl md:text-2xl neue-regular">
            What you can expect
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16">
        <GridEl>
          {results.map((result) => (
            <div className="image-cont rounded-lg">
              <img
                src={result.imgUrl}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
          <div className="image-cont rounded-lg">
            <video
              src={resultVideo}
              className="w-full h-full object-fill rounded-lg max-h-[250px]"
              controls
              poster={resultPoster}
              controlsList={"nodownload"}
              onPlaying={(e: any) => (e.target.style.objectFit = "contain")}
              onPause={(e: any) => (e.target.style.objectFit = "fill")}
              disablePictureInPicture
            />
          </div>
        </GridEl>
      </div>

      {/* Survey form */}
      <a
        className="capitalize rounded-full py-4 px-7 w-full max-w-[400px] bg-[var(--base-color)] text-white cursor-pointer hover:opacity-70 transition-opacity duration-300 mx-auto neue-regular block mb-16 mt-8 text-sm text-center"
        target="_blank"
        href="https://calendly.com/adutem05/marketing-consultation"
      >
        Take our quick survey
      </a>
    </div>
  );
};

const GridEl = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem 2.2rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .image-cont {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1),
      0px 6px 25px rgba(0, 0, 0, 0.15);
  }
`;
