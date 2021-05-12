import React from 'react'
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';


const ResultsContainer = ({suggestedNames}) => {
    const suggestedNamesJsx = suggestedNames.map(suggestedName => {
        return <NameCard key = {suggestedName} suggestedName = {suggestedName} />;
        
    });
    return (
        
        <div className="results-container">
            <p>{suggestedNamesJsx}</p>
            {/* <p>{suggestedNames.length > 0 && suggestedNames[0] } </p> */}

        </div>
    )
}

export default ResultsContainer;
