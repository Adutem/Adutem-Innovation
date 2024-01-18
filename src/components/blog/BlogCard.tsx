import React from "react";
import { BlogPost } from "../../data/blog";
import styled from "styled-components";

interface BlogCardProps extends BlogPost {}

const BlogCard = ({
  thumbNail,
  tag,
  publicationDate,
  title,
  shortDescription,
}: BlogCardProps) => {
  return (
    <Container>
      <div>
        <div className="w-full rounded-lg overflow-hidden h-[200px] sm:h-[280px] md:h-[300px]">
          <img src={thumbNail} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex gap-4 my-2 mt-4">
        <p className="uppercase text-xs faded">{tag}</p>
        <p className="uppercase text-xs faded">
          {new Date(publicationDate).toDateString()}
        </p>
      </div>
      <h2
        className="text-xl text-[var(--base-color)]"
        style={{ fontSize: "clamp(1.45rem, 4.5vw, 2rem)" }}
      >
        {title}
      </h2>
      <p className="mt-4" style={{ fontSize: "clamp(0.8rem, 4v.5w, 18px)" }}>
        {shortDescription}
      </p>
    </Container>
  );
};

const Container = styled.div``;

export default BlogCard;
