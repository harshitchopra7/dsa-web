import React from 'react';
import './ArrayCard.css';

function ArrayCard({ number }) {
    return (
        <div className="arraycard">
            <p>{number}</p>
        </div>
    )
}

export default ArrayCard;
