import React from 'react';

const MainMenu = ({ onNavigate }) => {
    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-80"></div>

            <div className="z-10 text-center space-y-8">
                <h1 className="text-6xl font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 drop-shadow-lg transform -skew-x-12">
                    DRIFT MASTER
                </h1>

                <div className="flex flex-col space-y-4 w-64 mx-auto">
                    <button
                        onClick={() => onNavigate('levelSelect')}
                        className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all transform hover:scale-105 hover:-skew-x-6"
                    >
                        PLAY
                    </button>

                    <button
                        onClick={() => onNavigate('customize')}
                        className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded border border-gray-600 hover:border-gray-500 transition-all transform hover:scale-105 hover:-skew-x-6"
                    >
                        CUSTOMIZE
                    </button>

                    <button
                        onClick={() => onNavigate('settings')}
                        className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded border border-gray-600 hover:border-gray-500 transition-all transform hover:scale-105 hover:-skew-x-6"
                    >
                        SETTINGS
                    </button>
                </div>
            </div>

            <div className="absolute bottom-4 text-gray-500 text-sm">
                v0.1.0 Alpha
            </div>
        </div>
    );
};

export default MainMenu;
