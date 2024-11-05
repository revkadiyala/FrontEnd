import React, { useState } from 'react';
import './index.css';

function Profile() {
  const [showDetails, setShowDetails] = useState(false); 
  const [projects] = useState([
    {
      title: 'GCS Compliance system',
      image: require('./images/PepsiCo_logo.svg.png'),
      description: 'Create more smiles with every sip and every bitey',
      link: 'https://www.pepsico.com/'
    },
    {
      title: 'Aspen Colour Interiors',
      image: require('./images/aspen_logo.png'),
      description: 'WELCOME TO ASPEN COLOURS INTERIORS Aspen Colours Interiors is an high-end architecture and luxury interior design company in Hyderabad. We afford a complete tailored service that covers each and every aspect of your project',
      link: 'https://aspeninteriors.in/index.php'
    },
    {
      title: 'Microsoft Azure',
      image: require('./images/Azure.png'),
      description: 'The best ideas need the best AI platform',
      link: 'https://azure.microsoft.com/en-us'
    }
  ]);

  const Details = () => {
    setShowDetails(!showDetails); 
  };

  return (
    <div className="container">
      <header className="header">
        <img src={require('./images/profile.jpeg')} alt="Profile" />
        <h1>Revanth Kadiyala</h1>
        <button onClick={Details}>Read More</button> 
      </header>

      {showDetails && ( 
        <section className="details">
          <p>Hello! I'm Revanth Kadiyala, have More than 2 years of experience as .NET Developer. Expert at spotting system defects and navigating programming languages. Passion for quality user support and client-side web development.NET Developer with over 2 years of coding experience. Proven skills in application development and system configuration. Frequently acknowledged for friendly customer service.Hardworking and passionate job seeker with strong organizational skills eager to secure position. Ready to help team
achieve company goals.Expertise in Web application development using C#, ASP.NET MVC and ADO.NET, HTML5 in .Net Framework 3.5, 4.0, 4.5
</p>
        </section>
      )}

      <section className="projects">
        <h2>Highlighted Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
              <a href={project.link}>project link</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h2>Connect with me!!!</h2>
        <ul className="social-links">
          <li><a href="https://www.example.com/email"><i className="fas fa-envelope"></i></a></li>
          <li><a href="https://www.github.com/git"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/home"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://twitter.com/twitter"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Profile;
