import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Moon from './moon';
import Mars from './Mars';
import Europa from './europa';
import Titan from './titan';
import '../App.css';
import NavDestination from '../components/ui/navdestination';

import moonImage from '../assets/destination/image-moon.png';
import marsImage from '../assets/destination/image-mars.png';
import europaImage from '../assets/destination/image-europa.png';
import titanImage from '../assets/destination/image-titan.png';

const Destination = () => {
  const [imageSrc, setImageSrc] = useState(moonImage);
  const location = useLocation();

  const loadImage = (section: string) => {
    switch (section) {
      case 'moon':
        setImageSrc(moonImage);
        break;
      case 'mars':
        setImageSrc(marsImage);
        break;
      case 'europa':
        setImageSrc(europaImage);
        break;
      case 'titan':
        setImageSrc(titanImage);
        break;
      default:
        setImageSrc(moonImage);
        break;
    }
  };

  useEffect(() => {
    const currentPath = location.pathname.split('/')[2];
    loadImage(currentPath);
  }, [location]);

  return (
    <div className='destination-page'>
      <div className='top-left'>
      <h1 className="title">
          <span className="title-number">01</span> PICK YOUR DESTINATION
        </h1>
      </div>
       <div className="container">
        <div className='content'>
          <div className='image-container'>
            <img src={imageSrc} alt="destination" className="destination-image" />
          </div>
          <div className='text-content'>
            <div className='secondary-nav'>
              <NavDestination />
            </div>
            <div className='routes-container'>
              <Routes>
                <Route path="moon" element={<Moon />} />
                <Route path="mars" element={<Mars />} />
                <Route path="europa" element={<Europa />} />
                <Route path="titan" element={<Titan />} />
                <Route path="/" element={<Moon />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;


