import React from 'react';
import { Planet } from '../../redux/types/planets';
import './GameDisplay.scss';

type GameDisplayProps = {
  planet: Planet;
};

const GameDisplay = ({ planet }: GameDisplayProps): JSX.Element => (
  <div className="game-container">
    <span className="text-discover">{planet.name}</span>
  </div>
);

export default GameDisplay;
