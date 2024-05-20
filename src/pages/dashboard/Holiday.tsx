import MainContent from "@/components/MainContent";
import styled from "styled-components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HolidayForm from "@/components/HolidayForm";
import { useEffect, useState } from "react";
import { useRedux } from "@/hooks/useRedux";
import {
  fetchHoliday,
  resetFetchHoliday,
  resetUpdateHoliday,
  updateHoliday,
} from "@/redux";
import { Loader } from "@/components/progress";
import Button from "@/components/forms/Button";
import { toast } from "react-toastify";
import { updateErrorToast, updateSuccessToast } from "@/utils";

const toastId = "dasjfkldasjf";

const Holiday = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const openFormModal = () => setIsFormModalOpen(true);

  const closeFormModal = () => setIsFormModalOpen(false);

  const { dispatch, useStateSelector } = useRedux();

  const {
    isFetchingHoliday,
    holidayFetched,
    fetchError,
    holiday,
    isUpdatingHoliday,
    holidayUpdated,
    updateError,
  } = useStateSelector((state) => state.Holiday);

  useEffect(() => {
    if (!holiday) {
      dispatch(fetchHoliday(false));
    }
  }, []);

  useEffect(() => {
    if (holidayFetched) {
      dispatch(resetFetchHoliday());
    }
  }, [holidayFetched]);

  const retryFetchHoliday = () => dispatch(fetchHoliday(false));

  const deactivateHoliday = () =>
    dispatch(
      updateHoliday({ holidayId: holiday?._id, data: { isDeactivated: true } })
    );

  const activateHoliday = () =>
    dispatch(
      updateHoliday({ holidayId: holiday?._id, data: { isDeactivated: false } })
    );

  useEffect(() => {
    if (isUpdatingHoliday) {
      toast.loading("Updating Holiday", { toastId: toastId });
    }
  }, [isUpdatingHoliday]);

  useEffect(() => {
    if (holidayUpdated) {
      updateSuccessToast(toastId, "Holiday Updated", 1300);
      dispatch(resetUpdateHoliday());
    }
  }, [holidayUpdated]);

  useEffect(() => {
    if (updateError) {
      updateErrorToast(toastId, "An error occured. Please try again", 1300);
      dispatch(resetUpdateHoliday());
    }
  }, [updateError]);

  return (
    <MainContent>
      <h1 className="text-white text-3xl neue-regular font-bold">Holiday</h1>
      {isFetchingHoliday ? (
        <div className="w-full h-full transparent-white">
          <Loader type="brand" />
        </div>
      ) : !holidayFetched && fetchError ? (
        <div
          className="
            flex-1 transparent-white p-4 w-full flex justify-center items-center flex-col gap-3"
        >
          <p className="text-gray-300 neue-regular text-center text-sm">
            An unknown error occured. Please try again
          </p>
          <Button className="max-w-56" onClick={retryFetchHoliday}>
            <p className="text-white neue-regular text-xl">Retry</p>
          </Button>
        </div>
      ) : (
        holiday && (
          <div className="bg-[var(--transparent-white)] py-4 px-6 rounded-md mt-4 flex flex-col gap-3">
            <h2 className="text-white text-xl sm:text-2xl neue-regular font-medium">
              Last declared holiday
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-4xl neue-regular my-2">
              {holiday.textContent}
            </p>
            <div className="flex justify-between items-end">
              <DateCont className="flex flex-col sm:flex-row gap-2 justify-start text-gray-300 text-xs">
                <span className="neue-regular">
                  <b className="neue-regular">Start Date: </b>{" "}
                  {new Date(holiday.startDate).toLocaleDateString()}
                </span>
                <span className="neue-regular">
                  <b className="neue-regular">End Date: </b>
                  {new Date(holiday.endDate).toLocaleDateString()}
                </span>
              </DateCont>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger disabled={isUpdatingHoliday}>
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
                      {holiday && holiday.isDeactivated ? (
                        <span
                          className="w-36 flex justify-between cursor-pointer"
                          onClick={() => activateHoliday()}
                        >
                          <span>Activate</span>
                          <i className="fi fi-rr-ban"></i>
                        </span>
                      ) : (
                        <span
                          className="w-36 flex justify-between cursor-pointer"
                          onClick={() => deactivateHoliday()}
                        >
                          <span>Deactivate</span>
                          <i className="fi fi-rr-ban"></i>
                        </span>
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )
      )}
      <HolidayForm
        onClose={closeFormModal}
        isOpen={isFormModalOpen}
        editData={holiday}
      />
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
