import React, { useEffect, useState } from 'react';

const MainMenu = ({ onNavigate }) => {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden font-exo scanline">
            {/* Retro 3D Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(188,19,254,0.1)_2%,rgba(188,19,254,0.5)_50%,rgba(188,19,254,0.1)_98%,transparent_100%)] bg-[size:100%_100px] animate-[scanline_4s_linear_infinite]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100%] perspective-1000 transform-gpu rotate-x-60 scale-150 origin-bottom"></div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-neon-pink/20 rounded-full animate-pulse blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 border border-neon-cyan/20 rounded-full animate-pulse blur-xl animation-delay-2000"></div>
            <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-neon-green/30"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-neon-green/30"></div>

            {/* Stylized Drift Car Graphic (CSS Composition) */}
            <div className="absolute right-[10%] bottom-[20%] opacity-20 transform -skew-x-12 scale-150 pointer-events-none hidden lg:block">
                <div className="w-64 h-24 bg-gradient-to-r from-transparent via-neon-pink to-transparent skew-x-12 blur-sm"></div>
                <div className="w-48 h-12 bg-neon-cyan mt-2 ml-8 blur-md"></div>
                <div className="w-full h-1 bg-white mt-4"></div>
            </div>

            {/* Vignette (Lighter) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)] pointer-events-none"></div>

            {/* HUD Elements */}
            <div className="absolute top-8 left-8 text-neon-cyan font-mono text-sm tracking-widest border border-neon-cyan/30 p-2 bg-black/50 backdrop-blur-sm z-20">
                <div>SYS.STATUS: ONLINE</div>
                <div>CPU: 100%</div>
                <div>MEM: OK</div>
            </div>

            <div className="absolute top-8 right-8 text-neon-pink font-mono text-sm tracking-widest border border-neon-pink/30 p-2 bg-black/50 backdrop-blur-sm text-right z-20">
                <div>SCORE: 000000</div>
                <div>HIGH: 999999</div>
            </div>

            {/* Main Content */}
            <div className="z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 relative h-full">

                {/* Title Section */}
                <div className="relative group mb-24 transform hover:scale-105 transition-transform duration-500">
                    <h1 className={`text-7xl md:text-9xl font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 transform -skew-x-12 font-russo text-shadow-cyan ${glitch ? 'translate-x-1' : ''}`}>
                        DRIFT<br />MASTER
                    </h1>
                    <h1 className={`absolute top-0 left-0 text-7xl md:text-9xl font-black tracking-tighter italic text-neon-pink opacity-50 mix-blend-screen transform -skew-x-12 font-russo translate-x-1 translate-y-1 ${glitch ? '-translate-x-2' : ''}`}>
                        DRIFT<br />MASTER
                    </h1>
                    <h1 className={`absolute top-0 left-0 text-7xl md:text-9xl font-black tracking-tighter italic text-neon-cyan opacity-50 mix-blend-screen transform -skew-x-12 font-russo -translate-x-1 -translate-y-1 ${glitch ? 'translate-x-2' : ''}`}>
                        DRIFT<br />MASTER
                    </h1>
                </div>

                {/* Menu Buttons */}
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
                    <ArcadeButton
                        onClick={() => onNavigate('levelSelect')}
                        label="INSERT COIN"
                        subLabel="PLAY GAME"
                        color="neon-green"
                        primary
                    />
                    <ArcadeButton
                        onClick={() => onNavigate('customize')}
                        label="GARAGE"
                        subLabel="CUSTOMIZE"
                        color="neon-cyan"
                    />
                    <ArcadeButton
                        onClick={() => onNavigate('settings')}
                        label="SYSTEM"
                        subLabel="SETTINGS"
                        color="neon-pink"
                    />
                </div>
            </div>

            {/* Footer HUD */}
            <div className="absolute bottom-8 w-full px-8 flex justify-between items-end text-xs text-gray-500 font-mono uppercase tracking-widest pointer-events-none z-20">
                <div className="flex flex-col items-start">
                    <div className="w-32 h-1 bg-gray-800 mb-1"><div className="w-2/3 h-full bg-neon-green animate-pulse"></div></div>
                    <span>SERVER: US-EAST-1 [STABLE]</span>
                </div>
                <div className="text-right">
                    <div>v0.1.0 ALPHA</div>
                    <div>BUILD: 2025.11.23</div>
                </div>
            </div>
        </div>
    );
};

const ArcadeButton = ({ onClick, label, subLabel, color, primary }) => {
    const colorClasses = {
        'neon-green': 'border-neon-green text-neon-green hover:bg-neon-green hover:text-black hover:shadow-neon-green',
        'neon-cyan': 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-neon-cyan',
        'neon-pink': 'border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black hover:shadow-neon-pink',
    };

    return (
        <button
            onClick={onClick}
            className={`
                relative px-8 py-6 w-64 font-bold tracking-widest uppercase transition-all duration-200 transform hover:scale-110 hover:-skew-x-6 -skew-x-3
                bg-black/80 border-2 backdrop-blur-md group
                ${colorClasses[color]}
                ${primary ? 'animate-pulse hover:animate-none shadow-[0_0_15px_rgba(0,255,0,0.3)]' : ''}
            `}
        >
            <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">{label}</span>
                <span className="text-xs opacity-70 font-mono">{subLabel}</span>
            </div>

            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${primary ? 'border-white' : 'border-transparent group-hover:border-white'} transition-colors`}></div>
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${primary ? 'border-white' : 'border-transparent group-hover:border-white'} transition-colors`}></div>
        </button>
    );
};

export default MainMenu;
