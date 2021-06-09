import React, { useState } from 'react';
import './App.css';
import { Circle } from './Circle';
import PropTypes from 'prop-types';

function App({ maxChars, http }) {
  const [state, setState] = useState({
    content: '',
    percentage: 0,
    color: 'green',
    txt: '',
  });

  function tweet(event) {
    event.preventDefault();
    http.post('/tweet', { tweet: state.content });
  }

  function handleChange(event) {
    event.preventDefault();
    const content = event.target.value;
    const percentage = (content.length * 100) / maxChars;
    let txt = maxChars - content.length;
    const color = (function () {
      if (percentage < 80) {
        txt = '';
        return 'green';
      } else if (percentage <= 100) {
        return 'orange';
      } else {
        return 'HotPink';
      }
    })();

    setState({
      content,
      percentage,
      color,
      txt,
    });
  }

  return (
    <div className="container">
      <h1>Twiz</h1>
      <form onSubmit={tweet}>
        <div className="form-group">
          <textarea
            name="tweet"
            cols="30"
            rows="10"
            value={state.content}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Tweet</button>
        </div>
      </form>
      <div className="circle">
        <Circle
          percentage={state.percentage}
          text={state.txt}
          color={state.color}
        />
      </div>
    </div>
  );
}

export default App;

App.propTypes = {
  maxChars: PropTypes.number,
  http: PropTypes.any,
};
