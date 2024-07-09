// src/pages/Projects.jsx
import React from 'react';
import '../CSS/Project.css';

const projectsData = [
  {
    title: 'Project One',
    description: 'This React application allows users to search for GitHub profiles, displaying detailed information in a visually appealing and responsive layout. The inclusion of day and night modes enhances the user experience, and the application handles errors gracefully.',
    linkDemo: 'https://github-user-profile-se4rch.netlify.app/',
    linkCode: 'https://github.com/Gulverda/Github-Profile-Searcher',
    backgroundImage: 'url(../src/assets/Github_Searcher.png)',
  },
  {
    title: 'The Planets',
    description: 'The Planets" is a GitHub-hosted web application project by Luka Gulverdashvili, focusing on showcasing information about planets in our solar system using React.js and emphasizing front-end development skills',
    linkDemo: 'https://the-plan3ts.netlify.app/',
    linkCode: 'https://github.com/Gulverda/The-Planets',
    backgroundImage: 'url(../src/assets/theplanets.png)',
  },
  {
    title: 'NFTs',
    description: 'NFTs is a GitHub repository managed by Luka Gulverdashvili, dedicated to exploring Non-Fungible Tokens (NFTs). The project likely involves development or research related to NFT technology, potentially using various tools and frameworks.',
    linkDemo: 'https://nft5.netlify.app/',
    linkCode: 'https://github.com/Gulverda/NFTs',
    // icon: (
    //   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
    //   </svg>
    // ),
    backgroundImage: 'url(../src/assets/nft.png)',
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
