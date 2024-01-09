import styled from "styled-components";
import ideaBackground from "../../assets/images/idea-bg.jpg";
import getStartedVideo from "../../assets/videos//get-started.mp4";
import ddcVideo from "../../assets/videos/ddc-logo.mp4";
import { useRef } from "react";
import footerLinks from "../../data/footer-links";
import { Link } from "react-router-dom";

interface FooterProps {
  hideIdea: boolean;
}

const Footer = ({ hideIdea }: FooterProps) => {
  const getStartedVideoRef = useRef<HTMLVideoElement | undefined>(undefined);

  const handleVideoPlaying = () => {
    if (getStartedVideoRef.current !== undefined) {
      if (getStartedVideoRef.current.paused) {
        getStartedVideoRef.current.play();
      }
    }
  };

  return (
    <Container className="py-24 bg-black">
      <div className="w-[100%] px-8 lg:max-w-[982px] lg:mx-auto lg:w-11/12 lg:px-0">
        {hideIdea || (
          <div className="w-full grid grid-cols-12 relative h-max md:min-h-[400px] place-items-start">
            <p
              className="col-span-12 leading-tight bg-contain bg-no-repeat h-[220px] sm:h-[260px] md:min-h-96 flex items-center justify-self-stretch"
              style={{
                backgroundImage: `url(${ideaBackground})`,
                backgroundPosition: "center",
                backgroundSize: "100%",
                fontSize: `clamp(2.5rem, 7.6vw, 6.2rem)`,
              }}
            >
              Have an idea? <br />
              Let's bring it to life
            </p>
            <div
              className="get-started-video-container rounded-full w-[15.4vw] aspect-square bg-[var(--base-color)] absolute bottom-0 right-0 overflow-hidden cursor-pointer hidden md:block"
              onMouseEnter={handleVideoPlaying}
            >
              <div className="w-full h-full bg-gray-700">
                <video
                  className="w-full h-full"
                  src={getStartedVideo}
                  ref={getStartedVideoRef as any}
                  muted
                />
              </div>
            </div>
          </div>
        )}

        <GridContainer className="pt-20 grid h-max lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:gap-20 gap-y-10 lg:grid-rows-1">
          {/* LOGO VIDEO */}
          <div className="footer-video w-full h-full flex items-center">
            <div className="w-full h-auto">
              <video
                className="w-full h-auto"
                src={ddcVideo}
                loop
                muted
                autoPlay
              />
            </div>
          </div>

          {/* USESFUL LINKS */}
          <div className="flex flex-col">
            <LinkContainer className="w-full">
              {(footerLinks || []).map((linkData) => (
                <LinkItem
                  className="w-full py-4 flex justify-between items-center h-max cursor-pointer"
                  to={linkData.to}
                >
                  <span>{linkData.title}</span>{" "}
                  <i className="fi fi-sr-arrow-alt-right flex -maa-rotate-[45deg] text-2xl maa-transition-[0.3s]"></i>
                </LinkItem>
              ))}
            </LinkContainer>
          </div>

          {/** CONTACT US SECTON */}
          <ContactSectionContainer className="flex flex-col lg:justify-between gap-6 lg:gap-0 col-span-full lg:col-span-1">
            {/** SOCIAL MEDIA LINKS */}
            <div className="social flex items-center gap-5">
              <i className="fi fi-brands-instagram flex text-lg"></i>
              <i className="fi fi-brands-twitter flex text-lg"></i>
              <i className="fi fi-brands-facebook flex text-lg"></i>
              <i className="fi fi-brands-linkedin flex text-lg"></i>
            </div>

            {/** ADDRESS AND EMAIL LINKS */}
            <div>
              <address className="text-md flex flex-col gap-2">
                <span>1011 Millenial Ave IB,</span>
                <span>Suite 400 #13</span>
                <span>
                  Ibadan, 201109 <br />
                </span>
                <span>
                  Email: <a>design@adutem-innovation.com</a>
                </span>
                <span>
                  Phone <a href="tel:+2348153026203">+234-81-5302-6203</a>
                </span>
              </address>
            </div>

            {/** COPYRIGHT */}
            <div>
              <p className="text-[var(--grayWhite)] text-sm opacity-70 font-light">
                &copy; 2022. AdutemInno. All Rights Reserved
              </p>
            </div>
          </ContactSectionContainer>
        </GridContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  & > * {
    color: var(--white);
  }
`;

const LinkContainer = styled.div``;

const LinkItem = styled(Link)`
  text-decoration: none;
  position: relative;
  border-bottom: 0.4px solid rgba(255, 255, 255, 0.3);

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: var(--white);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover {
    i {
      transform: rotate(0deg);
    }
  }
`;

const ContactSectionContainer = styled.div``;

const GridContainer = styled.div`
  grid-template-rows: 2 max-content;
`;
export default Footer;
