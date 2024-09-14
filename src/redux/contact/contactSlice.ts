import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  contactOrg as contactOrgApi,
  submitSurvey as submitSurveyApi,
} from "@/api";
import {
  ContactState,
  ContactOrgApiResponse,
  SubmitSurveyApiResponse,
} from "./interface";

// initial contact state
const INIT_STATE: ContactState = {
  submittingForm: false,
  formSubmitted: false,
  formSubmissionError: "",
  submittingSurvey: false,
  surveySubmitted: false,
  surveySubmissionError: "",
};

// contact our organization
export const contactOrg = createAsyncThunk(
  "contactOrg",
  async (data: any, thunkAPI) => {
    try {
      const contactResponse: Awaited<Promise<ContactOrgApiResponse>> =
        (await contactOrgApi(data)) as unknown as ContactOrgApiResponse;
      return contactResponse.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// submit survey
export const submitSurvey = createAsyncThunk(
  "submitSurvey",
  async (data: any, thunkAPI) => {
    try {
      const surveyResponse: Awaited<Promise<SubmitSurveyApiResponse>> =
        (await submitSurveyApi(data)) as unknown as SubmitSurveyApiResponse;
      return surveyResponse.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const contactSlice = createSlice({
  name: "Contact",
  initialState: INIT_STATE,
  reducers: {
    resetContactOrg: (state) => {
      state.submittingForm = false;
      state.formSubmitted = false;
      state.formSubmissionError = "";
    },

    resetSubmitSurvey: (state) => {
      state.submittingSurvey = false;
      state.surveySubmitted = false;
      state.surveySubmissionError = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(contactOrg.pending, (state) => {
        state.submittingForm = true;
        state.formSubmitted = false;
      })
      .addCase(contactOrg.fulfilled, (state) => {
        state.submittingForm = false;
        state.formSubmitted = true;
      })
      .addCase(contactOrg.rejected, (state, action) => {
        state.submittingForm = false;
        state.formSubmitted = false;
        state.formSubmissionError = action.payload as string;
      });

    // Survey state
    builder
      .addCase(submitSurvey.pending, (state) => {
        state.submittingSurvey = true;
        state.surveySubmitted = false;
      })
      .addCase(submitSurvey.fulfilled, (state) => {
        state.submittingSurvey = false;
        state.surveySubmitted = true;
      })
      .addCase(submitSurvey.rejected, (state, action) => {
        state.submittingSurvey = false;
        state.surveySubmitted = false;
        state.surveySubmissionError = action.payload as string;
      });
  },
});

export default contactSlice.reducer;
export const { resetContactOrg, resetSubmitSurvey } = contactSlice.actions;
