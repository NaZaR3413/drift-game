import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import LevelSelect from './components/LevelSelect';
import Customize from './components/Customize';
import Settings from './components/Settings';
import GameView from './components/GameView';

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return <MainMenu onNavigate={setCurrentScreen} />;
      case 'levelSelect':
        return <LevelSelect onNavigate={setCurrentScreen} />;
      case 'customize':
        return <Customize onNavigate={setCurrentScreen} />;
      case 'settings':
        return <Settings onNavigate={setCurrentScreen} />;
      case 'game':
        return <GameView onNavigate={setCurrentScreen} />;
      default:
        return <MainMenu onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="font-sans antialiased">
      {renderScreen()}
    </div>
  );
}

export default App;
