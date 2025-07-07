import React from 'react';

const ContactSection = () => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '115vh',
      overflow: 'hidden',
      fontFamily: 'Montserrat, sans-serif',
    },
    mapBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      border: 0,
    },
    formContainer: {
      position: 'absolute',
      top: '50%',
      left: '38%',
      transform: 'translate(-50%, -50%)',
      background: '#fdd800',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0,0,0,0.2)',
      zIndex: 1,
      width: '90%',
      maxWidth: '420px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '10px',
      lineHeight: 1.3,
      textAlign: 'center',
    },
    subheading: {
      fontSize: '14px',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: 500,
    },
    input: {
      width: '94%',
      padding: '12px',
      fontSize: '14px',
      border: '2px solid #000',
      backgroundColor: 'transparent',
      marginBottom: '10px',
      
    },
    formRow: {
      display: 'flex',
      gap: '10px',
      marginBottom: '10px',
      flexWrap: 'wrap',
    },
    textArea: {
      width: '94%',
      height: '100px',
      padding: '12px',
      fontSize: '14px',
      border: '2px solid #000',
      backgroundColor: 'transparent',
      marginBottom: '10px',
      
      
    },
    submitButton: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      color: '#000',
      fontSize: '20px',
      border: 'none',
      cursor: 'pointer',
      alignSelf: 'flex-end',
      margin: '0 auto',
      display: 'block',
      marginLeft: '80%',
    },
    bottomContact: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '16px',
      fontWeight: '500',
      borderTop: '1px solid #000',
      paddingTop: '15px',
      marginTop: '10px',
      flexWrap: 'wrap',
      gap: '10px',
    },
    addressBox: {
      position: 'absolute',
      top: '20%',
      left: '62%',
      backgroundColor: '#fdd800',
      padding: '20px',
      width: '300px',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '1.6',
      zIndex: 1,
    },
    cityList: {
      position: 'absolute',
      top: '25%',
      right: '4%',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: 1,
    },
    cityButton: (active = false) => ({
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: active ? '#fdd800' : '#d3d3d3',
      color: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '700',
      fontSize: '14px',
      cursor: 'pointer',
    }),
  };

  return (
    <>
      {/* Responsive Styles */}
      <style>{`
        input,
          textarea {
          color: #000 !important;
        }

          input::placeholder,
          textarea::placeholder {
          color: #000 !important;
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          .formContainer {
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          .addressBox {
            top: auto !important;
            bottom: 10px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 90% !important;
            font-size: 13px !important;
          }
          .cityList {
            display: none !important;
          }
          .bottomContact {
            flex-direction: column !important;
            text-align: center !important;
            gap: 15px !important;
          }
        }

        @media (max-width: 600px) {
          .formContainer {
            padding: 20px !important;
          }
          .submitButton {
            width: 60px !important;
            height: 60px !important;
            font-size: 18px !important;
            margin-left: 70% !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Google Map */}
        <iframe
          title="Map"
          style={styles.mapBackground}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9415658880216!2d73.82171677470716!3d18.48630587022093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5d06e1adff%3A0xe7e81686bd242d5b!2sGlowingrowth%20Media%20(%20GGM%20)!5e0!3m2!1sen!2sin!4v1751694426954!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>

        {/* Contact Form */}
        <div style={styles.formContainer} className="formContainer">
          <h2 style={styles.heading}>Aapke Ek Ek Sawal<br />Humaare Do Do Jawab</h2>
          <p style={styles.subheading}>Write to us — let's talk goals, ideas, and strategy.</p>

          <input type="text" placeholder="Name*" style={styles.input} />
          <div style={styles.formRow}>
            <input type="email" placeholder="Email*" style={{ ...styles.input, flex: 1 }} />
            <input type="text" placeholder="Phone*" style={{ ...styles.input, flex: 1 }} />
          </div>
          <textarea placeholder="How can we help?" style={styles.textArea}></textarea>
          <button style={styles.submitButton} className="submitButton">➜</button>

          {/* Bottom Info */}
          <div style={styles.bottomContact} className="bottomContact">
            <div>
              <strong>Business Enquiries</strong><br />
              hello@socialpanga.com
            </div>
            <div>
              <strong>Career Opportunities</strong><br />
              coffee@socialpanga.com
            </div>
          </div>
        </div>

        {/* Address Box */}
        <div style={styles.addressBox} className="addressBox">
          <strong>
            602, D Wing, Swami Chaya Apartments, Lane, DP Rd, opp. Sainath Khanawal, Sridhar Colony, Karvenagar, Pune, Maharashtra 411052
          </strong>
        </div>

        {/* City Circle */}
        <div style={styles.cityList} className="cityList">
          <div style={styles.cityButton(true)}>IND</div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
