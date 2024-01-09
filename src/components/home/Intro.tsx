import TypeWriter from "typewriter-effect";
import heroVideo from "../../assets/videos/hero-video.mp4";

const Intro = () => {
  return (
    <div className="w-11/12 mx-auto max-w-[1024px] pb-7">
      <h1 className="max-md:text-[10vw] text-[4.44vw] leading-tight mb-11 text-white text-center md:text-left">
        A digital agency for the future. We create end-to-end{" "}
        <span className="text-[var(--base-color)]">
          <TypeWriter
            options={{
              strings: [
                "Websites",
                "Mobile Apps",
                "Web Apps",
                "Digital Experiences",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      <div className="w-full video-section">
        <div className="w-full vidoe-container">
          <video
            src={heroVideo}
            className="w-full h-auto"
            loop
            muted
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
