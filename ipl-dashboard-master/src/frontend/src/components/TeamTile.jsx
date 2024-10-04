import { React } from 'react';
import { Link } from 'react-router-dom';

import './TeamTile.css';
export const TeamTile = ({teamName}) => {

    const backgroundImageStyle = {
        backgroundImage: `url('/src/images/${teamName}.png')`,
        backgroundSize: 'cover',  // Ensures the image covers the entire tile
        backgroundPosition: 'center', // Center the image
        height: '200px', // Adjust height as needed
        display: 'flex', // Flexbox for centering content
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        position:'relative'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        zIndex: 1,
    };

    const textStyle = {
        color: '#fff', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
        fontSize: '24px', // Adjust font size as needed
        fontWeight: 'bold', // Make the text bold
        zIndex: 2, // Ensure the text is above the overlay
    };
    return (
        <div className="TeamTile" style={backgroundImageStyle}>
            <div style={overlayStyle}></div>
            <h1 style={textStyle}>
                <Link to={`/teams/${teamName}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {teamName}
                </Link>
            </h1>
        </div>
    )
}