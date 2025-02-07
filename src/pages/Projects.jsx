import '../CSS/Project.css';
import PropTypes from 'prop-types';

import htmlIcon from '../../public/assets/icons/html.svg';
import cssIcon from '../../public/assets/icons/css.svg';
import jsIcon from '../../public/assets/icons/js.svg';
import tsIcon from '../../public/assets/icons/ts.svg';
import tailwindIcon from '../../public/assets/icons/tailwind.svg';
import reactIcon from '../../public/assets/icons/react.svg';
import phpIcon from '../../public/assets/icons/php.svg';
import sqlIcon from '../../public/assets/icons/sql.svg';
import nodeIcon from '../../public/assets/icons/node.svg';
import expressIcon from '../../public/assets/icons/express.svg';
import mongoIcon from '../../public/assets/icons/mongodb.svg'; 
import angularIcon from '../../public/assets/icons/angularLine.svg';

const projectsData = [
  {
    title: 'Tip Calculator',
    description: 'This is an application that can distribute/calculate existing tax to multiple people as a percentage. Also useful for calculating and apportioning bank charge interest.',
    linkDemo: 'https://gulverda.github.io/Tip-Calculator/',
    linkCode: 'https://github.com/Gulverda/Tip-Calculator',
    backgroundImage: 'url(/assets/tip_calculator.png)', 
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon
    ],
  },
  {
    title: 'GitHub Profile Searcher',
    description: 'This React application allows users to search for GitHub profiles, displaying detailed information in a visually appealing and responsive layout. The inclusion of day and night modes enhances the user experience, and the application handles errors gracefully.',
    linkDemo: 'https://github-user-profile-se4rch.netlify.app/',
    linkCode: 'https://github.com/Gulverda/Github-Profile-Searcher',
    backgroundImage: 'url(/assets/Github_Searcher.png)', 
    technologies: [
      tsIcon,
      tailwindIcon
    ],
  },
  {
    title: 'IP Address Tracker',
    description: 'This project is an IP Address Tracker built with React and Leaflet. It allows users to enter an IP address or domain and view its location, timezone, and ISP details. The app features an interactive map with custom markers and uses the Geo API for location data, all with responsive design for different devices.',
    linkCode: 'https://github.com/Gulverda/IP-Address-Tracker',
    linkDemo: 'https://ip-address-tracker-omega-seven.vercel.app/',
    backgroundImage: 'url(/assets/ipTracker.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon
    ],
  },
  {
    title: 'Password Generator',
    description: 'Pass3ord Generator is an easy-to-use web tool for creating strong, random passwords. Users can customize the length and complexity, ensuring secure passwords for their online accounts. The app features a clean, responsive design for both desktop and mobile devices.',
    linkCode: 'https://github.com/Gulverda/Random-Pass-Gen',
    linkDemo: 'https://pass3ordgenerator.netlify.app/',
    backgroundImage: 'url(/assets/passGen.png)',
    technologies: [
      htmlIcon,
      tailwindIcon,
      tsIcon,
      reactIcon
    ],
  },
  {
    title: 'Snake Game',
    description: 'The Snake Game is a classic arcade game where you guide a growing snake to eat food while avoiding walls and its tail. The goal is to score as high as possible by eating without crashing.',
    linkDemo: 'https://main--unrivaled-biscotti-c03aa7.netlify.app/',
    linkCode: 'https://github.com/Gulverda/Snake',
    backgroundImage: 'url(/assets/snake.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon
    ],
  },
  {
    title: 'Travel Web',
    description: 'Travel Web is a sleek and modern landing page designed to inspire travel. It features stunning visuals, a responsive layout, and a clean design to captivate users and encourage exploration.',
    linkDemo: 'https://gulverda.github.io/Travel-Web/',
    linkCode: 'https://github.com/Gulverda/Travel-Web?tab=readme-ov-file',
    backgroundImage: 'url(/assets/travel.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon
    ],
  },
  {
    title: 'The Planets',
    description: 'The Planets is a GitHub-hosted web application project by Luka Gulverdashvili, focusing on showcasing information about planets in our solar system using React.js and emphasizing front-end development skills',
    linkDemo: 'https://the-plan3ts.netlify.app/',
    linkCode: 'https://github.com/Gulverda/The-Planets',
    backgroundImage: 'url(/assets/theplanets.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon
    ],
  },
  {
    title: 'NFTs',
    description: 'NFTs is a GitHub repository managed by Luka Gulverdashvili, dedicated to exploring Non-Fungible Tokens (NFTs). The project likely involves development or research related to NFT technology, potentially using various tools and frameworks.',
    linkDemo: 'https://nft5.netlify.app/',
    linkCode: 'https://github.com/Gulverda/NFTs',
    backgroundImage: 'url(/assets/nft.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon
    ],
  },
  {
    title: 'Gree',
    description: 'This is an informational website about conditioners and cooling systems, featuring filters and detailed information on various products.',
    linkDemo: 'https://gree-react.vercel.app/',
    linkCode: 'https://github.com/duda-el/gree-react',
    backgroundImage: 'url(/assets/gree.png)',
    technologies: [
      cssIcon,
      jsIcon,
      reactIcon
    ],
  },
  {
    title: 'E-Commerce Website',
    description: 'This e-commerce website features a fully functional cart, user registration and sign-in, item addition, and filtering capabilities. Users can browse and filter products, add items to their cart, and place orders. The ordering process is available without payment integration.',
    linkCode: 'https://github.com/Gulverda/E-Commerce', 
    backgroundImage: 'url(/assets/ecommerce.png)',
    technologies: [
      sqlIcon,
      phpIcon,
      cssIcon,
      jsIcon,
    ],
  },
  {
    title: 'Task Management',
    description: 'TaskFlow is a powerful and intuitive task management app designed to help you stay organized and boost productivity. Whether you are managing personal tasks or team projects, TaskFlow provides a seamless experience with real-time updates, drag-and-drop task management, and a user-friendly interface.',
    linkCode: 'https://github.com/Gulverda/Task_Management_Board_Klipy/tree/main/client',
    linkDemo: 'https://task-management-board-klipy-seven.vercel.app',
    backgroundImage: 'url(/assets/taskmanager.png)',
    technologies: [
      mongoIcon,
      expressIcon,
      reactIcon,
      nodeIcon,
    ],
  },
  {
    title: 'Positivus',
    description: 'Positivus is a dynamic React.js website designed to deliver a seamless user experience. This project features a clean, responsive design, showcasing modern web development practices and interactive elements for an engaging interface.',
    linkCode: 'https://github.com/Gulverda/Positivus',
    linkDemo: 'https://positivus-nine.vercel.app/',
    backgroundImage: 'url(/assets/positivus.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon
    ],
  },
  {
    title: 'Car Rental',
    description: 'This project is a car rental website built using React.js. The website features a user-friendly interface, allowing users to browse available cars, view details, and make reservations. The project showcases front-end development skills and modern web design practices.',
    linkCode: 'https://github.com/Gulverda/CarRental',
    linkDemo: 'https://car-rental-theta-orcin.vercel.app/',
    backgroundImage: 'url(/assets/carRental.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon,
      reactIcon
    ],
  },
  {
    title: 'Estatein Agency',
    description: 'EstateIn is a modern and user-friendly Angular-based real estate application designed to simplify the process of finding, listing, and managing properties. Whether you\'re a homeowner, a buyer, or a real estate agent, the platform provides seamless solutions to connect you with the right opportunities.',
    linkCode: 'https://github.com/Gulverda/Estatein-Angular',
    linkDemo: 'https://estatein-angular.vercel.app/',
    backgroundImage: 'url(/assets/estatein.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      tsIcon,
      angularIcon
    ],
  },
  {
    title: 'PayNety',
    description: 'PayNety.com is an online platform that offers secure and efficient solutions for managing financial transactions. It serves as a modern payment gateway for businesses and individuals, providing reliable digital payment and billing services.',
    linkCode: '', 
    linkDemo: 'https://paynety.com/',
    backgroundImage: 'url(/assets/paynety.png)',
    technologies: [
      htmlIcon,
      cssIcon,
      jsIcon
    ],
  },
  {
    title: 'NewsPortal',
    description: 'The Full-Stack Blog Web App is a platform for creating and sharing content. It features an intuitive interface for bloggers to publish posts and a seamless experience for readers. Built with modern technologies, it combines a user-friendly front end with a powerful back end.',
    linkCode: 'https://github.com/Gulverda/FullStack_BlogWeb',
    linkDemo: 'https://fullstack-blogweb.onrender.com/',
    backgroundImage: 'url(/assets/blog.png)',
    technologies: [
      mongoIcon,
      expressIcon,
      reactIcon,
      nodeIcon,
    ],
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
    <div className="used_technologies">
    {project.technologies.map((tech, index) => (
        <img 
          key={index} 
          className="tech-icon" 
          src={tech} 
          alt={`technology-${index}`} 
          width="24" 
          height="24"
        />
      ))}
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
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Projects;