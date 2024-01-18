import styled from "styled-components";
import blogPosts from "../data/blog";
import { Divi } from "../components/team/Intro";
import Footer from "../components/home/Footer";
import BlogCard from "../components/blog/BlogCard";

const CustomDivi = styled(Divi)`
  p.faded {
    color: rgba(255, 255, 255, 0.75) !important;
  }
`;

document.documentElement.style.background = "var(--black)";
const Blog = () => {
  return (
    <CustomDivi className="text-white">
      <div className="relative bg-gray-800 px-8 flex items-center rounded-full gap-6">
        <i className="fi fi-rr-search flex text-xl"></i>
        <input
          placeholder="Search"
          className="faded py-3 block flex-1 bg-transparent outline-none border-none"
        />
      </div>
      <div className="my-8">
        <div className="grid grid-cols-1 gap-y-12">
          {blogPosts.map((blogPost) => (
            <BlogCard {...blogPost} />
          ))}
        </div>
      </div>
      <Footer hideIdea={true} />
    </CustomDivi>
  );
};

export default Blog;
