import resultOne from "@/assets/images/testimonials/result-1.jpg";
import resultTwo from "@/assets/images/testimonials/result-2.jpg";
// import resultThree from "@/assets/images/testimonials/result-3.jpg";
import resultFour from "@/assets/images/testimonials/result-4.jpg";
import resultFive from "@/assets/images/testimonials/result-5.jpg";
import resultSix from "@/assets/images/testimonials/result-6.jpg";
import resultSeven from "@/assets/images/testimonials/result-7.jpg";

export interface Testimony {
  imgUrl: string;
}

export const testimonies: Testimony[] = [
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
