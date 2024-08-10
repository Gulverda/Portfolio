// src/pages/Projects.jsx
import React from 'react';
import '../CSS/Project.css';

const projectsData = [
  {
    title: 'Project One',
    description: 'This React application allows users to search for GitHub profiles, displaying detailed information in a visually appealing and responsive layout. The inclusion of day and night modes enhances the user experience, and the application handles errors gracefully.',
    linkDemo: 'https://github-user-profile-se4rch.netlify.app/',
    linkCode: 'https://github.com/Gulverda/Github-Profile-Searcher',
    backgroundImage: 'url(/assets/Github_Searcher.png)', // Updated path
  },
  {
    title: 'The Planets',
    description: 'The Planets" is a GitHub-hosted web application project by Luka Gulverdashvili, focusing on showcasing information about planets in our solar system using React.js and emphasizing front-end development skills',
    linkDemo: 'https://the-plan3ts.netlify.app/',
    linkCode: 'https://github.com/Gulverda/The-Planets',
    backgroundImage: 'url(/assets/theplanets.png)', // Updated path
  },
  {
    title: 'NFTs',
    description: 'NFTs is a GitHub repository managed by Luka Gulverdashvili, dedicated to exploring Non-Fungible Tokens (NFTs). The project likely involves development or research related to NFT technology, potentially using various tools and frameworks.',
    linkDemo: 'https://nft5.netlify.app/',
    linkCode: 'https://github.com/Gulverda/NFTs',
    backgroundImage: 'url(/assets/nft.png)', // Updated path
  },
];



const ProjectCard = ({ project }) => (
<div className="card" style={{ backgroundImage: project.backgroundImage }}>
{project.icon}
    <div className="card__content">
      <p className="card__title">{project.title}</p>
      <p className="card__description">{project.description}</p>
        <div className="flex_for_button" style={{display: "flex"}}>
        <a href={project.linkDemo} target="_blank" rel="noopener noreferrer">
        <button className="card__button">Live Demo</button>
      </a>
      <a href={project.linkCode} target="_blank" rel="noopener noreferrer">
  <button className="card__button1">
    <span className="bracket left">{"{"}</span>
    <span className="text_for_button">Code</span>
    <span className="bracket right">{"}"}</span>
  </button>
</a>
        </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>Here are some of my projects...</p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
