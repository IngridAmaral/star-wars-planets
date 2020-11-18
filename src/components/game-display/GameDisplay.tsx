import React from 'react';
import { Planet } from '../../redux/types/planets';
import './GameDisplay.scss';

type GameDisplayProps = {
  planet: Planet;
};

const GameDisplay = ({ planet }: GameDisplayProps): JSX.Element => (
  <div className="game-container">{planet.name}</div>
);

export default GameDisplay;
