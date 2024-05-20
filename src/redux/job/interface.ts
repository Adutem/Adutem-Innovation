import { JobInterface } from "@/data/jobs";
import { ApiResponse } from "@/interfaces";

export interface JobData extends JobInterface {}

export interface JobState {
  isFetchingJobs: boolean;
  jobsFetched: boolean;
  fetchError: string;
  jobs: Array<JobData>;
  isCreatingJob: boolean;
  jobCreated: boolean;
  createError: string;
  isUpdatingJob: boolean;
  jobUpdated: boolean;
  updateError: string;
  isDeletingJob: boolean;
  jobDeleted: boolean;
  deleteError: string;
}

export interface JobApiResponse extends ApiResponse {
  job: JobData;
}

export interface AllJobsApiResponse extends ApiResponse {
  jobs: Array<JobData>;
}
