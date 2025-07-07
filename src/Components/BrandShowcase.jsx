import React, { useState } from 'react';

// Image Imports
import kitkatBg from '../Assets/IMG/Kitkat-bg.jpeg';
import kitkatImg from '../Assets/IMG/KITKAT.png';
import manipalBg from '../Assets/IMG/manipal-bg.png';
import manipalImg from '../Assets/IMG/manipal.jpg';
import lifestyleBg from '../Assets/IMG/Lifestylebg.jpg';
import lifestyleImg from '../Assets/IMG/Lifestyle.png';
import blrBg from '../Assets/IMG/bengaloroairbg.png';
import blrImg from '../Assets/IMG/Bengaloroair.png';
import mamaBg from '../Assets/IMG/mamaearthbg.jpg';
import mamaImg from '../Assets/IMG/Mamaearth.png';
import tataBg from '../Assets/IMG/Tatahealthbg.png';
import tataImg from '../Assets/IMG/TataHealth.png';
import pepperfryBg from '../Assets/IMG/pepperfrybg.jpg';
import pepperfryImg from '../Assets/IMG/Pepperfry.png';
import curefitBg from '../Assets/IMG/curefitbg.jpg';
import curefitImg from '../Assets/IMG/curefit.png';

const brandData = {
  KITKAT: {
    background: kitkatBg,
    poster: kitkatImg,
    title: 'Influencers Catch A Break',
  },
  'MANIPAL HOSPITALS': {
    background: manipalBg,
    poster: manipalImg,
    title: 'An ode to those who protect hope.',
  },
  LIFESTYLE: {
    background: lifestyleBg,
    poster: lifestyleImg,
    title: 'Dress up your Christmas elfs with your Lifestyle!',
  },
  'BENGALURU AIRPORT': {
    background: blrBg,
    poster: blrImg,
    title: 'Virtue fruits when you adopt a plant!',
  },
  MAMAEARTH: {
    background: mamaBg,
    poster: mamaImg,
    title: 'Goodness redefined in this digital era!',
  },
  'TATA HEALTH': {
    background: tataBg,
    poster: tataImg,
    title: 'Tailored made treatment plan, tailored made SEO.',
  },
  PEPPERFRY: {
    background: pepperfryBg,
    poster: pepperfryImg,
    title: 'Celebrate the Wow Womaniyas in your life!',
  },
  CUREFIT: {
    background: curefitBg,
    poster: curefitImg,
    title: 'Choose your treat, then burn them on repeat!',
  },
};

const BrandShowcase = () => {
  const brandNames = Object.keys(brandData);
  const [activeBrand, setActiveBrand] = useState(brandNames[0]);

  return (
    <>
      {/* Media queries */}
      <style>{`
        @media (max-width: 1024px) {
          .showcase-container {
            flex-direction: column;
            height: auto !important;
          }
          .left-section,
          .right-section {
            width: 100% !important;
            height: auto !important;
            
          }
          .brand-list li {
            font-size: 1.5rem !important;
          }
          .right-section img {
            width: 60% !important;
          }
        }
        @media (max-width: 600px) {
          .brand-list li {
            font-size: 1.1rem !important;
            margin: 0.5rem 0 !important;
            
          }
          .right-section h2 {
            font-size: 1.4rem !important;
          }
          .right-section p {
            font-size: 0.9rem !important;
          }
          .right-section img {
            width: 80% !important;
          }
        }
      `}</style>

      <div className="showcase-container" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        {/* Left Section */}
        <div
          className="left-section"
          style={{
            width: '50%',
            position: 'relative',
            backgroundImage: `url(${brandData[activeBrand].background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 1,
            }}
          ></div>

          {/* Brand List */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              padding: '2rem',
              color: 'white',
              boxSizing: 'border-box',
            }}
          >
            <ul className="brand-list" style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
              {brandNames.map((brand) => (
                <li
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '1rem 0',
                    cursor: 'pointer',
                    color: activeBrand === brand ? '#fff' : 'transparent',
                    WebkitTextStroke: '1px white',
                    transition: '0.3s ease',
                  }}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="right-section"
          style={{
            width: '50%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#fdd800', marginBottom: '1rem' }}>
            {activeBrand}
          </h2>
          <img
            src={brandData[activeBrand].poster}
            alt={activeBrand}
            style={{
              width: '50%',
              maxWidth: '400px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          />
          <p style={{ fontSize: '1rem', marginTop: '1rem' }}>{brandData[activeBrand].title}</p>
        </div>
      </div>
    </>
  );
};

export default BrandShowcase;
