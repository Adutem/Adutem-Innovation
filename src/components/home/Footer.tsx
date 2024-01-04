import styled from "styled-components";
import ideaBackground from "../../assets/images/idea-bg.jpg";
import getStartedVideo from "../../assets/videos//get-started.mp4";
import ddcVideo from "../../assets/videos/ddc-logo.mp4";
import { useRef } from "react";
import footerLinks from "../../data/footer-links";

const Footer = () => {
  const getStartedVideoRef = useRef<HTMLVideoElement | undefined>(undefined);

  const handleVideoPlaying = () => {
    if (getStartedVideoRef.current !== undefined) {
      if (getStartedVideoRef.current.paused) {
        getStartedVideoRef.current.play();
      }
    }
  };

  return (
    <Container className="py-24">
      <div className="fit-container">
        <div className="w-full grid grid-cols-12 relative min-h-[400px] place-items-start">
          <p
            className="text-[6.2rem] col-span-12 leading-tight bg-contain bg-no-repeat min-h-80 flex items-center justify-self-stretch"
            style={{
              backgroundImage: `url(${ideaBackground})`,
              backgroundPosition: "center",
              backgroundSize: "100%",
            }}
          >
            Have an idea? <br />
            Let's bring it to life
          </p>
          <div
            className="get-started-video-container rounded-full w-[15.4vw] aspect-square bg-blue-700 absolute bottom-0 right-0 overflow-hidden cursor-pointer"
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
        <div className="pt-20 grid h-max grid-cols-3 gap-20 grid-rows-1">
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
                  href={linkData.to}
                >
                  <span>{linkData.title}</span>{" "}
                  <i className="fi fi-sr-arrow-alt-right flex -maa-rotate-[45deg] text-2xl maa-transition-[0.3s]"></i>
                </LinkItem>
              ))}
            </LinkContainer>
          </div>

          {/** CONTACT US SECTON */}
          <div className="flex flex-col justify-between">
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
                <span style={{ whiteSpace: "nowrap" }}>
                  Email: <a>design@adutem-innovation.com</a>
                </span>
                <span>
                  Phone <a href="tel:+2348153026203">+234-81-5302-6203</a>
                </span>
              </address>
            </div>

            {/** COPYRIGHT */}
            <div>
              <p
                className="text-[var(--grayWhite)] text-sm opacity-70 font-light"
                style={{ whiteSpace: "nowrap" }}
              >
                &copy; 2022. AdutemInno. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
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

const LinkItem = styled.a`
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

export default Footer;
