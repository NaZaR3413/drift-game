import React from 'react';

const LevelSelect = ({ onNavigate }) => {
    const levels = [
        { id: 1, name: 'Training Ground', locked: false },
        { id: 2, name: 'Neon City', locked: true },
        { id: 3, name: 'Mountain Pass', locked: true },
        { id: 4, name: 'Desert Canyon', locked: true },
    ];

    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-white relative">
            <h2 className="text-4xl font-bold mb-8 italic text-yellow-400">SELECT LEVEL</h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
                {levels.map((level) => (
                    <button
                        key={level.id}
                        disabled={level.locked}
                        onClick={() => !level.locked && onNavigate('game')}
                        className={`w-48 h-32 rounded-lg border-2 flex flex-col items-center justify-center transition-all transform hover:scale-105
              ${level.locked
                                ? 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'
                                : 'border-yellow-500 bg-gray-800 hover:bg-gray-700 text-white cursor-pointer shadow-[0_0_10px_rgba(234,179,8,0.3)]'
                            }`}
                    >
                        <span className="text-2xl font-bold">{level.id}</span>
                        <span className="text-sm mt-2">{level.name}</span>
                        {level.locked && <span className="text-xs mt-1 text-red-500">LOCKED</span>}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white font-bold"
            >
                BACK
            </button>
        </div>
    );
};

export default LevelSelect;
