import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JobApiResponse, AllJobsApiResponse, JobState } from "./interface";
import {
  getAllJobs as getAllJobsApi,
  getJob as getJobApi,
  createJob as createJobApi,
  updateJob as updateJobApi,
  deleteJob as deleteJobApi,
} from "@/api/jobs";

// initial job state
const INIT_STATE: JobState = {
  isFetchingJobs: false,
  jobsFetched: false,
  fetchError: "",
  jobs: null,
  isCreatingJob: false,
  jobCreated: false,
  createError: "",
  isUpdatingJob: false,
  jobUpdated: false,
  updateError: "",
  isDeletingJob: false,
  jobDeleted: false,
  deleteError: "",
};

// Fetch jobs
export const fetchJobs = createAsyncThunk(
  "fetchJobs",
  async (active: boolean, thunkAPI) => {
    try {
      const jobsResponse: Awaited<Promise<AllJobsApiResponse>> =
        (await getAllJobsApi(active)) as unknown as AllJobsApiResponse;
      return jobsResponse.jobs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Create jobs
export const createJob = createAsyncThunk(
  "createJob",
  async (data: any, thunkAPI) => {
    try {
      const jobResponse: Awaited<Promise<JobApiResponse>> = (await createJobApi(
        data
      )) as unknown as JobApiResponse;
      return jobResponse.job;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Update jobs
export const updateJob = createAsyncThunk(
  "updateJob",
  async ({ jobId, data }: any, thunkAPI) => {
    try {
      const jobResponse: Awaited<Promise<JobApiResponse>> = (await updateJobApi(
        jobId,
        data
      )) as unknown as JobApiResponse;
      return jobResponse.job;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Delete job
export const deleteJob = createAsyncThunk(
  "deleteJob",
  async (jobId: string, thunkAPI) => {
    try {
      const jobResponse: Awaited<Promise<JobApiResponse>> = (await deleteJobApi(
        jobId
      )) as unknown as JobApiResponse;
      return jobResponse.job;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const jobsSlice = createSlice({
  name: "Jobs",
  initialState: INIT_STATE,
  reducers: {
    resetFetchJobs: (state: JobState) => {
      state.isFetchingJobs = false;
      state.jobsFetched = false;
      state.fetchError = "";
    },

    resetCreateJob: (state: JobState) => {
      state.isCreatingJob = false;
      state.jobCreated = false;
      state.createError = "";
    },

    resetUpdateJob: (state: JobState) => {
      state.isUpdatingJob = false;
      state.jobUpdated = false;
      state.updateError = "";
    },

    resetDeleteJob: (state: JobState) => {
      state.isDeletingJob = false;
      state.jobDeleted = false;
      state.deleteError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state: JobState) => {
      state.isFetchingJobs = true;
      state.jobsFetched = false;
      state.fetchError = "";
    });
    builder.addCase(fetchJobs.fulfilled, (state: JobState, action) => {
      state.isFetchingJobs = false;
      state.jobsFetched = true;
      state.jobs = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state: JobState, action) => {
      state.isFetchingJobs = false;
      state.jobsFetched = false;
      state.fetchError = action.payload as string;
    });
    builder.addCase(createJob.pending, (state: JobState) => {
      state.isCreatingJob = true;
      state.jobCreated = false;
      state.createError = "";
    });
    builder.addCase(createJob.fulfilled, (state: JobState, action) => {
      state.isCreatingJob = false;
      state.jobCreated = true;
      state.jobs
        ? state.jobs.push(action.payload)
        : (state.jobs = [action.payload]);
    });
    builder.addCase(createJob.rejected, (state: JobState, action) => {
      state.isCreatingJob = false;
      state.jobCreated = false;
      state.createError = action.payload as string;
    });
    builder.addCase(updateJob.pending, (state: JobState) => {
      state.isUpdatingJob = true;
      state.jobUpdated = false;
      state.updateError = "";
    });
    builder.addCase(updateJob.fulfilled, (state: JobState, action) => {
      state.isUpdatingJob = false;
      state.jobUpdated = true;
      state.jobs = !state.jobs
        ? []
        : state.jobs.map((job) => {
            if (job._id === action.payload._id) {
              return action.payload;
            } else {
              return job;
            }
          });
    });
    builder.addCase(updateJob.rejected, (state: JobState, action) => {
      state.isUpdatingJob = false;
      state.jobUpdated = false;
      state.updateError = action.payload as string;
    });
    builder.addCase(deleteJob.pending, (state: JobState) => {
      state.isDeletingJob = true;
      state.jobDeleted = false;
      state.deleteError = "";
    });
    builder.addCase(deleteJob.fulfilled, (state: JobState, action) => {
      state.isDeletingJob = false;
      state.jobDeleted = true;
      state.jobs = !state.jobs
        ? []
        : state.jobs.filter((job) => job._id !== action.payload._id);
    });
    builder.addCase(deleteJob.rejected, (state: JobState, action) => {
      state.isDeletingJob = false;
      state.jobDeleted = false;
      state.deleteError = action.payload as string;
    });
  },
});

export default jobsSlice.reducer;
export const {
  resetCreateJob,
  resetFetchJobs,
  resetUpdateJob,
  resetDeleteJob,
} = jobsSlice.actions;
