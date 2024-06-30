import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Divi } from "../components/team/Intro";
import { BlogInterface, IBlogContent } from "@/data/blog";

const CustomDivi = styled(Divi)`
  p.faded {
    color: rgba(255, 255, 255, 0.75) !important;
  }
`;

const BlogContentItem = ({ content }: { content: IBlogContent }) => {
  switch (content.type) {
    case "heading":
      return (
        <h2 className="text-white text-xl md:text-2xl">
          {content.textContent}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-gray-200 text-sm sm:text-base sm:leading-relaxed md:leading-loose">
          {content.textContent}
        </p>
      );
    case "image":
      return (
        <img
          src={content.fileContent?.downloadUrl}
          className="w-full max-w-[700px] h-auto max-h-[500px] roudned-lg object-contain"
        />
      );
    case "list":
      return (
        <ul>
          {content.listContent?.map((listItem) => (
            <li className="text-gray-200 text-sm sm:text-base">{listItem}</li>
          ))}
        </ul>
      );
  }
};

export const BlogDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state.blogData) {
      return navigate("/blog", { replace: true, state: null });
    }
  }, [location.state]);

  const blogData = location.state?.blogData as BlogInterface;

  return (
    <CustomDivi className="text-white w-[100%] md:w-[90%] lg:max-w-[1024px] md:mx-auto lg:w-11/12">
      <>
        {/* Thumbnail */}
        <div className="w-full h-[250px] sm:h-[300px] md:h-[450px] overflow-hidden rounded-xl">
          <img
            src={blogData.thumbNail.downloadUrl}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tag and publication date */}
        <div className="mt-12 mb-8 flex gap-4 items-center">
          <p className="uppercase text-xs">{blogData.tag}</p>
          <div className="w-1 h-1 bg-white"></div>
          <p className="uppercase text-xs">
            {new Date(blogData.publicationDate as any).toDateString()}
          </p>
        </div>

        {/* Title */}
        <h1
          aria-roledescription="Blog Title"
          className="text-white text-xl sm:text-2xl md:text-3xl font-semibold"
        >
          {blogData.title}
        </h1>

        {/* Blog Content */}
        <div className="my-8">
          {blogData.blogContents.map((content) => (
            <BlogContentItem content={content} />
          ))}
        </div>
      </>
    </CustomDivi>
  );
};
