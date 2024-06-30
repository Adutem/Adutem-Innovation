import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactOrg as contactOrgApi } from "@/api";
import { ContactState, ContactOrgApiResponse } from "./interface";

// initial contact state
const INIT_STATE: ContactState = {
  submittingForm: false,
  formSubmitted: false,
  formSubmissionError: "",
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

export const contactSlice = createSlice({
  name: "Contact",
  initialState: INIT_STATE,
  reducers: {
    resetContactOrg: (state) => {
      state.submittingForm = false;
      state.formSubmitted = false;
      state.formSubmissionError = "";
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
  },
});

export default contactSlice.reducer;
export const { resetContactOrg } = contactSlice.actions;
