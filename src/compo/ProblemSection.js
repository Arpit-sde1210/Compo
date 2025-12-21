import React from 'react';
import './ProblemSection.css';

const ProblemSection = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <h2 className="problem-title">Getting feedback takes too long</h2>
        <p className="problem-subtitle">
          Right now, testing your designs means:
        </p>

        <ul className="problem-list">
          <li>Scheduling calls with busy users</li>
          <li>Watching them share their screen and use the prototype</li>
          <li>Taking notes while they try to explain what’s wrong</li>
        </ul>

        <p className="problem-desc">
          By the time you have spoken to a few people, the sprint is almost over
          and major usability issues remain hidden until after launch.
        </p>

        <p className="problem-desc">
          The process is slow and unscalable. Each call takes 20 to 30 minutes,
          scheduling is a hassle, and users rarely have the time and you can only
          test with a handful of people.
        </p>

        <p className="problem-final">There’s an easier way.</p>
      </div>
    </section>
  );
};

export default ProblemSection;
