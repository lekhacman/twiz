import React from 'react';
import PropTypes from 'prop-types';

export function Circle({ percentage, color, text }) {
  return (
    <svg viewBox="0 0 36 36">
      <path
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeDasharray={`${percentage}, 100`}
      />
      <text x="18" y="25" className="center" fill={color}>
        {text}
      </text>
    </svg>
  );
}

Circle.propTypes = {
  color: PropTypes.string,
  percentage: PropTypes.number,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
