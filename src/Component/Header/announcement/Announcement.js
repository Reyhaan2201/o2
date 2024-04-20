import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Announcement.css'; // Import CSS file for styling

class Announcement extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768, // Adjust breakpoint as needed
          settings: {
            slidesToShow: 1, // Show 1 slide on screens smaller than 768px
          }
        },
        {
          breakpoint: 992, // Adjust breakpoint as needed
          settings: {
            slidesToShow: 1, // Show 2 slides on screens between 768px and 992px
          }
        },
        {
          breakpoint: 1200, // Adjust breakpoint as needed
          settings: {
            slidesToShow: 1, // Show 3 slides on screens larger than 992px
          }
        }
      ]
    };

    return (
      <div className="announcement-slider-container container-fluid text-center">
        <Slider {...settings}>
          <div>
            <p id='sliderp'>😯 Estimated delivery time 2-7 days</p>
           
          </div>
          <div>
            <p id='sliderp'>🥳 Members get free Shipping above Rs.1999</p>
           
          </div>
          <div>
            <p id='sliderp'>🖤 Free & Flexible 15 days return</p>
            
          </div>
        </Slider>
      </div>
    );
  }
}

export default Announcement;
