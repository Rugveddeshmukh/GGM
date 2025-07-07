import React, { useState } from 'react';

import gunHover from '../Assets/Banner/Marketing.webp';
import betterImg from '../Assets/Banner/better.jpeg';
import biggerImg from '../Assets/Banner/bigger.jpg';
import gunGif from '../Assets/Gif/gun (1).svg';
import glassGif from '../Assets/Gif/coffee-cup (1).svg';

const hoverImages = {
  marketing: gunHover,
  better: betterImg,
  bigger: biggerImg,
};

const Banner = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  return (
    <>
      {/* Responsive inline CSS using a style tag */}
      <style>{`
        @media (max-width: 1024px) {
          .banner-heading h1 {
            font-size: 2.5rem !important;
          }
          .banner-heading h2 {
            font-size: 2rem !important;
          }
          .hover-img {
            width: 220px !important;
          }
          .gun-icon {
            top: 20% !important;
            left: 5% !important;
            width: 60px !important;
          }
          .glass-icon {
            bottom: 8% !important;
            right: 5% !important;
            width: 60px !important;
          }
        }

        @media (max-width: 600px) {
          .banner-heading h1 {
            font-size: 1.6rem !important;
          }
          .banner-heading h2 {
            font-size: 1.4rem !important;
          }
          .hover-img {
            width: 180px !important;
          }
            .gun-icon {
            top: 20% !important;
            left: 40% !important;
            width: 60px !important;
          }
          .glass-icon {
            bottom: 15% !important;
            right: 40% !important;
            width: 60px !important;
          }
        }
      `}</style>

      <div
        style={{
          position: 'relative',
          backgroundColor: '#fdd800',
          color: '#000',
          minHeight: '68vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 1rem',
          textAlign: 'center',
          overflow: 'hidden',
        }}
        className="banner-heading"
      >
        {/* Static gun icon (left) */}
        <img
          src={gunGif}
          alt="gun"
          className="gun-icon"
          style={{
            position: 'absolute',
            top: '28%',
            left: '9%',
            width: '90px',
            zIndex: 1,
          }}
        />

        {/* Static glass icon (right bottom) */}
        <img
          src={glassGif}
          alt="glass"
          className="glass-icon"
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '90px',
            zIndex: 1,
          }}
        />

        {/* Main Text */}
        <h1 style={{ fontWeight: 400, fontSize: '3.5rem', margin: 0 }}>
          We Are{' '}
          <span
            style={{ fontWeight: 'bold', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredWord('marketing')}
            onMouseLeave={() => setHoveredWord(null)}
          >
            Marketing Mafias
          </span>
        </h1>

        <h1 style={{ fontWeight: 400, fontSize: '3rem', margin: 0 }}>
          Skilled enough to know{' '}
          <span
            style={{ fontWeight: 'bold', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredWord('better')}
            onMouseLeave={() => setHoveredWord(null)}
          >
            better
          </span>
        </h1>

        <h2 style={{ fontWeight: 400, fontSize: '2.6rem', margin: 0 }}>
          Wild enough to think{' '}
          <span
            style={{ fontWeight: 'bold', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredWord('bigger')}
            onMouseLeave={() => setHoveredWord(null)}
          >
            bigger!
          </span>
        </h2>

        {/* Hover Image */}
        {hoveredWord && (
          <img
            src={hoverImages[hoveredWord]}
            alt={hoveredWord}
            className="hover-img"
            style={{
              position: 'absolute',
              top: '20%',
              left:
                hoveredWord === 'marketing'
                  ? '15%'
                  : hoveredWord === 'better'
                  ? '50%'
                  : '85%',
              transform: 'translate(-50%, -50%)',
              width: '320px',
              maxWidth: '90vw',
              borderRadius: '12px',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.35)',
              transition: 'all 0.3s ease-in-out',
              zIndex: 10,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Banner;
