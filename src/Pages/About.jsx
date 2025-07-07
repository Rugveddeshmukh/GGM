import React from "react";
import { Link } from "react-router-dom";
import person1 from "../Assets/IMG/about-banner-spacing-1 (1).png";
import soundIcon from "../Assets/icon/speaker (1).svg";
import ArrowRightIcon from "../Assets/icon/arrow-right.svg";
import AboutCreativeSection from "../Pages/AboutCreativeSection";

const Mafia = () => {
  return (
    <>
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .mafia-heading {
            font-size: 40px !important;
          }
          .mafia-definition {
            font-size: 18px !important;
          }
          .mafia-paragraph {
            font-size: 15px !important;
            padding: 0 1rem;
          }
          .person-image {
            width: 100% !important;
            max-width: 90vw !important;
          }
          .arrow-btn {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        @media (max-width: 600px) {
          .mafia-heading {
            font-size: 32px !important;
          }
          .mafia-definition {
            font-size: 16px !important;
          }
          .mafia-paragraph {
            font-size: 14px !important;
            padding: 0 1rem;
          }
          .arrow-btn {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>

      {/* Yellow Section */}
      <section
        style={{
          backgroundColor: "#fdd800",
          textAlign: "center",
          padding: "30px 20px",
          color: "black",
          maxHeight:'632px'
        }}
      >
        <div>
          <img
            src={soundIcon}
            alt="Sound Icon"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>

        <div>
          <h1
            className="mafia-heading"
            style={{
              fontSize: "48px",
              margin: "0 0 10px 0",
              fontWeight: "700",
            }}
          >
            Mafia
          </h1>
          <p
            className="mafia-definition"
            style={{
              fontSize: "20px",
              margin: "0 0 20px 0",
              fontWeight: "600",
            }}
          >
            /'mæf.i.ə/
          </p>

          <p
            className="mafia-paragraph"
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              fontSize: "16px",
              lineHeight: "1.8",
              fontWeight: "700",
            }}
          >
            The quintessential villain who brings out the best in the hero and is the sole<br/>
            reason for his existence – the Joker to Batman, the Gabbar Singh to Thakur,<br/>
            the Darth Vader to Luke Skywalker. These are the guys and girls whose<br/>
            punchlines and schemes are remembered forever.
          </p>
        </div>

        {/* Person Image */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={person1}
            alt="Person"
            className="person-image"
            style={{
              width: "100%",
              maxWidth: "1200px",
              height: "auto",
            }}
          />
        </div>
      </section>

      {/* White Section */}
      <section
        style={{
          padding: "40px 20px",
          textAlign: "center",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "900",
            marginBottom: "30px",
          }}
          className="mafia-heading"
        >
          Plan, Create and Connect.
        </h1>

        <p
          className="mafia-paragraph"
          style={{
            fontSize: "19px",
            fontWeight: "500",
            maxWidth: "850px",
            margin: "0 auto 30px auto",
            lineHeight: "1.6",
          }}
        >
          We are an award-winning creative marketing and advertising agency. We ideate, curate and
          execute marketing strategies to engage with our clients’ intended audience, all while
          integrating their brand with the digital world.
        </p>

        <p
          className="mafia-paragraph"
          style={{
            fontSize: "18px",
            fontWeight: "500",
            maxWidth: "850px",
            margin: "0 auto 40px auto",
            lineHeight: "1.6",
          }}
        >
          We take thoughts for ideas and create remarkable moments. We are always well prepared – with
          a bunch of crazy people, endless cups of chai and beautiful hideouts in Bengaluru, Delhi and
          Mumbai.
        </p>

        {/* Arrow Button */}
        <div style={{ marginTop: "-20px" }}>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <div
              className="arrow-btn"
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#fdd800",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                cursor: "pointer",
                marginLeft: "80%",
              }}
            >
              <img
                src={ArrowRightIcon}
                alt="arrow"
                style={{ width: "26px", height: "26px" }}
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Creative Section */}
      <AboutCreativeSection />
    </>
  );
};

export default Mafia;
