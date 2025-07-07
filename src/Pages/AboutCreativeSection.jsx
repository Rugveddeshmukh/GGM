import React from "react";
import globeIcon from "../Assets/icon/customer1.png";
import sunIcon from "../Assets/icon/customer2.png";
import okIcon from "../Assets/icon/customer3.png";
import coffeeIcon from "../Assets/icon/customer4.png";

const CustomerCreativeSection = () => {
  return (
    <>
      {/* Responsive Media Queries */}
      <style>{`
        @media (max-width: 1024px) {
          .main-heading {
            font-size: 36px !important;
          }
          .sub-heading {
            font-size: 20px !important;
            padding: 0 1rem;
          }
          .para-text {
            font-size: 16px !important;
            padding: 0 1rem;
          }
          .card {
            width: 45% !important;
          }
          .highlight-text {
            font-size: 28px !important;
            text-align: center !important;
          }
        }

        @media (max-width: 600px) {
          .main-heading {
            font-size: 28px !important;
          }
          .sub-heading {
            font-size: 18px !important;
          }
          .para-text {
            font-size: 14px !important;
          }
          .card {
            width: 90% !important;
          }
          .highlight-text {
            font-size: 24px !important;
            text-align: center !important;
          }
        }
      `}</style>

      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <h1
          className="main-heading"
          style={{
            fontSize: "45px",
            fontWeight: "900",
            maxWidth: "900px",
            margin: "0 auto 30px auto",
            lineHeight: "1.4",
          }}
        >
          Customer Delight
        </h1>

        <h2
          className="sub-heading"
          style={{
            fontSize: "23px",
            fontWeight: "700",
            maxWidth: "700px",
            margin: "0 auto 20px auto",
            lineHeight: "1.4",
          }}
        >
          We make the customers orgasm when we lay out our ideas and creatives in front of them.
        </h2>

        <p
          className="para-text"
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            fontWeight: "500",
            margin: "0 auto 10px auto",
            lineHeight: "1.6",
          }}
        >
          At Social Panga, we are driven by a strong innate desire to delight the customer to an
          extent that they want to give us virtual hugs.
        </p>

        <p
          className="para-text"
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            fontWeight: "500",
            margin: "0 auto 10px auto",
            lineHeight: "1.6",
          }}
        >
          BTW, we live for occasional fatty foods, intoxicating liquids, and jalebis (yes, we’re a
          bunch of nice kids!)
        </p>

        {/* Card Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[globeIcon, sunIcon, okIcon, coffeeIcon].map((icon, index) => {
            const messages = [
              "We help you share your ideas with the world.",
              "We give you the resources best suited for your brand.",
              "We anticipate your needs better than you can.",
              "We make a mean cup of tea and our coffee is “mwah”.",
            ];

            return (
              <div
                key={index}
                className="card"
                style={{
                  backgroundColor: "#e2e2e2",
                  width: "220px",
                  padding: "30px 20px",
                  textAlign: "center",
                  height: "auto",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={icon}
                  alt={`icon-${index}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginBottom: "20px",
                  }}
                />
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "1.4",
                  }}
                >
                  {messages[index]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="highlight-text"
            style={{
              fontSize: "36px",
              fontWeight: "900",
              lineHeight: "1.4",
              position: "relative",
              display: "inline-block",
              padding: "0 10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#fdd800",
                position: "absolute",
                top: "0.4em",
                left: 0,
                right: 0,
                bottom: "0.2em",
                zIndex: 0,
                transform: "skew(-3deg)",
              }}
            ></div>
            <span
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              Redefining Rules,<br />without breaking them.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerCreativeSection;
