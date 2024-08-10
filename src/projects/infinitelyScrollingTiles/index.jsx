import React from 'react';
import { useEffect, useState, useRef } from 'react';
import './scroll.css'

const puppies = [
    "https://frontendeval.com/images/puppy-1.jpeg",
    "https://frontendeval.com/images/puppy-2.jpeg",
    "https://frontendeval.com/images/puppy-3.jpeg",
    "https://frontendeval.com/images/puppy-4.jpeg",
    "https://frontendeval.com/images/puppy-5.jpeg",
    "https://frontendeval.com/images/puppy-6.jpeg",
    "https://frontendeval.com/images/puppy-7.jpeg",
    "https://frontendeval.com/images/puppy-8.jpeg",
    "https://frontendeval.com/images/puppy-9.jpeg",
    "https://frontendeval.com/images/puppy-10.jpeg",
    "https://frontendeval.com/images/puppy-11.jpeg",
    "https://frontendeval.com/images/puppy-12.jpeg",
];

const kittens = [
    "https://frontendeval.com/images/kitten-1.jpeg",
    "https://frontendeval.com/images/kitten-2.jpeg",
    "https://frontendeval.com/images/kitten-3.jpeg",
    "https://frontendeval.com/images/kitten-4.jpeg",
    "https://frontendeval.com/images/kitten-5.jpeg",
    "https://frontendeval.com/images/kitten-6.jpeg",
    "https://frontendeval.com/images/kitten-7.jpeg",
    "https://frontendeval.com/images/kitten-8.jpeg",
    "https://frontendeval.com/images/kitten-9.jpeg",
    "https://frontendeval.com/images/kitten-10.jpeg",
    "https://frontendeval.com/images/kitten-11.jpeg",
    "https://frontendeval.com/images/kitten-12.jpeg",
];


const InfiniteScroll = () => {
    const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!paused) {
        row1Ref.current.scrollLeft += (hovered === 'row1' ? 10 : 20) * 0.016; // 16ms ~ 60fps
        row2Ref.current.scrollLeft += (hovered === 'row2' ? 5 : 10) * 0.016;
      }
    };

    const interval = setInterval(handleScroll, 16); // 16ms ~ 60fps
    return () => clearInterval(interval);
  }, [paused, hovered]);

  const togglePause = () => setPaused(!paused);

  const handleMouseEnter = (row) => setHovered(row);
  const handleMouseLeave = () => setHovered(null);

  return (
    <div className="scrolling-container">
      <div
        className="scrolling-row"
        ref={row1Ref}
        onMouseEnter={() => handleMouseEnter('row1')}
        onMouseLeave={handleMouseLeave}
      >
        {puppies.concat(puppies).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Puppy ${index}`}
            className={`scrolling-image ${hovered === 'row1' ? 'slow' : ''}`}
            onClick={() => setSelectedImage(img)}
            style={{ opacity: hovered === 'row1' ? 0.5 : 1 }}
          />
        ))}
      </div>
      <div
        className="scrolling-row"
        ref={row2Ref}
        onMouseEnter={() => handleMouseEnter('row2')}
        onMouseLeave={handleMouseLeave}
      >
        {kittens.concat(kittens).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Kitten ${index}`}
            className={`scrolling-image ${hovered === 'row2' ? 'slow' : ''}`}
            onClick={() => setSelectedImage(img)}
            style={{ opacity: hovered === 'row2' ? 0.5 : 1 }}
          />
        ))}
      </div>
      <div className="scrolling-row row3">
        <img
          src={selectedImage || puppies[0]}
          alt="Selected"
          className="single-image"
        />
      </div>
      <button onClick={togglePause}>{paused ? 'Play' : 'Pause'}</button>
    </div>
  );
};


export default InfiniteScroll;