import React  from "react";
import './main_page.css';
import Tile from "./Tile.tsx";

interface MainPageProps {
  className?: string;
}
const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className="grid-container">
      <Tile size="large" color="#FF6F61">Tile 1 (Large)</Tile>
      <Tile size="medium" color="#6B5B95">Tile 2 (Medium)</Tile>
      <Tile size="small" color="#88B04B">Tile 3 (Small)</Tile>
      <Tile size="medium" color="#F7CAC9">Tile 4 (Medium)</Tile>
      <Tile size="large" color="#92A8D1">Tile 5 (Large)</Tile>
      <Tile size="small" color="#955251">Tile 6 (Small)</Tile>
    </div>
)
  ;
}

export default MainPage;