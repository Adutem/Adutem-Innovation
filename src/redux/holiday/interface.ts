import { ApiResponse } from "@/interfaces";

export interface HolidayData {
  _id: string;
  textContent: string;
  isDeactivated: boolean;
  startDate: string | Date;
  endDate: string | Date;
}

export interface HolidayState {
  isFetchingHoliday: boolean;
  holidayFetched: boolean;
  fetchError: string;
  holiday: HolidayData | null;
  isUpdatingHoliday: boolean;
  holidayUpdated: boolean;
  updateError: string;
  gettingActiveHoliday: boolean;
  activeHolidayFetched: boolean;
  activeHolidayFetchError: string;
  activeHoliday: HolidayData | null;
}

export interface HolidayApiResponse extends ApiResponse {
  holiday: HolidayData;
}
