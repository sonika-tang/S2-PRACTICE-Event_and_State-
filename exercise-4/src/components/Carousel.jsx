import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentIndex, setCurrentIndex] = useState(0);
  /* You will need to hanle the click on left and right button */
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  /* You will need to manage the cases when we are on the last image or first image*/
  if (!images.length) {
    return <p>No images available</p>;
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevImage} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="slide"
      />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextImage} />
    </div>
  );
};
