import { Service } from "../../data/services";
import styled from "styled-components";

interface ServiceCardProps extends Service {}

const ServiceCard = ({
  thumbNail,
  name,
  serviceCategories,
}: ServiceCardProps) => {
  return (
    <Container
      className="relative h-auto text-white fade-up-card delay-200 opacity-40 translate-x-6 translate-y-20"
      id={`${name.toLowerCase()}-service`}
      style={{
        transition: "transform 0.5s, opacity 0.7s ease",
      }}
    >
      <div className="relative h-max md:h-full md:flex">
        <div className="left-container  absolute left-0 top-0 right-0 bottom-0 -z-1 w-full h-full md:static md:max-w-[450px] md:z-50 md:flex-1">
          <div className="image-container w-full h-full">
            <img src={thumbNail} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="right-container w-full h-auto min-h-[450px] md:min-h-0 px-8 sm:px-14 py-12 md:py-28 relative z-50 md:static md:flex md:items-center md:flex-1">
          <h2
            className="font-normal leading-tight md:absolute md:top-8 md:left-8 md:max-w-[600px] z-50 mb-6 sm:mb-10"
            style={{ fontSize: "clamp(2rem, 5.5vw, 58px)" }}
          >
            {name}
          </h2>
          <ul className="list-disc list-inside flex flex-col gap-2">
            {serviceCategories.map((service) => (
              <li className="list-item">{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .right-container {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      rgba(30, 30, 30, 0.378)
    );
    // background: linear-gradient(180deg, rgba(18, 18, 18, 0) 60.67%, #000 100%);
  }
`;

export default ServiceCard;
