import { v4 as uuidv4 } from "uuid";

export type SurveyQuestion = {
  id: string;
  question: string;
  options: string[];
};

export const surveyQuestions: SurveyQuestion[] = [];
