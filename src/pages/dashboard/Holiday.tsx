import MainContent from "@/components/MainContent";
import styled from "styled-components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HolidayForm from "@/components/HolidayForm";
import { useState } from "react";

const Holiday = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => setIsFormModalOpen(true);

  const closeFormModal = () => setIsFormModalOpen(false);

  return (
    <MainContent>
      <h1 className="text-white text-3xl neue-regular font-bold">Holiday</h1>
      <div className="bg-[var(--transparent-white)] py-4 px-6 rounded-md mt-4 flex flex-col gap-3">
        <h2 className="text-white text-xl sm:text-2xl neue-regular font-medium">
          Last declared holiday
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-4xl neue-regular my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          doloremque, non cumque laborum ratione illum officia nisi magnam
          blanditiis atque, voluptatibus ea nemo dolorum sunt sapiente maxime!
          Fugit, totam itaque!
        </p>
        <div className="flex justify-between items-end">
          <DateCont className="flex flex-col sm:flex-row gap-2 justify-start text-gray-300 text-xs">
            <span className="neue-regular">
              <b className="neue-regular">Start Date: </b>{" "}
              {new Date().toLocaleDateString()}
            </span>
            <span className="neue-regular">
              <b className="neue-regular">End Date: </b>
              {new Date(Date.now() + 8640000).toLocaleDateString()}
            </span>
          </DateCont>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span
                  className={`w-10 h-10 rounded-full transparent-white grid place-items-center cursor-pointer`}
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
                    onClick={() => openFormModal()}
                  >
                    <span>Edit</span>
                    <i className="fi fi-rr-pencil"></i>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="w-36 flex justify-between cursor-pointer">
                    <span>Deactivate</span>
                    <i className="fi fi-rr-ban"></i>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <HolidayForm onClose={closeFormModal} isOpen={isFormModalOpen} />
    </MainContent>
  );
};

const DateCont = styled.div`
  flex-direction: row;

  @media screen and (max-width: 468px) {
    flex-direction: column;
  }
`;

export default Holiday;
