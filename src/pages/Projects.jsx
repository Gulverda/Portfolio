// src/pages/Projects.jsx
import '../CSS/Project.css';
import PropTypes from 'prop-types';

const projectsData = [
  {
    title: 'GitHub Profile Searcher',
    description: 'This React application allows users to search for GitHub profiles, displaying detailed information in a visually appealing and responsive layout. The inclusion of day and night modes enhances the user experience, and the application handles errors gracefully.',
    linkDemo: 'https://github-user-profile-se4rch.netlify.app/',
    linkCode: 'https://github.com/Gulverda/Github-Profile-Searcher',
    backgroundImage: 'url(/assets/Github_Searcher.png)', // Must match exactly with the file name
  },
  {
    title: 'The Planets',
    description: 'The Planets" is a GitHub-hosted web application project by Luka Gulverdashvili, focusing on showcasing information about planets in our solar system using React.js and emphasizing front-end development skills',
    linkDemo: 'https://the-plan3ts.netlify.app/',
    linkCode: 'https://github.com/Gulverda/The-Planets',
    backgroundImage: 'url(/assets/theplanets.png)', // Must match exactly with the file name
  },
  {
    title: 'NFTs',
    description: 'NFTs is a GitHub repository managed by Luka Gulverdashvili, dedicated to exploring Non-Fungible Tokens (NFTs). The project likely involves development or research related to NFT technology, potentially using various tools and frameworks.',
    linkDemo: 'https://nft5.netlify.app/',
    linkCode: 'https://github.com/Gulverda/NFTs',
    backgroundImage: 'url(/assets/nft.png)', // Must match exactly with the file name
  },
  {
    title: 'Gree',
    description: 'This is an informational website about conditioners and cooling systems, featuring filters and detailed information on various products.',
    linkDemo: 'https://gree-react.vercel.app/',
    linkCode: 'https://github.com/duda-el/gree-react',
    backgroundImage: 'url(/assets/gree.png)', // Add the corresponding image file
  },
  {
    title: 'E-Commerce Website',
    description: 'This e-commerce website features a fully functional cart, user registration and sign-in, item addition, and filtering capabilities. Users can browse and filter products, add items to their cart, and place orders. The ordering process is available without payment integration.',
    linkCode: 'https://github.com/Gulverda/E-Commerce', // Replace with your actual GitHub repo link
    backgroundImage: 'url(/assets/ecommerce.png)', // Make sure this image is available in your assets
  },
  {
    title: 'Positivus',
    description: 'Positivus is a dynamic React.js website designed to deliver a seamless user experience. This project features a clean, responsive design, showcasing modern web development practices and interactive elements for an engaging interface.',
    linkCode: 'https://github.com/Gulverda/Positivus',
    linkDemo: 'https://positivus-nine.vercel.app/',
    backgroundImage: 'url(/assets/positivus.png)',
  },
  {
    title: 'Car Rental',
    description: 'This project is a car rental website built using React.js. The website features a user-friendly interface, allowing users to browse available cars, view details, and make reservations. The project showcases front-end development skills and modern web design practices.',
    linkCode: 'https://github.com/Gulverda/CarRental',
    linkDemo: 'https://car-rental-theta-orcin.vercel.app/',
    backgroundImage: 'url(/assets/carRental.png)',
  },
  {
    title: 'Estatein Agency',
    description: 'EstateIn is a modern and user-friendly Angular-based real estate application designed to simplify the process of finding, listing, and managing properties. Whether you\'re a homeowner, a buyer, or a real estate agent, the platform provides seamless solutions to connect you with the right opportunities.',
    linkCode: 'https://github.com/Gulverda/Estatein-Angular',
    linkDemo: 'https://estatein-angular.vercel.app/',
    backgroundImage: 'url(/assets/estatein.png)',
  },
  {
    title: 'PayNety',
    description: 'PayNety.com is an innovative online platform offering a seamless and secure way to manage financial transactions for businesses and individuals. As a modern payment gateway, PayNety.com is dedicated to providing reliable, efficient, and user-friendly solutions for digital payments, billing, and financial management.',
    linkCode: '', 
    linkDemo: 'https://paynety.com/',
    backgroundImage: 'url(/assets/paynety.png)',
  },
  {
    title: 'NewsPortal',
    description: 'The Full-Stack Blog Web App is a modern, feature-rich platform designed for creating, sharing, and engaging with content. Built using cutting-edge technologies, the app delivers a seamless user experience for bloggers and readers alike. From intuitive interfaces to powerful back-end functionalities, it empowers users to share their stories, ideas, and knowledge effortlessly.',
    linkCode: 'https://github.com/Gulverda/FullStack_BlogWeb',
    linkDemo: 'https://fullstack-blogweb.onrender.com/',
    backgroundImage: 'url(/assets/blog.png)',
  }
];




const ProjectCard = ({ project }) => (
<div className="card" style={{ backgroundImage: project.backgroundImage }}>
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
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkDemo: PropTypes.string,
    linkCode: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projects;