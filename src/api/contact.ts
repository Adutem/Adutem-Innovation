import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

// contact us
export const contactOrg = (data: any) => {
  return api.create(url.CONTACT_ORG, data);
};
