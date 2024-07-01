import React from 'react';
import '../../CSS/TimeLine.css'; // Assuming you have a CSS file for styling

const Timeline = () => {
  return (
    <div className="timeline">
      <ul>
        <li>
          <span>3rd January 2020</span>
          <div className="content">
            <h3>What Is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </li>
        <li>
          <span>21st Jun 2019</span>
          <div className="content">
            <h3>What Is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </li>
        <li>
          <span>15th April 2018</span>
          <div className="content">
            <h3>What Is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </li>
        <li>
          <span>22nd Mars 2017</span>
          <div className="content">
            <h3>What Is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Timeline;
