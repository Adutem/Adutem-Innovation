import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

export const getHoliday = (active?: boolean) => {
  const urlString = active ? `${url.HOLIDAY}?type=active` : url.HOLIDAY;
  return api.get(urlString);
};

export const updateHoliday = (holidayId: string, data: any) => {
  return api.update(`${url.HOLIDAY}/${holidayId}`, data);
};
