import React from 'react';
import './ProblemSection.css';

const ProblemSection = () => {
  const problems = [
    "Scheduling calls with busy users",
    "Watching them share their screen and use the prototype",
    "Taking notes while they try to explain what's wrong"
  ];

  return (
    <section className="frame-1116601162 problem-section">
      <div className="frame-1116600978 problem-container">
        <div className="frame-1116601145 problem-content">
          {/* Title */}
          <div className="frame-1116601147 problem-header">
            <h2 className="problem-title">Getting feedback takes too long</h2>
            <p className="problem-subtitle">Right now, testing your designs means:</p>
          </div>
          
          {/* Problem List */}
          <div className="frame-1116601146 problem-list">
            {problems.map((problem, index) => (
              <React.Fragment key={index}>
                <div className={`problem-item frame-11166011${48 + index}`}>
                  <div className="frame-1116601159 dot-container">
                    <div className="ellipse-15 white-dot"></div>
                  </div>
                  <span className="problem-text">{problem}</span>
                </div>
                
                {/* Add line separator except for last item */}
                {index < problems.length - 1 && (
                  <div className={`line-separator frame-11166011${51 + index}`}>
                    <div className="line-61"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Description Paragraphs */}
          <div className="frame-1116601160 problem-description">
            <p className="description-paragraph">
              By the time you have spoken to a few people, the sprint is almost over and major usability issues remain hidden until after launch.
            </p>
            <p className="description-paragraph">
              The process is slow and unscalable. Each call takes 20 to 30 minutes, scheduling is a hassle, and users rarely have the time and you can only test with a handful of people.
            </p>
            <p className="description-paragraph final-line">
              There's an easier way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;