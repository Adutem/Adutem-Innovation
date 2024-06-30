import styled from "styled-components";
import { Divi } from "../components/team/Intro";
import Footer from "../components/home/Footer";
import BlogCard from "../components/blog/BlogCard";
import { useRedux, useSelectState } from "@/hooks/useRedux";
import { useEffect } from "react";
import { fetchJobs } from "@/redux";
import { Loader } from "@/components/progress";
import Button from "@/components/forms/Button";
import JobsCard from "@/components/JobsCard";

const CustomDivi = styled(Divi)`
  p.faded {
    color: rgba(255, 255, 255, 0.75) !important;
  }
`;

document.documentElement.style.background = "var(--black)";
export const Career = () => {
  const { dispatch, useStateSelector } = useRedux();

  const { jobs, jobsFetched, isFetchingJobs, fetchError } = useStateSelector(
    (state) => state.Jobs
  );

  useEffect(() => {
    if (!jobs) {
      dispatch(fetchJobs(true));
    }
  }, []);

  const retryFetchJobs = () => dispatch(fetchJobs(true));

  return (
    <CustomDivi>
      <div className="my-8 min-h-[40vh] relative max-w-screen-xl w-11/12 mx-auto">
        {isFetchingJobs && <Loader />}
        {!isFetchingJobs && fetchError && (
          <div className="p-4 w-full flex justify-center items-center flex-col gap-3 h-full">
            <p className="text-gray-300 neue-regular text-center text-sm">
              An unknown error occured. Please try again
            </p>
            <Button className="max-w-56" onClick={retryFetchJobs}>
              <p className="text-white neue-regular text-xl">Retry</p>
            </Button>
          </div>
        )}
        {!isFetchingJobs &&
          !fetchError &&
          (jobs && jobs.length > 0 ? (
            <>
              <div>
                <h1 className="text-white text-3xl neue-regular font-bold mb-6">
                  Blog
                </h1>
                <JobsContainer className="jobs-container grid gap-4">
                  {jobs.map((job, i) => (
                    <JobsCard {...job} showMenuBtn={false} />
                  ))}
                </JobsContainer>
              </div>
            </>
          ) : (
            <div className="h-full p-4 w-full flex justify-center items-center flex-col gap-3 rounded-sm">
              <p className="text-gray-300 neue-regular text-center text-sm">
                No news at the moment
              </p>
            </div>
          ))}
      </div>
      <Footer hideIdea={true} />
    </CustomDivi>
  );
};

const JobsContainer = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
