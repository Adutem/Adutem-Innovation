import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

// get all blogs
export const getAllBlogs = (limit: number = 20, page: number = 1) => {
  const urlString = `${url.BLOG}?limit=${limit}&page=${page}`;
  return api.get(urlString);
};

// get single blog
export const getBlog = (blogId: string) => {
  return api.get(`${url.BLOG}/${blogId}`);
};

// create blog
export const createBlog = (data: any) => {
  return api.createWithFile(url.BLOG, data, "form-data");
};

// update blog
export const updateBlog = (blogId: string, data: any) => {
  return api.update(`${url.BLOG}/${blogId}`, data);
};

// delete blog
export const deleteBlog = (blogId: string) => {
  return api.delete(`${url.BLOG}/${blogId}`);
};
