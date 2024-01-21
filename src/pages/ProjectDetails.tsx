import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProjectData } from "../data/works";
import Footer from "../components/home/Footer";
import { Divi } from "../components/team/Intro";
import imageQuote from "../assets/images/svg/quote.svg";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (!location.state || location.state.from !== "/projects") {
      navigate("/projects");
    } else {
      setDetails(location.state);
    }
  }, []);

  return (
    <Container>
      {details !== null && (
        <>
          <div className="relative">
            <div className="image-container min-h-[400px] max-h-[350px] md:max-h-[450px] lg:max-h-[550px]  overflow-hidden">
              {details.heroMedia.type === "image" ? (
                <img
                  src={details.heroMedia.mediaUrl}
                  className="w-full h-full object-cover min-h-[400px]"
                />
              ) : (
                <video
                  src={details.heroMedia.mediaUrl}
                  className="w-full h-full object-cover min-h-[400px]"
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              )}
            </div>
            <div className="overlay absolute top-0 right-0 left-0 bottom-0 w-full h-full ">
              <Divi className="flex justify-center flex-col h-full gap-3 sm:gap-6 md:gap-0 leading-tight w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12 text-white">
                <h1
                  className="font-normal"
                  style={{ fontSize: "clamp(1.9rem, 10vw, 80px)" }}
                >
                  {details.title}
                </h1>
                <p className="" style={{ fontSize: "calc(16px + 1.07vw)" }}>
                  {details.heroShortTag.includes("<br />")
                    ? details.heroShortTag.split("<br />").map((tag) => (
                        <>
                          <span>{tag}</span>
                          <br />
                        </>
                      ))
                    : details.heroShortTag}
                </p>
              </Divi>
            </div>
          </div>
          <CustomDivi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
            <div className="text-white pt-10 md:pt-20 lg:pt-36 md:flex md:gap-10 md:justify-between w-full">
              <h3
                className="mb-4 md:mb-6 flex-[2] md:max-w-[250px] leading-tight"
                style={{ fontSize: "clamp(1rem, 6vw, 1.9rem)" }}
              >
                About the Company
              </h3>
              <p
                className="faded flex-[3] max-w-[500px] md:max-w-[600px]"
                style={{ fontSize: "clamp(0.75rem, 5.2vw ,1.1rem)" }}
              >
                {details.aboutTheCompany}
              </p>
            </div>
            <div className="text-white pt-10 md:pt-20 lg:pt-36 md:flex md:gap-10 md:justify-between w-full">
              <h3
                className="mb-4 md:mb-6 flex-[2] md:max-w-[250px] leading-tight"
                style={{ fontSize: "clamp(1.4rem, 6vw, 1.9rem)" }}
              >
                What we did
              </h3>
              <ul
                className="faded flex-[3] max-w-[500px] md:max-w-[600px] list list-disc grid grid-cols-1 md:grid-cols-2 list-inside pl-6 md:pl-0"
                style={{ fontSize: "clamp(0.75rem, 5.2vw ,1.1rem)" }}
              >
                {details.whatWeDo.map((task) => (
                  <li className="">{task}</li>
                ))}
              </ul>
            </div>
            <div className="text-white pt-10 md:pt-20 lg:pt-36 md:gap-10 w-full">
              <video
                src={details.previewVideo}
                className="w-full h-auto"
                poster={details.previewVideoPoster}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <SectionContainer>
              <h3
                className="mb-4 md:mb-6 flex-[2] md:max-w-[250px] leading-tight"
                style={{ fontSize: "clamp(1.4rem, 6vw, 1.9rem)" }}
              >
                About the project
              </h3>
              <div className="flex flex-col gap-6">
                {details.aboutTheProject.map((info) => (
                  <SectionPara>{info}</SectionPara>
                ))}
              </div>
            </SectionContainer>
            <div className="w-full h-auto p-1 lg:p-8 border-2 border-[rgba(184,199,196,.5)] mt-10 md:mt-20 lg:mt-36 hero-project-snapshot-container bg-[rgba(38,38,38,.5)]">
              <img src={details.heroProjectSnapShot} />
            </div>
          </CustomDivi>
          {details.feedback && (
            <div className="bg-[#121212] mt-10 md:mt-20 lg:mt-36 py-10 md:py-20 lg:py-32">
              <CustomDivi className="w-[100%] md:w-[80%] lg:max-w-[990px] md:mx-auto lg:w-11/12">
                <div className="w-full">
                  <div>
                    <img
                      src={imageQuote}
                      className="w-[40px] sm:w-[60px] md:w-[80px]"
                    />
                  </div>
                  <p
                    className="text-white italic font-medium py-4 leading-tight"
                    style={{ fontSize: "calc(16px + 2vw)" }}
                  >
                    {details.feedback?.whatTheySay}
                  </p>
                  <div className="pt-6 md:pt-12 lg:pt-16">
                    <p className="faded uppercase client-name">
                      -{details.feedback.clientName}
                    </p>
                    <p className="faded uppercase client-role">
                      {details.feedback.clientRole}
                    </p>
                  </div>
                </div>
              </CustomDivi>
            </div>
          )}
          <CustomDivi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
            <div className="w-full h-auto p-1 lg:p-8 border-2 border-[rgba(184,199,196,.5)] mt-10 md:mt-20 lg:mt-36 hero-project-snapshot-container bg-[rgba(38,38,38,.5)] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <img src={details.projectSnapShotsForWeb[0]} />
              <img src={details.projectSnapShotsForWeb[1]} />
            </div>
          </CustomDivi>
          {details.projectSnapShotsForMobile && (
            <CustomDivi className="w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
              <div className="w-full h-auto p-1 lg:p-8 border-2 border-[rgba(184,199,196,.5)] mt-10 md:mt-20 lg:mt-36 hero-project-snapshot-container bg-[rgba(38,38,38,.5)] grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                <img
                  src={details.projectSnapShotsForMobile[0]}
                  className="w-full object-cover"
                />
                <img
                  src={details.projectSnapShotsForMobile[1]}
                  className="w-full object-cover"
                />
                <img
                  src={details.projectSnapShotsForMobile[2]}
                  className="w-full object-cover"
                />
              </div>
            </CustomDivi>
          )}
        </>
      )}
      <Footer hideIdea={false} />
    </Container>
  );
};

const Container = styled.div`
  .overlay {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65),
      rgba(30, 30, 30, 0.378)
    );
  }

  .client-name,
  .client-role {
    font-size: clamp(0.65rem, 3vw, 0.9rem);
  }
`;

const CustomDivi = styled(Divi)`
  p.faded {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const SectionContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-white pt-10 md:pt-20 lg:pt-36 md:flex md:gap-10 md:justify-between w-full">
      {children}
    </div>
  );
};

const SectionPara = ({ children }: PropsWithChildren) => {
  return (
    <p
      className="faded flex-[3] max-w-[500px] md:max-w-[600px]"
      style={{ fontSize: "clamp(0.75rem, 5vw ,1.1rem)" }}
    >
      {children}
    </p>
  );
};

export default ProjectDetails;
