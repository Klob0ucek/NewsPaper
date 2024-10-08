import React from 'react';
import './tile.css';

interface TileProps {
  size: 'small' | 'medium' | 'large';
  color: string;
  className?: string;
  children?: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ size, children, color }) => {
  return (
    <div className={`tile ${size}`} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Tile;