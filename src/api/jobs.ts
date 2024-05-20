import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

// get all jobs
export const getAllJobs = (active?: boolean) => {
  const urlString = active ? `${url.JOBS}?type=active` : url.JOBS;
  return api.get(urlString);
};

// get single job
export const getJob = (jobId: string) => {
  return api.get(`${url.JOBS}/${jobId}`);
};

// create job
export const createJob = (data: any) => {
  return api.create(url.JOBS, data);
};

// update job
export const updateJob = (jobId: string, data: any) => {
  return api.update(`${url.JOBS}/${jobId}`, data);
};

// delete job
export const deleteJob = (jobId: string) => {
  return api.delete(`${url.JOBS}/${jobId}`);
};
