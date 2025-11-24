import React, { useEffect, useRef, useState } from 'react';
import Engine from '../game/Engine';

const GameView = ({ onNavigate }) => {
    const canvasRef = useRef(null);
    const engineRef = useRef(null);
    const [hudState, setHudState] = useState({ speed: 0, time: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;

        // Initialize Engine
        const engine = new Engine(canvas, (data) => {
            setHudState(prev => ({ ...prev, ...data }));
        });
        engineRef.current = engine;

        engine.start();

        // Handle resize
        const handleResize = () => {
            engine.resize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        return () => {
            engine.stop();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="h-screen w-screen relative overflow-hidden bg-gray-900">
            <canvas ref={canvasRef} className="block" />

            {/* HUD Overlay */}
            <div className="absolute top-4 left-4 text-white font-mono select-none pointer-events-none">
                <div className="text-2xl font-bold drop-shadow-md">00:00.00</div>
                <div className="text-4xl text-yellow-400 font-black italic drop-shadow-md">
                    {hudState.speed} <span className="text-sm not-italic text-gray-300">KM/H</span>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 text-white/50 text-sm font-mono select-none pointer-events-none">
                WASD / ARROWS to Drive | SPACE to Drift
            </div>

            <button
                onClick={() => onNavigate('menu')}
                className="absolute top-4 right-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded text-white font-bold text-sm opacity-50 hover:opacity-100 transition-opacity z-50"
            >
                EXIT
            </button>
        </div>
    );
};

export default GameView;
