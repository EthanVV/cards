import React from 'react';

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-content-question">
          {props.content.question || 'no_question'}
        </div>
      </div>
      <form>
        <input type="text" name = "answer" />
      </form>
    </div>
  );
}
export default Card;