import { BlogInterface } from "@/data/blog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRedux } from "@/hooks/useRedux";

interface BlogCardInterface extends BlogInterface {
  onDelete: (blogId: string) => void;
  onRequestEdit: (data: BlogInterface) => void;
}

const BlogCard = ({
  onDelete,
  onRequestEdit,
  ...blogData
}: BlogCardInterface) => {
  const { useStateSelector } = useRedux();

  const { _id, title, shortIntroduction, thumbNail, publicationDate, tag } =
    blogData;
  const { isDeletingJob } = useStateSelector((state) => state.Jobs);

  const requestEdit = () => {
    onRequestEdit(blogData);
  };

  return (
    <div className="transparent-white rounded-md p-4 neue-regular relative max-w-[600px]">
      <div className="absolute top-0 right-0">
        <DropdownMenu>
          <DropdownMenuTrigger disabled={isDeletingJob}>
            <span
              className={`w-10 h-10 rounded-md grid place-items-center cursor-pointer`}
            >
              <i
                className={`text-white flex fi fi-rr-menu-dots-vertical text-base`}
              ></i>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black">
            <DropdownMenuItem className="cursor-pointer text-gray-300 hover:text-black focus:text-black">
              <span
                className="w-36 flex justify-between cursor-pointer"
                onClick={() => requestEdit()}
              >
                <span>Edit</span>
                <i className="fi fi-rr-pencil"></i>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-gray-300 hover:text-black focus:text-black">
              <span
                className="w-36 flex justify-between cursor-pointer"
                onClick={() => onDelete(_id as string)}
              >
                <span>Delete</span>
                <i className="fi fi-rr-trash-xmarkx"></i>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <h3 className="text-white neue-regular font-medium text-xl mb-3 mr-10">
        {title}
      </h3>
      <div className="w-full h-60 rounded-sm overflow-hidden">
        <img
          src={thumbNail.downloadUrl}
          alt={thumbNail.metadata.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="blog-info w-full transparent-white mt-4 rounded-sm p-4">
        <p className="text-gray-400 text-sm neue-regular font-normal">
          {shortIntroduction}
        </p>
        <hr className="my-3 border-gray-500" />
        <p className="text-gray-200 text-xs font-medium mt-4 neue-regular break-words">
          Publication Date:
          <span className="text-gray-400 cursor-pointer neue-regular ml-2">
            {new Date(publicationDate).toLocaleDateString()}
          </span>
        </p>
        <p className="text-gray-200 text-xs font-medium mt-4 neue-regular break-words">
          Tag:
          <span className="text-gray-400 cursor-pointer neue-regular ml-2">
            {tag}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
