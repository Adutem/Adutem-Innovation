import { BlogContentType } from "@/components/BlogForm";
import { BlogInterface, BlogPost } from "@/data/blog";
import { ApiResponse } from "@/interfaces";

export interface BlogState {
  isFetchingBlogs: boolean;
  blogsFetched: boolean;
  fetchError: string;
  blogs: Array<BlogInterface>;
  isCreatingBlog: boolean;
  blogCreated: boolean;
  createError: string;
  isUpdatingBlog: boolean;
  blogUpdated: boolean;
  updateError: string;
  isDeletingBlog: boolean;
  blogDeleted: boolean;
  deleteError: string;
}

export interface BlogApiResponse extends ApiResponse {
  blog: BlogInterface;
}

export interface AllBlogsApiResponse extends ApiResponse {
  blogs: Array<BlogInterface>;
}
