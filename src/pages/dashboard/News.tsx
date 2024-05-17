import MainContent from "@/components/MainContent";
import React from "react";
import styled from "styled-components";

const News = () => {
  return (
    <MainContent>
      <div className="flex justify-between flex-end">
        <h1 className="text-white text-3xl neue-regular font-bold">News</h1>

        <span
          className={`w-10 h-10 rounded-md transparent-white grid place-items-center cursor-pointer hover:bg-gray-700 transition-all`}
        >
          <i className={`text-white flex fi fi-rr-multiple text-xl`}></i>
        </span>
      </div>
      <div className="mt-4"></div>
    </MainContent>
  );
};

const NewsContainer = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default News;
