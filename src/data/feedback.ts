import reviewVideoOne from "../assets/videos/review-1-540p.mp4";
import reviewVideoTwo from "../assets/videos/review-2-720p.mp4";
import reviewVideoThree from "../assets/videos/review-3-540p.mp4";

// IMAGE THUMBNAILS
import reviewThumbnailOne from "../assets/images/review-slide-1.jpg";
import reviewThumbnailTwo from "../assets/images/review-slide-2.jpg";
import reviewThumbnailThree from "../assets/images/review-slide-3.jpg";

export interface FeedBackData {
  whatTheySay: string;
  clientName: string;
  clientRole: string;
  videoUrl: string;
  thumbNail: string;
}

const feedbacks: FeedBackData[] = [
  {
    whatTheySay: "Their technical ability was particularly impressive.",
    clientName: "Carol Corman",
    clientRole: "President - Prism Inc.",
    videoUrl: reviewVideoOne,
    thumbNail: reviewThumbnailOne,
  },
  {
    whatTheySay: "The end result was outstanding!",
    clientName: "Amr El-Bayoumi",
    clientRole: "Actor",
    videoUrl: reviewVideoTwo,
    thumbNail: reviewThumbnailTwo,
  },
  {
    whatTheySay:
      "Overall, loved working with the team at Design in DC and look forward to a continued partnership with them.",
    clientName: "Pinakin Patel",
    clientRole: "CEO - IT Concept",
    videoUrl: reviewVideoThree,
    thumbNail: reviewThumbnailThree,
  },
];

export const thumbNails: string[] = [
  reviewThumbnailOne,
  reviewThumbnailTwo,
  reviewThumbnailThree,
];

export default feedbacks;
