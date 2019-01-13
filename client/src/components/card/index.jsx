import React from 'react';

const Card = (props) => (
  <div className="card">
    <div className="card-title">
      {props.title || "no_title"}
    </div>
    <div className="card-content">
      <div className="card-content-question">
        {props.question || 'no_question'}
      </div>
      <div className="card-content-options">
        {props.options || 'no_options'}
      </div>
    </div>
  </div>
)

export default Card;