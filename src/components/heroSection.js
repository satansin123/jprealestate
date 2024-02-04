import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

const images = [
  'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQLRrss0ZVWkISNXVQwXE8NwT3clf1NoaBCaT8uOCnlUXDrLoBNNRaQFVAKjt2YNywQSbbs8rTQK3GL0NvtFX-tojwLr07ZJAZsGLg-WxE',
  'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRrIDVVaFHdhNkiPStivZdKc8BlLl9in-mcqjZXw_N9NyB146V3rhMU97lbPJLf8Dw6AdbgceSPK43zCwNA0B_7_0TF5Dk3sKJZP_GAc-U',
  'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRSniPzPvl-RGFqSOVfXL9uuyrg4cZGsdE63B0k-IxKPt8FGbobB9QWSpOajUzt5BWQUKEAv66ToaGj00eFmcxfQ2HBfeUA2FHdlU5fbw',
  // Add more image URLs as needed
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the image index, and loop back to the first image if necessary
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // Define the animations
  const fadeInLeft = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.slow,
  });

  const fadeInRight = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: config.slow,
  });

  const slideUpButton = useSpring({
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { duration: 500, delay: 800 }, // Delay the button animation
  });

  const handleImageChange = () => {
    // Increment the image index, and loop back to the first image if necessary
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const fadeInOut = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: currentImageIndex % 2 === 1, // Reverse the animation every odd image change
    onRest: () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    },
    config: { duration: 5000, delay: 80 },
  });

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Side (Image Background) */}
      <animated.div
        style={{
          ...fadeInOut,
          flex: 1,
          background: `url('${images[currentImageIndex]}')`,
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        {/* You can add more elements or animations to the left side */}
      </animated.div>

      {/* Right Side (Text Content) */}
      <animated.div
        style={{
          ...fadeInRight,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Welcome to Your Dream Home</h1>
        <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>Discover amazing properties with breathtaking views and modern amenities.</p>
        <animated.button
          style={{
            ...slideUpButton,
            padding: '10px 20px',
            fontSize: '1rem',
            marginTop: '20px',
            background: '#4CAF50',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Explore Properties
        </animated.button>
      </animated.div>
    </div>
  );
};

export default HeroSection;
