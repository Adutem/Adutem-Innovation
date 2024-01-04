import { PropsWithChildren } from "react";
import { FeedBackData } from "../../data/feedback";

export interface FeedBackCardProps extends PropsWithChildren {
  feedback: FeedBackData;
  infoContainerRef: any;
  clientNameRef: any;
  clientRoleRef: any;
  thumbnailImageRef: any;
}

const ClientFeedBackCard = ({
  clientNameRef,
  clientRoleRef,
  thumbnailImageRef,
  infoContainerRef,
  feedback,
}: FeedBackCardProps) => {
  console.log(feedback);
  return (
    <div className="min-h-60 flex gap-8" ref={infoContainerRef}>
      <div className="left-container flex flex-col justify-between flex-1">
        <div></div>
        <p className="text-3xl max-w-[380px] italic">
          "{feedback.whatTheySay}"
        </p>
        <div>
          <p
            className="mb-1 font-semibold text-[var(--grayWhite)] text-lg"
            ref={clientNameRef}
          >
            {feedback.clientName}
          </p>
          <p ref={clientRoleRef}>{feedback.clientRole}</p>
        </div>
      </div>
      <div className="right-container h-[420px] flex-1 bg-red-700">
        <div className="review-video-container w-full h-full overflow-hidden relative">
          <img
            className="w-full h-full cover object-cover object-center"
            src={feedback.thumbNail}
            ref={thumbnailImageRef}
          />
          <div
            className="player absolute top-1/2 left-1/2 w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center cursor-pointer"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <i className="fi fi-sr-play flex text-gray-700 text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedBackCard;
