import React, { useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';
import './HomePage.css';

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchAllTeams = async () => {
            try {
                // Ensure you are using the correct environment variable
                const response = await fetch(`http://localhost:8080/team`);

                // Check if the response is okay
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched teams:', data); // Log the fetched data
                setTeams(data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };

        fetchAllTeams();
    }, []);

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name"> IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                {teams.length > 0 ? (
                    teams.map(team => <TeamTile key={team.id} teamName={team.teamName} />)
                ) : (
                    <p>No teams available</p>
                )}
            </div>
        </div>
    );
};
