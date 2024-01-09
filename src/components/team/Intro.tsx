const Intro = () => {
  return (
    <div>
      <h1
        className="leading-normal md:leading-tight mb-11 text-white text-left pt-0 md:pt-10  max-w-[850px]"
        style={{ fontSize: "clamp(1.2rem, 7.7vw, 45px)" }}
      >
        We're a team of nimble, highly skilled individuals with diverse creative
        backgrounds
      </h1>
      <div className="text-white grid md:flex grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-6 items-center md:justify-between w-11/12 md:w-full mx-auto md:mx-0 max-w-[800px] my-6 md:mt-24">
        <div>
          <h4 className="text-4xl mb-2">50 +</h4>
          <p className="text-base text-gray-400">Employees</p>
        </div>
        <div>
          <h4 className="text-4xl mb-2">300 +</h4>
          <p className="text-base text-gray-400">Projects</p>
        </div>
        <div>
          <h4 className="text-4xl mb-2">5 +</h4>
          <p className="text-base text-gray-400">Years of experience</p>
        </div>
        <div>
          <h4 className="text-4xl mb-2">20 +</h4>
          <p className="text-base text-gray-400">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
