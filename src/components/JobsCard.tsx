import { JobInterface } from "@/data/jobs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const JobsCard = ({
  role,
  description,
  requirements,
  applicationLink,
}: JobInterface) => {
  return (
    <div className="transparent-white rounded-md p-4 neue-regular relative">
      <div className="absolute top-0 right-0">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span
              className={`w-10 h-10 rounded-md grid place-items-center cursor-pointer`}
            >
              <i
                className={`text-white flex fi fi-rr-menu-dots-vertical text-base`}
              ></i>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <span
                className="w-36 flex justify-between cursor-pointer"
                // onClick={() => openFormModal()}
              >
                <span>Edit</span>
                <i className="fi fi-rr-pencil"></i>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="w-36 flex justify-between cursor-pointer">
                <span>Delete</span>
                <i className="fi fi-rr-trash-xmarkx"></i>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
    </div>
  );
};

export default JobsCard;
