import { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsData from "./NewsData";

export default function News() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    className: "slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="flex justify-center mt-8 mb-4 text-xl">News</h2>
      <h3 className="flex justify-center mb-8">お知らせ</h3>
      <div className="content mx-auto">
        <div className="controls">
          <button onClick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </button>
          <button onClick={sliderRef?.slickNext}>
            <FaChevronRight />
          </button>
        </div>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {NewsData.map((card, index) => (
            <div key={index} className="card border border-gray-300">
              <a href={card.link} className="hover:opacity-50">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="card-image"
                />
              </a>
              <div className="text-info">
                <span>{card.date}</span>
                <div className="card-header">
                  <h2>{card.title}</h2>
                </div>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
