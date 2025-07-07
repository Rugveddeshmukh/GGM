import React from 'react';
import mafia1 from '../Assets/IMG/infoxbox-ico1.png';
import mafia2 from '../Assets/IMG/infoxbox-ico2.png';
import mafia3 from '../Assets/IMG/infoxbox-ico3.png';

const ContactPitchCards = () => {
  return (
    <>
      <style>{`
        .pitch-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding: 60px 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .pitch-card {
          position: relative;
          border-radius: 40px 0 0 0;
          color: #fff;
          padding: 30px 20px;
          text-align: left;
          flex: 1 1 280px;
          max-width: 270px;
          min-height: 360px;
        }

        .pitch-red {
          background-color: #c52026;
        }

        .pitch-blue {
          background-color: #006db7;
        }

        .pitch-purple {
          background-color: #5f259f;
        }

        .pitch-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .pitch-subtext {
          font-size: 16px;
          font-weight: 400;
        }

        .pitch-image {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: auto;
        }

        @media (max-width: 768px) {
          .pitch-container {
            padding: 40px 15px;g
          }

          .pitch-card {
            max-width: 100%;
            min-height: 300px;
          }

          .pitch-title {
            font-size: 18px;
          }

          .pitch-subtext {
            font-size: 15px;
          }

          .pitch-image {
            width: 130px;
          }
        }

        @media (max-width: 480px) {
          .pitch-title {
            font-size: 16px;
          }

          .pitch-subtext {
            font-size: 14px;
          }

          .pitch-image {
            width: 110px;
          }
        }
      `}</style>

      <div className="pitch-container">
        {/* Card 1 */}
        <div className="pitch-card pitch-red">
          <div className="pitch-title">
            Looking to become the<br />
            next big name everyone’s talking about?
          </div>
          <div className="pitch-subtext">Request a proposal.</div>
          <img src={mafia1} alt="Mafia 1" className="pitch-image" />
        </div>

        {/* Card 2 */}
        <div className="pitch-card pitch-blue">
          <div className="pitch-title">
            Fear of missing out on<br />
            the chance to do your life’s greatest work?
          </div>
          <div className="pitch-subtext">Join our team of Mafias.</div>
          <img src={mafia2} alt="Mafia 2" className="pitch-image" />
        </div>

        {/* Card 3 */}
        <div className="pitch-card pitch-purple">
          <div className="pitch-title">
            Excited about the wonderful world of<br />
            digital storytelling?
          </div>
          <div className="pitch-subtext">Sign up for our newsletter.</div>
          <img src={mafia3} alt="Mafia 3" className="pitch-image" />
        </div>
      </div>
    </>
  );
};

export default ContactPitchCards;
