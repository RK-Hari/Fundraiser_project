import React, { createContext, useContext } from 'react';

const MyContext = createContext('Terms and Condtions Apply (Use Context example)');

const ContextProvider = ({ children }) => {
  const contextValue = 'Terms and Conditions Apply';
  
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
const TermsAndConditions = () => {
  const contextValue = useContext(MyContext);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    marginTop:'20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const sectionHeadingStyle = {
    fontSize: '22px',
    marginTop: '15px',
    marginBottom: '10px',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Terms and Conditions for Fundraiser Participation</h1><br></br>
      <p>{contextValue}</p><br></br>
      <p style={paragraphStyle}>
        These terms and conditions govern your participation in the fundraiser. By participating, you agree to comply with
        and be bound by these terms.
      </p>

      <h2 style={sectionHeadingStyle}>1. Eligibility</h2>
      <p style={paragraphStyle}>
        To participate, you must meet the eligibility criteria outlined in this section. Any violation may result in
        disqualification.
      </p>
      <ul>
        <li style={listItemStyle}>Participants must be at least 18 years old.</li>
        <li style={listItemStyle}>Residents outside the specified regions are not eligible.</li>
      </ul>

      <h2 style={sectionHeadingStyle}>2. Fundraising Guidelines</h2>
      <p style={paragraphStyle}>
        Participants must adhere to the following fundraising guidelines to ensure a fair and respectful environment for
        all.
      </p>
      <ul>
        <li style={listItemStyle}>Respect the privacy of donors and fellow participants.</li>
        <li style={listItemStyle}>Do not engage in any fraudulent or misleading activities.</li>
      </ul>
      <h2 style={sectionHeadingStyle}>Changes to Terms</h2>
      <p style={paragraphStyle}>
        These terms and conditions may be subject to change. Participants will be notified of any updates.
      </p>

      <p>
        By participating in this fundraiser, you acknowledge that you have read, understood, and agree to abide by these
        terms and conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
