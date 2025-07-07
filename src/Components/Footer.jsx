import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import footerImg from '../Assets/Banner/footer-img.png';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#FECB00',
      color: '#000',
      padding: '60px 40px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      rowGap: '30px',
      fontFamily: 'sans-serif',
    },
    leftCol: {
      flex: '1 1 300px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
    },
    footerImg: {
      width: 130,
      height: 'auto',
      borderRadius: 8,
    },
    leftText: {
      fontSize: 16,
      lineHeight: 1.6,
      maxWidth: 200,
    },
    smile: {
      fontSize: 22,
      marginLeft: 4,
    },
    midCol: {
      flex: '1 1 300px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(120px, 1fr))',
      gap: '16px 40px',
    },
    link: {
      fontSize: 16,
      fontWeight: 600,
      color: '#000',
      textDecoration: 'none',
    },
    rightCol: {
      flex: '1 1 120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '16px',
    },
    icon: {
      color: '#000',
      fontSize: 22,
      cursor: 'pointer',
    },
    bottomText: {
      width: '100%',
      fontSize: 14,
      lineHeight: 1.6,
      textAlign: 'center',
      marginTop: 40,
    },
  };

  return (
    <>
      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
          }
          .left-col, .mid-col, .right-col {
            flex: 1 1 100% !important;
            align-items: center !important;
            text-align: center;     
          .left-col {
           flex-direction: column !important;
            gap: 10px !important;
          }
          .left-text {
            max-width: none !important;
          }
          .footer-img {
            margin: 0 auto !important;
          }
        }
      `}</style>

      <footer className="footer" style={styles.footer}>
        {/* Left Column */}
        <div className="left-col" style={styles.leftCol}>
          <img src={footerImg} alt="Say Hi" className="footer-img" style={styles.footerImg} />
          <div className="left-text" style={styles.leftText}>
            Congratulations for traveling from start to the end of this page!
            <br />
            We’ll add 10,000 steps to your fitness tracker!
            <span style={styles.smile}> 😊</span>
          </div>
        </div>

        {/* Middle Column */}
        <div className="mid-col" style={styles.midCol}>
          {[
            'About Us',
            'Services',
            'Vision',
            'Portfolio',
            'clients',
            'Blog',
            'Contact Us',
            'Privacy Policy',
          ].map((label) => (
            <a key={label} href="#" style={styles.link}>
              {label}
            </a>
          ))}
        </div>

        {/* Right Column */}
        <div className="right-col" style={styles.rightCol}>
          <FaInstagram style={styles.icon} />
          <FaTwitter style={styles.icon} />
          <FaFacebookF style={styles.icon} />
          <FaLinkedinIn style={styles.icon} />
        </div>

        {/* Bottom Text */}
        <div style={styles.bottomText}>
          Social Panga is an integrated social media and digital marketing agency in Bangalore, Mumbai, Delhi, and Dubai.
          With a team of over 350+ Mafias, we are<br /> an award‑winning full‑stack digital marketing agency in India offering
          creative and innovative solutions for brands looking to grow their businesses online.<br /> If you are reading this,
          then you’re on the right site to onboard one of the best creative marketing agencies in India.
        </div>
      </footer>
    </>
  );
};

export default Footer;
