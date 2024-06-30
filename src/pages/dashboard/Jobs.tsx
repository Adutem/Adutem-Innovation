import JobForm, { JobFormData } from "@/components/JobForm";
import JobsCard from "@/components/JobsCard";
import MainContent from "@/components/MainContent";
import jobs, { JobInterface } from "@/data/jobs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRedux } from "@/hooks/useRedux";
import { fetchJobs, resetFetchJobs, deleteJob, resetDeleteJob } from "@/redux";
import { Loader } from "@/components/progress";
import Button from "@/components/forms/Button";
import { toast } from "react-toastify";
import {
  showErrorNotification,
  showSuccessNotification,
  updateErrorToast,
  updateSuccessToast,
} from "@/utils";

const jobToastId = "kwerdf0u2490werjfsdfml";

const Jobs = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editData, setEditData] = useState<JobInterface | null>(null);

  const openFormModal = () => setIsFormModalOpen(true);

  const closeFormModal = () => {
    setIsFormModalOpen(false);
    setEditData(null);
  };

  const { dispatch, useStateSelector } = useRedux();

  const {
    isFetchingJobs,
    jobsFetched,
    fetchError,
    jobs,
    isDeletingJob,
    jobDeleted,
    deleteError,
  } = useStateSelector((state) => state.Jobs);

  useEffect(() => {
    dispatch(fetchJobs(false));
  }, []);

  useEffect(() => {
    if (jobsFetched) {
      dispatch(resetFetchJobs());
    }
  }, [jobsFetched]);

  const retryFetchJobs = () => dispatch(fetchJobs(false));

  // Delete job handlers
  // Pending deletion
  useEffect(() => {
    if (isDeletingJob) {
      toast.loading("Deleting job", {
        toastId: jobToastId,
      });
    }
  }, [isDeletingJob]);

  // Successful deletion
  useEffect(() => {
    if (jobDeleted) {
      updateSuccessToast(jobToastId, "Job Posting deleted", 1300);
      dispatch(resetDeleteJob());
    }
  }, [jobDeleted]);

  // Problem with deletion
  useEffect(() => {
    if (deleteError) {
      updateErrorToast(jobToastId, "An error occured. Please try again", 1300);
      dispatch(resetDeleteJob());
    }
  }, [deleteError]);

  const onDelete = (jobId: string) => {
    dispatch(deleteJob(jobId));
  };

  const onRequestEdit = (data: JobInterface) => {
    setEditData(data);
    openFormModal();
  };

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
      {isFetchingJobs ? (
        <div className="w-full h-full transparent-white">
          <Loader type="brand" />
        </div>
      ) : !jobsFetched && fetchError ? (
        <div
          className="
            flex-1 transparent-white p-4 w-full flex justify-center items-center flex-col gap-3"
        >
          <p className="text-gray-300 neue-regular text-center text-sm">
            An unknown error occured. Please try again
          </p>
          <Button className="max-w-56" onClick={retryFetchJobs}>
            <p className="text-white neue-regular text-xl">Retry</p>
          </Button>
        </div>
      ) : jobs && jobs.length === 0 ? (
        <div
          className="
            flex-1 transparent-white p-4 w-full flex justify-center items-center flex-col gap-3 rounded-sm"
        >
          <p className="text-gray-300 neue-regular text-center text-sm">
            You are yet to post a job.
          </p>
          <Button className="max-w-56" onClick={openFormModal}>
            <p className="text-white neue-regular text-xl">Post Job</p>
          </Button>
        </div>
      ) : (
        <div className="mt-4">
          <JobsContainer className="jobs-container grid gap-4">
            {jobs &&
              jobs.map((job) => (
                <JobsCard
                  {...job}
                  onDelete={onDelete}
                  onRequestEdit={onRequestEdit}
                  showMenuBtn={true}
                />
              ))}
          </JobsContainer>
        </div>
      )}
      {isFormModalOpen && (
        <JobForm
          onClose={closeFormModal}
          isOpen={isFormModalOpen}
          editData={editData}
        />
      )}
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
