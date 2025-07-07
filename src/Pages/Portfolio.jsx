import React, { useState, useEffect } from 'react';

// Image imports
import branding1 from '../Assets/work/branding1.png';
import branding2 from '../Assets/work/branding2.png';
import case1 from '../Assets/work/case1.jpg';
import case2 from '../Assets/work/case2.jpg';
import creative1 from '../Assets/work/Creative1.png';
import creative2 from '../Assets/work/creative2.png';
import performance1 from '../Assets/work/performance1.png';
import performance2 from '../Assets/work/performace2.png';
import production1 from '../Assets/work/production1.png';
import production2 from '../Assets/work/production2.png';
import uiux1 from '../Assets/work/UI1.png';
import uiux2 from '../Assets/work/UI2.png';

const tabs = [
  'ALL',
  'BRANDING',
  'CASE STUDIES',
  'CREATIVE HUB',
  'PERFORMANCE MARKETING',
  'PRODUCTION',
  'UI/UX',
];

const images = [
  { src: branding1, category: 'BRANDING' },
  { src: branding2, category: 'BRANDING' },
  { src: case1, category: 'CASE STUDIES' },
  { src: case2, category: 'CASE STUDIES' },
  { src: creative1, category: 'CREATIVE HUB' },
  { src: creative2, category: 'CREATIVE HUB' },
  { src: performance1, category: 'PERFORMANCE MARKETING' },
  { src: performance2, category: 'PERFORMANCE MARKETING' },
  { src: production1, category: 'PRODUCTION' },
  { src: production2, category: 'PRODUCTION' },
  { src: uiux1, category: 'UI/UX' },
  { src: uiux2, category: 'UI/UX' },
];

const BrandRaids = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const filteredImages =
    activeTab === 'ALL' ? images : images.filter((img) => img.category === activeTab);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive styles
  const isMobile = windowWidth < 600;
  const isTablet = windowWidth >= 600 && windowWidth < 1024;

  return (
    <div
      style={{
        padding: isMobile ? '30px 16px' : isTablet ? '40px 30px' : '50px 80px',
        maxWidth: '1400px',
        margin: '0 auto',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: isMobile ? '36px' : '48px',
              fontWeight: '800',
              margin: 0,
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            Our Brand<br />Raids
          </h1>
        </div>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: isMobile ? '15px' : '18px',
              lineHeight: 1.6,
              color: '#030200',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            The Mafias love to talk about their conquests over a freshly
            brewed pitcher of beer. Client satisfaction is significant to
            them, as they strive for nothing short of creative excellence.
            Here are a few smart goals that were set and smashed successfully.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: isMobile ? '10px' : '20px',
          marginTop: '40px',
          borderBottom: '2px solid #eee',
          paddingBottom: '10px',
          justifyContent: isMobile ? 'center' : 'flex-start',
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: isMobile ? '14px' : '16px',
              borderBottom: activeTab === tab ? '3px solid red' : 'none',
              color: activeTab === tab ? '#000' : '#555',
              paddingBottom: '5px',
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Image Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : isTablet
            ? 'repeat(2, 1fr)'
            : 'repeat(4, 1fr)',
          gap: '30px',
          marginTop: '40px',
        }}
      >
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: '#f3f3f3',
              padding: '10px',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={img.src}
              alt={img.category}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '6px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandRaids;
