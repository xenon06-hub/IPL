import { React } from 'react';
import { Link } from 'react-router-dom';

import './YearSelector.css';

export const YearSelector = ({teamName}) => {
    
    let years = [];
    const startYear = '2008';
    const endYear ='2020';

    for (let i = startYear; i <= endYear; i++ ) {
        years.push(i);
    }


    return (
        <ol className="YearSelector">
        { years.map(year => (
            <li key={year}>
                <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
            </li>
        )) }
        </ol>
    )

}
