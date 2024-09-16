import resultOne from "@/assets/images/testimonials/result-1.jpg";
import resultTwo from "@/assets/images/testimonials/result-2.jpg";
// import resultThree from "@/assets/images/testimonials/result-3.jpg";
import resultFour from "@/assets/images/testimonials/result-4.jpg";
import resultFive from "@/assets/images/testimonials/result-5.jpg";
import resultSix from "@/assets/images/testimonials/result-6.jpg";
import resultSeven from "@/assets/images/testimonials/result-7.jpg";

// testimony images
import tOne from "@/assets/images/testimonials/testimony-1.jpg";
import tTwo from "@/assets/images/testimonials/testimony-2.jpg";
import tThree from "@/assets/images/testimonials/testimony-3.jpg";

// testimony videos
import tvOne from "@/assets/videos/jermaine-watkins.mp4";
import tvTwo from "@/assets/videos/akram-himmed.mp4";
import tvThree from "@/assets/videos/titus.mp4";
import tvFour from "@/assets/videos/dan-elate.mp4";

// testimony posters
import tvOnePoster from "@/assets/posters/jermaine-watkins.png";
import tvTwoPoster from "@/assets/posters/akram-himmed.png";
import tvThreePoster from "@/assets/posters/titus.png";
import tvFourPoster from "@/assets/posters/dan-elate.png";

export interface Result {
  imgUrl: string;
}
export interface Testimony {
  imgUrl: string;
  type: "image" | "video";
  poster?: string;
}

export const results: Result[] = [
  {
    imgUrl: resultOne,
  },
  {
    imgUrl: resultTwo,
  },
  // {
  //   imgUrl: resultThree,
  // },
  {
    imgUrl: resultFour,
  },
  {
    imgUrl: resultFive,
  },
  {
    imgUrl: resultSix,
  },
  {
    imgUrl: resultSeven,
  },
];

export const testimonies: Testimony[] = [
  {
    imgUrl: tOne,
    type: "image",
  },
  {
    imgUrl: tTwo,
    type: "image",
  },
  {
    imgUrl: tThree,
    type: "image",
  },
  {
    imgUrl: tvOne,
    type: "video",
    poster: tvOnePoster,
  },
  {
    imgUrl: tvTwo,
    type: "video",
    poster: tvTwoPoster,
  },
  {
    imgUrl: tvThree,
    type: "video",
    poster: tvThreePoster,
  },
  {
    imgUrl: tvFour,
    type: "video",
    poster: tvFourPoster,
  },
];
