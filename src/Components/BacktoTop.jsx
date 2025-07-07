import React, { useEffect, useState } from 'react';
import upArrowIcon from '../Assets/icon/arrow-up.svg';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1000,
    display: visible ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    transition: 'opacity 0.3s ease',
  };

  return (
    <button onClick={scrollToTop} style={buttonStyle} title="Back to Top">
      <img
        src={upArrowIcon}
        alt="Back to Top"
        style={{
          width: '22px',
          height: '22px',
          objectFit: 'contain',
        }}
      />
    </button>
  );
};

export default BackToTop;
