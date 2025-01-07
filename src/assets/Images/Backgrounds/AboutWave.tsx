import React from 'react';

const AboutWave: React.FC = () => {
  return (
    <svg
      className="svg-curve absolute top-0 left-0 -translate-y-full z-0"
      viewBox="0 0 1440 79"
    >

      {/* Colored section on the other side */}
    <path
      d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79H1440V79H0V79Z"
      fill="white"
      filter="url(#shadow)"
    ></path>

      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="black" />
        </filter>
      </defs>
    </svg>
  );
};

export default AboutWave;