import pageBackground from "@/assets/svgs/page-background-sm.svg";
import businessGrowth from "@/assets/svgs/business-growth.svg";
import adutemLogo from "@/assets/images/adutem_logo.png";
import {
  SectionFive,
  SectionFour,
  SectionThree,
  SectionTwo,
  Testimonials,
} from "@/components/landing";

type Props = {};
export const Landing = ({}: Props) => {
  document.documentElement.style.background = "#fff";
  document.body.style.background = "#fff";

  return (
    <>
      <div className="w-full min-h-dvh md:min-h-[75dvh] lg:min-h-[85dvh] h-auto relative">
        {/* Background */}
        <div className="w-[115%] md:w-full h-full top-0 right-0 absolute flex justify-end items-start z-0">
          <img
            src={pageBackground}
            alt=""
            className="w-[120%] sm:w-auto h-auto md:h-full object-contain"
          />
        </div>
        <div
          className="w-[90%] lg:w-[80%] mx-auto max-w-screen-xl grid-cols h-full min-h-dvh md:min-h-[75dvh] lg:min-h-[85dvh] grid grid-cols-1 md:grid-cols-2 z-20 relative"
          // style={{ background: `url(${pageBackground})` }}
        >
          {/* Header */}
          <div className="w-full col-span-1 col-start-1 row-start-1">
            <header className="pt-4 md:pt-8 ">
              <div>
                <a
                  href="https://adutem-innovation.onrender.com/"
                  target="_blank"
                >
                  <img src={adutemLogo} className="max-h-16 md:max-h-20" />
                </a>
              </div>
            </header>
          </div>
          {/* Disclaimer */}
          {/* <div className="col-span-2 flex items-center justify-center h-28">
          <p className="text-center text-[var(--base-color)] text-sm font-semibold">
            Warning! The Growth Program is ONLY for Business Owner Can Handle
            10-15 Client Per Month/Contractors Capable of Managing 3+ New
            Projects Per Month
          </p>
        </div> */}

          {/* Info */}
          <div className="col-start-1 col-span-1 h-full flex items-center row-start-3 mt-6 md:row-start-2">
            <div className="max-w-[500px] flex flex-col mx-auto md:mx-0">
              <h1
                className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[2.4rem] text-[var(--base-color)] text-center md:text-left neue-regular"
                style={{ lineHeight: "1.2" }}
              >
                Lead Generation <br className="md:hidden" /> for Businesses &
                Contractors
              </h1>
              <p
                className="capitalize mt-5 md:text-xl text-gray-900 font-semibold max-w-[440px] text-center md:text-left neue-regular"
                style={{ lineHeight: "1.5" }}
              >
                {"GET YOUR OWN TRAFFIC-GENERATION INBOUND LEAD SYSTEM & SECURE NEW PROJECTS/ClIENTS EVERY 30 DAYS OR IT'S FREE".toLowerCase()}
              </p>
              <p className="font-semibold text-sm text-gray-800 mt-6 flex item-center gap-1 text-center md:text-left">
                <i className="fi fi-sr-shield-check flex"></i>
                <span className="-mt-1 neue-regular">Pay-Per-Project</span>
              </p>
              <p className="font-semibold text-sm text-gray-800 mt-2 flex item-center gap-1 text-center md:text-left">
                <i className="fi fi-sr-shield-check flex"></i>
                <span className="-mt-1 neue-regular">
                  The #1 Way to Close New Projects during high interest rate
                  periods
                </span>
              </p>
              <button className="capitalize rounded-full py-3 px-7 w-full max-w-[300px] bg-[var(--base-color)] text-white mt-6 cursor-pointer hover:opacity-70 transition-opacity duration-300 mx-auto md:mx-0 neue-regular">
                Apply to Partner with Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="col-start-1 md:col-start-2 row-start-2 col-span-1 flex justify-end md:items-end items-center h-full mt-6 md:mt-0">
            <div className="w-full h-auto">
              <img
                className="w-full max-h-[450px] object-contain lg:max-h-[500px]"
                src={businessGrowth}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* Sections */}
        <Testimonials />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <div className="w-full h-[200px] bg-[var(--base-color)] grid place-items-center">
        <p className="text-center text-white md:text-2xl neue-regular">
          All right Reserved. &copy; Adutem Innovation
        </p>
      </div>
    </>
  );
};
