import faqs from "@/data/faq";
import styled from "styled-components";
import { testimonies } from "@/data/testimonies";

type Props = {};
export const Testimonials = ({}: Props) => {
  return (
    <div className="my-20 md:my-24">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl neue-regular">
            Testimonials
          </span>
          <span className="font-medium text-gray-900 text-xl md:text-2xl neue-regular">
            What our clients have to say
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16">
        <GridEl>
          {testimonies.map((testimony) => (
            <div className="image-cont rounded-lg">
              {testimony.type === "image" ? (
                <img
                  src={testimony.imgUrl}
                  className="w-full h-auto object-cover rounded-lg"
                />
              ) : (
                <video
                  src={testimony.imgUrl}
                  className="w-full h-full object-fill rounded-lg max-h-[250px]"
                  controls
                  poster={testimony?.poster}
                  controlsList={"nodownload"}
                  onPlaying={(e: any) => (e.target.style.objectFit = "contain")}
                  onPause={(e: any) => (e.target.style.objectFit = "fill")}
                  disablePictureInPicture
                />
              )}
            </div>
          ))}
        </GridEl>
      </div>
      <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl neue-regular mx-auto block mt-16 mb-1 text-center">
        Want to learn more?
      </span>
      <span className="font-medium text-gray-900 text-xl md:text-2xl neue-regular text-center mx-auto block mb-6">
        Reach out to us
      </span>
      <a
        className="capitalize rounded-full py-4 px-7 w-full max-w-[400px] bg-[var(--base-color)] text-white cursor-pointer hover:opacity-70 transition-opacity duration-300 mx-auto neue-regular block mb-16 text-sm text-center"
        target="_blank"
        href="https://calendly.com/adutem05/marketing-consultation"
      >
        FREE DISCOVERY CALL (20 MINS)
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
