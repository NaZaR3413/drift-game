import React from 'react';

const Customize = ({ onNavigate }) => {
    return (
        <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-8 italic text-blue-400">GARAGE</h2>

            <div className="w-96 h-64 bg-gray-800 rounded-lg border-2 border-gray-700 flex items-center justify-center mb-8">
                <p className="text-gray-500">Car Preview (Coming Soon)</p>
            </div>

            <div className="flex space-x-4 mb-8">
                <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">Body Color</button>
                <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Wheels</button>
                <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Decals</button>
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

export default Customize;
