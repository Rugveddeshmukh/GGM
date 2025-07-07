import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo/glowingrowth-logo.png';

import aboutIcon from '../Assets/icon/about-icon.svg';
import servicesIcon from '../Assets/icon/services-icon.svg';
import visionIcon from '../Assets/icon/career-icon.svg';
import portfolioIcon from '../Assets/icon/projects-icon.svg';
import clientIcon from '../Assets/icon/clients-icon.svg';
import contactIcon from '../Assets/icon/contact-icon.svg';
import blogIcon from '../Assets/icon/team-icon.svg';

const menuItems = [
  { label: 'ABOUT US', path: '/about', icon: aboutIcon },
  { label: 'SERVICES', path: '/services', icon: servicesIcon },
  { label: 'VISION', path: '/vision', icon: visionIcon },
  { label: 'PORTFOLIO', path: '/portfolio', icon: portfolioIcon },
  { label: 'CLIENTS', path: '/clients', icon: clientIcon },
  { label: 'BLOG', path: '/blog', icon: blogIcon },
  { label: 'CONTACT US', path: '/contact-us', icon: contactIcon },
];

const Header = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        backgroundColor: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        
      }}
    >
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="Logo" style={{ height: 40 }} />
      </Link>

      {/* Toggle button */}
      {isMobile && (
        <div onClick={toggleMenu} style={{ display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer' }}>
          <div style={{ width: 25, height: 3, backgroundColor: '#333', borderRadius: 2 }} />
          <div style={{ width: 25, height: 3, backgroundColor: '#333', borderRadius: 2 }} />
          <div style={{ width: 25, height: 3, backgroundColor: '#333', borderRadius: 2 }} />
        </div>
      )}

      {/* Navigation */}
      <nav
        style={{
          display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : '2rem',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '100%' : undefined,
          left: 0,
          backgroundColor: '#fff',
          width: isMobile ? '100%' : 'auto',
          padding: isMobile ? '1rem 2rem' : 0,
          boxShadow: isMobile ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isHovered = hovered === item.label;

          return (
            <Link
              key={item.label}
              to={item.path}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
              onClick={closeMenu}
              style={{
                textDecoration: 'none',
                color: '#000',
                textAlign: 'center',
                fontWeight: isActive ? '700' : '500',
                fontSize: '14px',
                position: 'relative',
                width: isMobile ? '100%' : 'auto',
                marginTop:'5%'
                
              }}
            >
              {(isActive || isHovered) && (
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    height: 40,
                    position: 'absolute',
                    top: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              )}
              <div style={{ padding: '0.5rem 0' }}>{item.label}</div>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
