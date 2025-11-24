import React from 'react';

const Settings = ({ onNavigate }) => {
    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-8 italic text-gray-400">SETTINGS</h2>

            <div className="space-y-6 w-80 mb-8">
                <div className="flex justify-between items-center">
                    <span>Master Volume</span>
                    <input type="range" className="w-40" />
                </div>
                <div className="flex justify-between items-center">
                    <span>SFX Volume</span>
                    <input type="range" className="w-40" />
                </div>
                <div className="flex justify-between items-center">
                    <span>Show FPS</span>
                    <input type="checkbox" className="w-6 h-6" />
                </div>
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

export default Settings;
