"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderButtons = ({containerStyles, btnStyles, iconsStyles}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        Previous
        <PiCaretLeftBold className={iconsStyles}/>
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        Next
        <PiCaretRightBold className={iconsStyles}/>
      </button>
    </div>
  )
}

export default WorkSliderButtons