import React from 'react';
import '../../CSS/SkillSet.css'; // Assuming you have a CSS file for styling

const SkillSet = () => {
  return (
    <div className="skill-set">
      <h2>Skill Set</h2>
      <div className="skills">
        <div className="skill">
          <div className="skill-icon">
            <i className="fas fa-code"></i> {/* Replace with your icon */}
          </div>
          <div className="skill-details">
            <h3>Programming Languages</h3>
            <p>JavaScript, Python, Java</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon">
            <i className="fas fa-laptop-code"></i> {/* Replace with your icon */}
          </div>
          <div className="skill-details">
            <h3>Frameworks & Libraries</h3>
            <p>React, Node.js, Django</p>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon">
            <i className="fas fa-paint-brush"></i> {/* Replace with your icon */}
          </div>
          <div className="skill-details">
            <h3>Design Tools</h3>
            <p>Photoshop, Figma, CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
