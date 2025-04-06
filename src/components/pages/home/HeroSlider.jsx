import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bg1 from "../../../assests/bg-1.jpg";
import bg2 from "../../../assests/bg-2.jpg";
import bg3 from "../../../assests/bg-3.jpg";
import './HeroSlider.css';

const slides = [
  {
    image: bg1,
    title: "ROTAVATOR BLADES & TILLER BLADES",
    subtitle: "High-Quality Agricultural Equipment",
  },
  {
    image: bg2,
    title: "HIGH-QUALITY ROTARY TILLER BLADES",
    subtitle: "Advanced Farming Solutions",
  },
  {
    image: bg3,
    title: "AGRICULTURAL MACHINERY",
    subtitle: "Professional Grade Equipment",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsZoomed(false);
      setTimeout(() => setIsZoomed(true), 100);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsZoomed(true);
    return () => setIsZoomed(false);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsZoomed(false);
    setTimeout(() => setIsZoomed(true), 100);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsZoomed(false);
    setTimeout(() => setIsZoomed(true), 100);
  };

  return (
    <Box className="hero-slider">
      {slides.map((slide, index) => (
        <Box
          key={index}
          className={`slide ${currentSlide === index ? 'active' : ''}`}
        >
          <Box
            className="slide-background"
            sx={{
              backgroundImage: `url(${slide.image})`,
              transform: isZoomed && currentSlide === index ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <Box className="slide-overlay">
            <Box className="slide-content">
              <Typography
                variant="h2"
                className={`slide-title ${currentSlide === index ? 'animate' : ''}`}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h5"
                className={`slide-subtitle ${currentSlide === index ? 'animate' : ''}`}
              >
                {slide.subtitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}

      <IconButton
        onClick={prevSlide}
        className="nav-button nav-button-prev"
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        className="nav-button nav-button-next"
      >
        <ChevronRight />
      </IconButton>

      <Box className="dots">
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </Box>
    </Box>
  );
}