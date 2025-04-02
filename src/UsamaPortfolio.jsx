import React from 'react';

export default function UsamaPortfolio() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Usama Marfani</h1>
      <p>Graduate Business Analyst | MSc Business Analytics</p>

      <section>
        <h2>About Me</h2>
        <p>
          I’m a data-driven Business Analytics graduate with hands-on experience in business analysis,
          stakeholder engagement, and developing insight-driven solutions using Python, SQL, Power BI, and Tableau.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><b>EV Sentiment Analysis:</b> Python + Tableau to extract and visualize public opinions.</li>
          <li><b>Price Comparison App:</b> MSSQL + Python + API integration for UK supermarkets.</li>
          <li><b>Flood Risk Mapping:</b> Excel + Python for socio-economic impact forecasting.</li>
          <li><b>Breast Cancer App:</b> TensorFlow + Firebase for medical image classification.</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li><b>Marfani Steels:</b> Data analysis and forecasting using Excel and dashboards.</li>
          <li><b>Microsoft Student Ambassador:</b> Delivered workshops and supported peer learning.</li>
          <li><b>Tesco Café:</b> Gained customer service and teamwork skills.</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: usama.marfani11@gmail.com</p>
        <p>Phone: +44 7398 958202</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/usama-marfani-93baa11a3/">View Profile</a></p>
      </section>
    </div>
  );
}
