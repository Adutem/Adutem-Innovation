import styled from "styled-components";
import { WhatWeDoDataType } from "../../data/whatwedo";

interface ServiceCardProps extends WhatWeDoDataType {
  shouldHaveBorder: boolean;
}

const ServiceCard = ({
  shouldHaveBorder,
  name,
  keyWords,
}: ServiceCardProps) => {
  console.log(shouldHaveBorder);
  return (
    <CardContainer
      className={`${
        shouldHaveBorder && "md:border-r-[0.2px] border-b-[0.2px]"
      } cursor-pointer lg:hover:bg-blue-700 maa-transition-[0.8s] w-full h-full relative`}
      style={{ borderColor: "rgba(255, 255, 255, 0.7)" }}
    >
      <div className="underlay flex flex-row md:flex-col items-center md:justify-around justify-between md: gap-16 h-full py-16 relative z-40 px-8 md:px-0">
        <ServiceName className="service-name text-white text-2xl flex-1 capitalize">
          {name}
        </ServiceName>
        <i className="fi fi-sr-arrow-alt-right flex -maa-rotate-[45deg] text-4xl maa-transition-[0.4s] text-white link-arrow relative z-40"></i>
      </div>
      <div className="overlay p-6 lg:p-4 lg:py-10 py-20 absolute top-0 left-0 w-full h-full opacity-0 maa-transition-[0.6s]">
        <h1 className="text-white text-2xl mb-6 font-medium leading-6 capitalize">
          {name}
        </h1>
        <ul className="list-[square] flex flex-col gap-2 list-inside">
          {keyWords.map((keyword, i) => (
            <li className="text-white text-[0.65rem] uppercase">{keyword}</li>
          ))}
        </ul>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  @media screen and (min-width: 1024px) {
    &:hover {
      .link-arrow {
        transform: rotate(0deg);
      }

      .service-name {
        opacity: 0;
      }

      .overlay {
        opacity: 1;
        transition: 0.4s ease;
      }
    }
  }
`;

const ServiceName = styled.h2`
  writing-mode: vertical-rl;
  tranform: rotate(180deg);
  transition: 0.4s;

  @media screen and (max-width: 768px) {
    writing-mode: rl;
    transform: rotate(0deg) !important;
  }
`;

export default ServiceCard;
