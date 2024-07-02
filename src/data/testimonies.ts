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
export interface Result {
  imgUrl: string;
}
export interface Testimony {
  imgUrl: string;
  type: "image" | "video";
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
];
