import leadFunnel from "@/assets/images/lead-funnel-2.png";
import leadFunnelEdit from "@/assets/images/lead-funnel-edit.png";
import pageBackground from "@/assets/svgs/page-bg-base-grad-2.svg";
import styled from "styled-components";

type Props = {};
export const SectionTwo = ({}: Props) => {
  return (
    <div className="my-20 md:my-24 ">
      <div className="flex justify-center max-h-[700px] items-center">
        <Container
          className="w-full aspect-square max-h-[650px] max-w-[650px] bg-no-repeat rounded-full flex justify-center items-center"
          style={{ background: `url(${pageBackground})` }}
        >
          <img
            src={leadFunnel}
            className="object-contain w-[90%] h-[90%] md:w-[80%] md:h-[90%] hidden sm:block"
          />
          <img
            src={leadFunnelEdit}
            className="object-contain w-[100%] h-[100%] md:w-[90%] md:h-[90%] sm:hidden"
          />
        </Container>
      </div>
    </div>
  );
};

const Container = styled.div`
  background-size: cover;

  @media screen and (max-width: 640px) {
    background: none !important;
  }
`;
