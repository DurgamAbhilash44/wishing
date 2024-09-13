import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovingButton = () => {
    const [position, setPosition] = useState({ top: '50px', left: '50px' });
    const [showNoCursorButton, setShowNoCursorButton] = useState(false);

    const moveButton = () => {
        // Generate new random positions within the viewport
        const newTop = Math.floor(Math.random() * (window.innerHeight - 50)) + 'px';
        const newLeft = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';
        setPosition({ top: newTop, left: newLeft });
    };

    useEffect(() => {
        // Set a timer to show the "No Cursor" button after 20 seconds
        const timer = setTimeout(() => {
            setShowNoCursorButton(true);
        }, 20000);

        // Cleanup timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='flex justify-center items-center h-screen relative'>
            <div className='flex space-x-4'>
                <button
                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded absolute'
                    onClick={moveButton}
                    style={{
                        top: position.top,
                        left: position.left,
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Click me!
                </button>

                {showNoCursorButton && (
                    <Link to="/wishing" className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                        Click Me
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MovingButton;