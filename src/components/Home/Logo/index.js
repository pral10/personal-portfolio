import React, { useEffect, useRef } from 'react';
import LogoS from '../../../assets/images/logo-p.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef(null);
  const solidLogoRef = useRef(null);

  useEffect(() => {
    // Perform animations or transitions using CSS or React Spring here
    // Example:
    if (bgRef.current) {
      bgRef.current.style.opacity = 1;
    }

    if (solidLogoRef.current) {
      solidLogoRef.current.style.opacity = 1;
    }
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="S"
        style={{ opacity: 0 }} // Initially hide the image
      />
    </div>
  );
};

export default Logo;
