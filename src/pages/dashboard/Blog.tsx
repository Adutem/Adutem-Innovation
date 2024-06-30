import BlogCard from "@/components/BlogCard";
import BlogForm from "@/components/BlogForm";
import MainContent from "@/components/MainContent";
import Button from "@/components/forms/Button";
import { Loader } from "@/components/progress";
import { BlogInterface } from "@/data/blog";
import { useRedux } from "@/hooks/useRedux";
import {
  deleteBlog,
  fetchBlogs,
  resetDeleteBlog,
  resetFetchBlogs,
} from "@/redux";
import { updateErrorToast, updateSuccessToast } from "@/utils";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const blogToastId = "kwerdf0u2490werdfsdfml";

const Blog = () => {
  const [isBlogFormOpen, setIsBlogFormOpen] = React.useState(false);
  const [editData, setEditData] = useState<BlogInterface | null>();

  const openBlogForm = () => setIsBlogFormOpen(true);
  const closeBlogForm = () => {
    setIsBlogFormOpen(false);
    setEditData(null);
  };

  // Redux utilities
  const { dispatch, useStateSelector } = useRedux();

  // Blog states
  const {
    isFetchingBlogs,
    blogsFetched,
    fetchError,
    blogs,
    isDeletingBlog,
    blogDeleted,
    deleteError,
  } = useStateSelector((state) => state.Blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  useEffect(() => {
    if (blogsFetched) {
      dispatch(resetFetchBlogs());
    }
  }, [blogsFetched]);

  const retryFetchBlogs = () => dispatch(fetchBlogs());

  // Delete blog handlers
  // Pending deletion
  useEffect(() => {
    if (isDeletingBlog) {
      toast.loading("Deleting blog", {
        toastId: blogToastId,
      });
    }
  }, [isDeletingBlog]);

  // Successful deletion
  useEffect(() => {
    if (blogDeleted) {
      updateSuccessToast(blogToastId, "Blog Posting deleted", 1300);
      dispatch(resetDeleteBlog());
    }
  }, [blogDeleted]);

  // Problem with deletion
  useEffect(() => {
    if (deleteError) {
      updateErrorToast(blogToastId, "An error occured. Please try again", 1300);
      dispatch(resetDeleteBlog());
    }
  }, [deleteError]);

  const onDelete = (blogId: string) => {
    dispatch(deleteBlog(blogId));
  };

  const onRequestEdit = (data: BlogInterface) => {
    setEditData(data);
    openBlogForm();
  };

  return (
    <MainContent>
      <div className="flex justify-between flex-end">
        <h1 className="text-white text-3xl neue-regular font-bold">Blog</h1>

        <span
          className={`w-10 h-10 rounded-md transparent-white grid place-items-center cursor-pointer hover:bg-gray-700 transition-all`}
          onClick={openBlogForm}
        >
          <i className={`text-white flex fi fi-rr-multiple text-xl`}></i>
        </span>
      </div>
      {isFetchingBlogs ? (
        <div className="w-full h-full transparent-white">
          <Loader type="brand" />
        </div>
      ) : !blogsFetched && fetchError ? (
        <div
          className="
            flex-1 transparent-white p-4 w-full flex justify-center items-center flex-col gap-3"
        >
          <p className="text-gray-300 neue-regular text-center text-sm">
            An unknown error occured. Please try again
          </p>
          <Button className="max-w-56" onClick={retryFetchBlogs}>
            <p className="text-white neue-regular text-xl">Retry</p>
          </Button>
        </div>
      ) : blogs && blogs.length === 0 ? (
        <div
          className="
            flex-1 transparent-white p-4 w-full flex justify-center items-center flex-col gap-3 rounded-sm"
        >
          <p className="text-gray-300 neue-regular text-center text-sm">
            You are yet to post a blog.
          </p>
          <Button className="max-w-56" onClick={openBlogForm}>
            <p className="text-white neue-regular text-xl">Post Blog</p>
          </Button>
        </div>
      ) : (
        <div className="mt-4">
          <BlogsContainer className="blogs-container grid gap-4">
            {blogs &&
              blogs.map((blog) => (
                <BlogCard
                  {...blog}
                  onDelete={onDelete}
                  onRequestEdit={onRequestEdit}
                />
              ))}
          </BlogsContainer>
        </div>
      )}
      {isBlogFormOpen && (
        <BlogForm onClose={closeBlogForm} isOpen={isBlogFormOpen} />
      )}
    </MainContent>
  );
};

const BlogsContainer = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default Blog;
