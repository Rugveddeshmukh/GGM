import React from 'react';

// Import logos
import trends from '../Assets/client/rtrends-logo.png';
import centro from '../Assets/client/rcentro-logo.png';
import freshmenu from '../Assets/client/fresh-menu-logo.png';
import naukri from '../Assets/client/naukri-logo.png';
import flipkart from '../Assets/client/flipkart.png';
import zepto from '../Assets/client/zepto.png';
import maggi from '../Assets/client/maggi-1.png';
import wildcraft from '../Assets/client/wildcraft-1.png';
import wipro from '../Assets/client/wipro-1.png';
import homecredit from '../Assets/client/homecredit.png';
import rivela from '../Assets/client/rivela.png';
import tally from '../Assets/client/tally.png';

const clients = [
  trends, centro, freshmenu, naukri,
  flipkart, zepto, maggi, wildcraft,
  wipro, homecredit, rivela, tally,
];

const ClientSection = () => {
  const sectionStyle = {
    padding: '30px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
  };

  const headingStyle = {
    fontSize: '45px',
    fontWeight: '800',
    marginBottom: '40px',
  };

  const heartStyle = {
    color: '#fbc02d',
  };

  const logoContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
  };

  const getLogoStyle = () => ({
    maxWidth: '140px',
    maxHeight: '80px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  });

  // Responsive adjustments using window width
  const windowWidth = window.innerWidth;
  const logoSize = () => {
    if (windowWidth <= 600) {
      return { maxWidth: '90px', maxHeight: '50px' };
    } else if (windowWidth <= 1024) {
      return { maxWidth: '110px', maxHeight: '60px' };
    } else {
      return { maxWidth: '140px', maxHeight: '80px' };
    }
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>
        Our Clients <span style={heartStyle}>❤️</span>
      </h2>

      <div style={logoContainerStyle}>
        {clients.map((logo, index) => (
          <div key={index}>
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              style={{ ...getLogoStyle(), ...logoSize() }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
