import React from "react";
import Slider from "react-slick"; // lazy loader Carousel
import HomePageJson from '../data/homepage.json'
import "../App.css";

export default function MainArea() {
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
          slidesToShow: 8,
          slidesToScroll: 1,
          lazyLoad: true,
          className: "center",
          centerMode: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          lazyLoad: true,
          className: "center",
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          lazyLoad: true,
          className: "center",
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          lazyLoad: true,
          className: "center",
          centerMode: true,
        }
      }
    ]
  };

  let layoutCarousels = HomePageJson.titles.filter(title => title.moduleType !== "HERO");

  return (
    <div style={{ marginLeft: '25px' }}>
      {layoutCarousels.map((carousel) => {
        return (
          <div key={carousel.moduleId} className='layout__wrapper'>
            <h3 className='carousel__title'>{carousel.title}</h3>
            <Slider {...settings} style={{ marginBottom: '48px' }}>
              {carousel?.layoutTitles?.titles.map((obj) => {
                const { url, title } = obj.thumbnails['thumb-677x474'] || {}
                return (
                  <img key={title} src={url} alt={title} className='img-responsive' />
                )
              })}
            </Slider>
          </div>
        )
      })}
    </div>
  );
}