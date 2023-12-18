import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically slide to the next banner
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const banners = [
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    'https://i.ibb.co/k45Nfhg/bunch-painting-brushes-beautiful-colorful-background-painting.jpg',
    // Add more banner URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToSlide = (index) => {
    // Manually slide to the specified index
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <Slider {...settings} className="overflow-hidden">
        {banners.map((banner, index) => (
          <div key={index} className="h-64">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 bg-gray-800 bg-opacity-50">
        <p className="text-white">Current Slide: {currentSlide + 1}</p>
        <button
          onClick={() =>
            goToSlide((currentSlide - 1 + banners.length) % banners.length)
          }
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % banners.length)}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Banner;
