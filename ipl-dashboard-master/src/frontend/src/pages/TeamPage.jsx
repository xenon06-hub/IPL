import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Link, useParams } from 'react-router-dom'; // Import Link here
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

import './TeamPage.css';

export const TeamPage = () => {
    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();

    useEffect(() => {
        const fetchTeam = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`); // Use dynamic teamName
            const data = await response.json();
            setTeam(data);
        };

        fetchTeam();
    }, [teamName]);

    if (!team || !team.teamName) {
        return <h1>Team not found</h1>;
    }

    // Calculate total matches, wins, and losses
    const totalMatches = team.totalMatches;
    const totalWins = team.totalWins;
    const totalLosses = totalMatches - totalWins;

    // Calculate percentages
    const winPercentage = totalMatches > 0 ? ((totalWins / totalMatches) * 100).toFixed(2) : 0;
    const lossPercentage = totalMatches > 0 ? ((totalLosses / totalMatches) * 100).toFixed(2) : 0;

    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                <h3>Wins / Losses</h3>
                <PieChart
                    data={[
                        { title: `Wins: ${winPercentage}%`, value: totalWins, color: '#4da375' },
                        { title: `Losses: ${lossPercentage}%`, value: totalLosses, color: '#a34d5d' },
                    ]}
                    // Add additional properties to customize the pie chart if needed
                    lineWidth={60}
                    label={({ dataEntry }) => `${dataEntry.title}`} // Show percentage labels on pie chart
                    labelStyle={{
                        fontSize: '5px',
                        fontFamily: 'sans-serif',
                    }}
                />
            </div>
            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
            </div>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/2020`}>More</Link>
            </div>
        </div>
    );
};
