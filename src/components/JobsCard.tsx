import { JobInterface } from "@/data/jobs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRedux } from "@/hooks/useRedux";

interface JobCardInterface extends JobInterface {
  onDelete?: (jobId: string) => void;
  onRequestEdit?: (data: JobInterface) => void;
  showMenuBtn: boolean;
}

const JobsCard = ({
  _id,
  role,
  description,
  requirements,
  applicationLink,
  applicationDeadline,
  contactLink,
  contactLinkType,
  onDelete,
  onRequestEdit,
  showMenuBtn = true,
}: JobCardInterface) => {
  const { useStateSelector } = useRedux();

  const { isDeletingJob } = useStateSelector((state) => state.Jobs);

  const requestEdit = () => {
    onRequestEdit &&
      onRequestEdit({
        _id,
        role,
        description,
        requirements,
        applicationLink,
        contactLink,
        applicationDeadline,
        contactLinkType,
      });
  };

  return (
    <div className="transparent-white rounded-md p-4 neue-regular relative max-w-[600px]">
      <div className="absolute top-0 right-0">
        {showMenuBtn && (
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
                  onClick={() => onDelete && onDelete(_id as string)}
                >
                  <span>Delete</span>
                  <i className="fi fi-rr-trash-xmarkx"></i>
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
      <h3 className="text-white neue-regular font-medium text-xl mb-3 mr-10">
        {role}
      </h3>
      <p className="text-gray-400 text-sm neue-regular font-normal">
        {description}
      </p>
      <hr className="my-3 border-gray-500" />
      <h4 className="neue-regular font-normal text-gray-200">Requirements</h4>
      <ul className="list-disc list-inside text-sm text-gray-400 mt-2">
        {requirements?.map((requirement) => (
          <li key={requirement} className="neue-regular text-xs">
            {requirement}
          </li>
        ))}
      </ul>
      <p className="text-gray-200 text-xs font-medium mt-4 neue-regular break-words">
        Application Link: <br />
        <a
          href={applicationLink}
          className="text-blue-500 underline cursor-pointer neue-regular"
          target="_blank"
        >
          {applicationLink}
        </a>
      </p>
      <p className="text-gray-200 text-xs font-medium mt-4 neue-regular break-words">
        Application Deadline:
        <span className="text-gray-400 cursor-pointer neue-regular ml-2">
          {new Date(applicationDeadline).toLocaleDateString()}
        </span>
      </p>
      <p className="text-gray-200 text-xs font-medium mt-4 neue-regular break-words">
        For more enquiry: <br />
        <a
          className="text-blue-500 underline cursor-pointer neue-regular"
          target="_blank"
        >
          {contactLink}
        </a>
      </p>
    </div>
  );
};

export default JobsCard;
