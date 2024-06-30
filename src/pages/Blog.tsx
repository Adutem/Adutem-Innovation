import styled from "styled-components";
import blogPosts from "../data/blog";
import { Divi } from "../components/team/Intro";
import Footer from "../components/home/Footer";
import BlogCard from "../components/blog/BlogCard";
import { useRedux, useSelectState } from "@/hooks/useRedux";
import { useEffect } from "react";
import { fetchBlogs } from "@/redux";
import { Loader } from "@/components/progress";
import Button from "@/components/forms/Button";

const CustomDivi = styled(Divi)`
  p.faded {
    color: rgba(255, 255, 255, 0.75) !important;
  }
`;

document.documentElement.style.background = "var(--black)";
const Blog = () => {
  const { dispatch, useStateSelector } = useRedux();

  const { blogs, blogsFetched, isFetchingBlogs, fetchError } = useStateSelector(
    (state) => state.Blog
  );

  useEffect(() => {
    if (!blogs) {
      dispatch(fetchBlogs());
    }
  }, []);

  const retryFetchBlogs = () => dispatch(fetchBlogs());

  return (
    <CustomDivi className="text-white w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
      {/* <div className="relative bg-gray-800 px-8 flex items-center rounded-full gap-6">
        <i className="fi fi-rr-search flex text-xl"></i>
        <input
          placeholder="Search"
          className="faded py-3 block flex-1 bg-transparent outline-none border-none"
        />
      </div> */}
      <div className="my-8 min-h-[40vh] relative">
        {isFetchingBlogs && <Loader />}
        {!isFetchingBlogs && fetchError && (
          <div className="p-4 w-full flex justify-center items-center flex-col gap-3 h-full">
            <p className="text-gray-300 neue-regular text-center text-sm">
              An unknown error occured. Please try again
            </p>
            <Button className="max-w-56" onClick={retryFetchBlogs}>
              <p className="text-white neue-regular text-xl">Retry</p>
            </Button>
          </div>
        )}
        {!isFetchingBlogs &&
          !fetchError &&
          (blogs && blogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:gap-y-24">
                {blogs.map((blog, i) => (
                  <BlogCard blog={blog} index={i} key={blog._id} />
                ))}
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

export default Blog;
