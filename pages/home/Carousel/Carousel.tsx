import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [userInteraction, setUserInteraction] = useState(false);

  useEffect(() => {
    if (!userInteraction) {
      const id = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
      }, 10000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [userInteraction, children.length]);

  const handleInteraction = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setUserInteraction(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }} onClick={handleInteraction}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            marginBottom: '20px',
            textAlign: 'center', // Center the content horizontally
          }}
        >
          {child}
        </div>
      ))}

      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={handlePrevious}
          startIcon={<NavigateBeforeIcon />}
          disabled={currentIndex === 0}
        />

        {children.map((_, index) => (
          <FiberManualRecordIcon
            key={index}
            style={{
              margin: '0 5px',
              fontSize: index === currentIndex ? '8px' : '6px',
              color: index === currentIndex ? '#1976d2' : '#ccc',
            }}
          />
        ))}

        <Button
          onClick={handleNext}
          endIcon={<NavigateNextIcon />}
          disabled={currentIndex === children.length - 1}
        />
      </div>
    </div>
  );
};

export default Carousel;
