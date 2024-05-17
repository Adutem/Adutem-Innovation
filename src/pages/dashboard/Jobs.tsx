import JobForm from "@/components/JobForm";
import JobsCard from "@/components/JobsCard";
import MainContent from "@/components/MainContent";
import jobs from "@/data/jobs";
import React, { useState } from "react";
import styled from "styled-components";

const Jobs = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => setIsFormModalOpen(true);

  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <MainContent>
      <div className="flex justify-between items-end">
        <h1 className="text-white text-3xl neue-regular font-bold">Jobs</h1>

        <span
          className={`w-10 h-10 rounded-md transparent-white grid place-items-center cursor-pointer hover:bg-gray-700 transition-all`}
          onClick={openFormModal}
        >
          <i className={`text-white flex fi fi-rr-multiple text-xl`}></i>
        </span>
      </div>
      <div className="mt-4">
        <JobsContainer className="jobs-container grid gap-4">
          {jobs.map((job) => (
            <JobsCard {...job} />
          ))}
        </JobsContainer>
      </div>
      <JobForm onClose={closeFormModal} isOpen={isFormModalOpen} />
    </MainContent>
  );
};

const JobsContainer = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default Jobs;
