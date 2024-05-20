import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HolidayApiResponse, HolidayState } from "./interface";
import { getHoliday, updateHoliday as updateHolidayApi } from "@/api/holiday";

const INIT_STATE: HolidayState = {
  isFetchingHoliday: false,
  holidayFetched: false,
  fetchError: "",
  holiday: null,
  isUpdatingHoliday: false,
  holidayUpdated: false,
  updateError: "",
};

// Fetch holiday
export const fetchHoliday = createAsyncThunk(
  "fetchHoliday",
  async (active: boolean, thunkAPI) => {
    try {
      const holidayResponse: Awaited<Promise<HolidayApiResponse>> =
        (await getHoliday(active)) as unknown as HolidayApiResponse;
      return holidayResponse.holiday;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Update Holiday
export const updateHoliday = createAsyncThunk(
  "updateHoliday",
  async ({ holidayId, data }: any, thunkAPI) => {
    try {
      const holidayResponse: Awaited<Promise<HolidayApiResponse>> =
        (await updateHolidayApi(
          holidayId,
          data
        )) as unknown as HolidayApiResponse;
      return holidayResponse.holiday;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const holidaySlice = createSlice({
  name: "Holiday",
  initialState: INIT_STATE,
  reducers: {
    resetFetchHoliday: (state: HolidayState) => {
      state.isFetchingHoliday = false;
      state.holidayFetched = false;
      state.fetchError = "";
    },
    resetUpdateHoliday: (state: HolidayState) => {
      state.isUpdatingHoliday = false;
      state.holidayUpdated = false;
      state.updateError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHoliday.pending, (state: HolidayState) => {
      state.isFetchingHoliday = true;
      state.holidayFetched = false;
      state.fetchError = "";
    });

    builder.addCase(fetchHoliday.fulfilled, (state: HolidayState, action) => {
      state.isFetchingHoliday = false;
      state.holidayFetched = true;
      state.holiday = action.payload;
    });

    builder.addCase(fetchHoliday.rejected, (state: HolidayState, action) => {
      state.isFetchingHoliday = false;
      state.holidayFetched = false;
      state.fetchError = action.payload as string;
    });

    builder.addCase(updateHoliday.pending, (state: HolidayState) => {
      state.isUpdatingHoliday = true;
      state.holidayUpdated = false;
      state.updateError = "";
    });

    builder.addCase(updateHoliday.fulfilled, (state: HolidayState, action) => {
      state.isUpdatingHoliday = false;
      state.holidayUpdated = true;
      state.holiday = action.payload;
    });

    builder.addCase(updateHoliday.rejected, (state: HolidayState, action) => {
      console.log(action);
      state.isUpdatingHoliday = false;
      state.holidayUpdated = false;
      state.updateError = action.payload as string;
    });
  },
});

export default holidaySlice.reducer;
export const { resetFetchHoliday, resetUpdateHoliday } = holidaySlice.actions;
