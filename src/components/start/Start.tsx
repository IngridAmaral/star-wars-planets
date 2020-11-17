import React from 'react';
import './Start.scss';

const Start = (): JSX.Element => (
  <div className="start-container">
    <img
      className="star-wars"
      src="https://pbs.twimg.com/profile_images/1167221863103074305/Ziap6jxO.png"
      alt="star wars"
    />
    <span className="text-discover">DISCOVER EVERYTHING ABOUT THE PLANETS</span>
  </div>
);

export default Start;
