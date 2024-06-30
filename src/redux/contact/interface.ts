import { ApiResponse } from "@/interfaces";

export interface ContactState {
  submittingForm: boolean;
  formSubmitted: boolean;
  formSubmissionError: string;
}

export type ContactOrgApiResponse = ApiResponse;
