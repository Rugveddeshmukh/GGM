import React, { useState } from 'react';

// GIF & Static Image Imports
import gif1 from '../Assets/Gif/01service.gif';
import gif2 from '../Assets/Gif/02service.gif';
import gif3 from '../Assets/Gif/03service.gif';
import gif4 from '../Assets/Gif/04service.gif';
import gif5 from '../Assets/Gif/05service.gif';
import gif6 from '../Assets/Gif/06service.gif';
import gif7 from '../Assets/Gif/07service.gif';
import gif8 from '../Assets/Gif/08service.gif';
import gif9 from '../Assets/Gif/09service.gif';

import static1 from '../Assets/Gif/01-service-static.png';
import static2 from '../Assets/Gif/02-service-static.png';
import static3 from '../Assets/Gif/03-service-static.png';
import static4 from '../Assets/Gif/04-service-static.png';
import static5 from '../Assets/Gif/05-service-static.png';
import static6 from '../Assets/Gif/06-service-static.png';
import static7 from '../Assets/Gif/07-service-static.png';
import static8 from '../Assets/Gif/08-service-static.png';
import static9 from '../Assets/Gif/09-service-static.png';

const ServicesSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const services = [
    {
      title: 'Creative & Digital Strategy',
      text: <>We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.</>,
      gif: gif1,
      static: static1,
      reverse: false,
    },
    {
      title: 'Media Planning & Buying',
      text: <>We help you profitably define your marketing goals with our expertise in media planning and buying.</>,
      gif: gif2,
      static: static2,
      reverse: true,
    },
    {
      title: 'Analytics & SEO',
      text: <>The P in Panga stands for performance and our SEO and Analytics team delivers it with appropriate insights that have the ability to transform your business.</>,
      gif: gif3,
      static: static3,
      reverse: false,
    },
    {
      title: 'Branding & Marketing Communications',
      text: <>When we say we give your brand a VOICE we mean – V : Versatile, O : Omnipotent, I : Impressional, C : Captivating, E : Empowered way of branding and communicating your business.</>,
      gif: gif4,
      static: static4,
      reverse: true,
    },
    {
      title: 'Mobile & Website UI/UX',
      text: <>From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers.</>,
      gif: gif5,
      static: static5,
      reverse: false,
    },
    {
      title: 'Influencer Management',
      text: <>To make your idea come to life, we dive into a pool of talent and find the right influencer(s) for the task in hand.</>,
      gif: gif6,
      static: static6,
      reverse: true,
    },
    {
      title: 'Video Production',
      text: <>A perfect storyline is incomplete without the right set of shots taken from the perfect angles.</>,
      gif: gif7,
      static: static7,
      reverse: false,
    },
    {
      title: 'Consulting Services',
      text: <>We do a thorough research and integrate industry insights with internet trends to give you the best advice.</>,
      gif: gif8,
      static: static8,
      reverse: true,
    },
    {
      title: 'Technology',
      text: <>Only unrealistic aspect of us using technology is the experience we create for you outside our daily lives using the best of tech and tools.</>,
      gif: gif9,
      static: static9,
      reverse: false,
    },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .services-section {
            padding: 40px 20px !important;
          }
          .services-title {
            font-size: 44px !important;
            text-align: center !important;
          }
          .services-description {
            font-size: 16px !important;
            margin: 20px auto 0 auto !important;
            text-align: center !important;
          }
          .services-header {
            flex-direction: column !important;
            align-items: center !important;
          }
          .service-card {
            flex-direction: column !important;
            gap: 30px !important;
            text-align: center !important;
          }
          .service-textbox {
            padding: 0 !important;
          }
          .service-gifbox {
            justify-content: center !important;
            padding: 0 !important;
          }
        }

        @media (max-width: 600px) {
          .services-title {
            font-size: 34px !important;
          }
          .service-subheading {
            font-size: 22px !important;
          }
          .service-text {
            font-size: 15px !important;
          }
        }
      `}</style>

      <section
        className="services-section"
        style={{
          padding: '50px 100px',
          backgroundColor: '#fff',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        {/* Header */}
        <div
          className="services-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '50px',
          }}
        >
          <h1
            className="services-title"
            style={{
              marginTop: '30px',
              fontSize: '60px',
              fontWeight: 700,
              margin: 0,
              flex: 1,
            }}
          >
            <span>Our</span>
            <br />
            <span>Services</span>
          </h1>

          <p
            className="services-description"
            style={{
              flex: 2,
              fontSize: '18px',
              lineHeight: 1.6,
              marginLeft: '28%',
              color: '#333',
            }}
          >
            We help businesses reach their full potential by creating a brand identity that is
            authentic and reflective of them. We understand that every brand comes with its own
            unique challenges, and hence requires expertise. We join hands with you as your growth
            partners and focus on delivering a power-packed panga each time!
          </p>
        </div>

        {/* Cards */}
        {services.map((svc, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              marginBottom: '80px',
              flexDirection: svc.reverse ? 'row-reverse' : 'row',
            }}
          >
            <div className="service-textbox" style={{ flex: 1, padding: '0 20px' }}>
              <h2
                className="service-subheading"
                style={{ fontSize: '28px', fontWeight: 700, marginBottom: '15px' }}
              >
                {svc.title.split(' & ').map((part, idx) => (
                  <React.Fragment key={idx}>
                    {part}
                    {idx === 0 && svc.title.includes('&') ? ' & ' : ''}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
              <p className="service-text" style={{ fontSize: '18px', color: '#333', lineHeight: 1.6 }}>
                {svc.text}
              </p>
            </div>

            <div
              className="service-gifbox"
              style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '0 20px' }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img
                src={hoverIndex === index ? svc.gif : svc.static}
                alt={svc.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesSection;
