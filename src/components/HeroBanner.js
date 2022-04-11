import React from "react";
import Slider from "react-slick"; // lazy loader Carousel
import HomePageJson from '../data/homepage.json'
import "../App.css";

export default function HomeBanner() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 3024,
        settings: {
          className: "center",
          centerMode: true,
          centerPadding: "120px",
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  let heroBannerJson = HomePageJson.titles.filter(title => title.moduleType === "HERO");
  heroBannerJson = heroBannerJson.length > 0 ? heroBannerJson[0] : [];

  const heroBannerImagesArr = heroBannerJson.layoutTitles.titles;

  return (
    <div className="container" style={{ marginBottom: '48px' }}>
      <Slider {...settings}>
        {heroBannerImagesArr.map((obj) => {
          const { url, title } = obj.thumbnails['thumb-614x1536'] || {}
          return (
            <div key={obj.title}>
              <img src={url} alt={title} className='img-responsive' />
            </div>
          )
        })}
      </Slider>
    </div>
  );
}