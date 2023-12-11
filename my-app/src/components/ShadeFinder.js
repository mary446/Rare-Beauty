import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/ShadeFinder.css";

const ShadeFinder = () => {
  const [currentCategory, setCurrentCategory] = useState('light');

  const handleSliderChange = (value) => {
    // Map slider values to corresponding skin tone categories
    if (value <= 33) setCurrentCategory('light');
    else if (value <= 66) setCurrentCategory('medium');
    else setCurrentCategory('dark');
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => handleSliderChange(next * 33 + 1), // Adjust the step size and starting index as needed
  };

  // Image URLs for the slider
  const lightImages = [
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-100w_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-280n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-110n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-130n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-140c_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-150c_360x.jpg?v=1702284098',
  ];

  const mediumImages = [
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-260n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-120c_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-310w_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-270n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-290n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-300c_360x.jpg?v=1702284098',

  ];

  const darkImages = [
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-520w_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-530n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-500n_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-550c_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-540c_360x.jpg?v=1702284098',
    'https://www.rarebeauty.com/cdn/shop/files/shadefinder-model-510w_360x.jpg?v=1702284098',
  ];

  return (
    <div className='shade-finder-container'>
      <div className='slider-container'>
        <label htmlFor='shade-slider'>Choose Your Shade:</label>
        <Slider {...settings}>
          <div>
            <p className="category-item" onClick={() => handleSliderChange(0)}>Light</p>
          </div>
          <div>
            <p className="category-item" onClick={() => handleSliderChange(33)}>Medium</p>
          </div>
          <div>
            <p className="category-item" onClick={() => handleSliderChange(66)}>Dark</p>
          </div>
        </Slider>
      </div>

      <div className='shade-grid'>
        <div className={`shade-item ${currentCategory === 'light' ? 'active' : ''}`}>
          {/* Render light images */}
          {lightImages.map((image, index) => (
            <img key={index} src={image} alt={`Shade ${index + 1}`} />
          ))}
        </div>

        <div className={`shade-item ${currentCategory === 'medium' ? 'active' : ''}`}>
          {/* Render medium images */}
          {mediumImages.map((image, index) => (
            <img key={index} src={image} alt={`Shade ${index + 1}`} />
          ))}
        </div>

        <div className={`shade-item ${currentCategory === 'dark' ? 'active' : ''}`}>
          {/* Render dark images */}
          {darkImages.map((image, index) => (
            <img key={index} src={image} alt={`Shade ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShadeFinder;
