import { ApiResponse } from "@/interfaces";

export interface ContactState {
  submittingForm: boolean;
  formSubmitted: boolean;
  formSubmissionError: string;
  submittingSurvey: boolean;
  surveySubmitted: boolean;
  surveySubmissionError: string;
}

export type ContactOrgApiResponse = ApiResponse;

export type SubmitSurveyApiResponse = ApiResponse;
