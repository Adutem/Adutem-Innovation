import faqs from "@/data/faq";
import styled from "styled-components";
import Accordion from "../Accordion";
import { testimonies } from "@/data/testimonies";

type Props = {};
export const SectionFour = ({}: Props) => {
  return (
    <div className="my-20 md:my-24">
      {/* Header */}
      <header>
        <h2 className="text-center flex flex-col items-center gap-1">
          <span className="font-bold text-[var(--base-color)] text-2xl md:text-3xl neue-regular">
            Testimonials
          </span>
          <span className="font-medium text-gray-900 text-xl md:text-2xl neue-regular">
            Some Explosive Result
          </span>
        </h2>
      </header>

      {/* Reasons */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16">
        <GridEl>
          {testimonies.map((testimony) => (
            <div className="image-cont rounded-lg">
              <img
                src={testimony.imgUrl}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </GridEl>
      </div>
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
