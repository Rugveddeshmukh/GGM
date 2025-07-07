import React from 'react';
// import visionImg from '../Assets/IMG/vision.png'; // Uncomment if using image

const VisionPage = () => {
  return (
    <>
      <style>{`
        .vision-container {
          padding: 20px 20px;
          font-family: 'Montserrat', sans-serif;
          background-color: #f9f9f9;
          text-align: center;
        }

        .vision-title {
          font-size: 48px;
          font-weight: 800;
          color: #000;
          margin-bottom: 40px;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          justify-content: center;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
          text-align: left;
        }

        .vision-box {
          background-color: #fff;
          padding: 30px 25px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          font-size: 18px;
          line-height: 1.6;
          color: #333;
        }

        @media (max-width: 768px) {
          .vision-title {
            font-size: 36px;
          }

          .vision-box {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .vision-title {
            font-size: 28px;
          }

          .vision-box {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="vision-container">
        <h1 className="vision-title">Our Vision</h1>

        <div className="vision-grid">
          <div className="vision-box">
            At Glowingrowth Media, our vision is to illuminate brands with vibrant ideas, powerful storytelling,
            and strategic creativity. We believe in delivering purposeful impact — from branding and marketing
            to digital transformation and innovation.
          </div>
          <div className="vision-box">
            Our mission is to empower businesses with bold campaigns, data-driven results, and unforgettable
            experiences that connect deeply with their audience. We envision a world where creativity sparks growth —
            and we are here to lead that spark.
          </div>
        </div>

        {/* Optional Image Section */}
        {/*
        <div style={{ marginTop: '40px' }}>
          <img
            src={visionImg}
            alt="Our Vision"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '12px' }}
          />
        </div>
        */}
      </div>
    </>
  );
};

export default VisionPage;
