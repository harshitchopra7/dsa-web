import React from 'react';
import './Array.css';
import ArrayCard from './ArrayCard';
import { arrayData } from './arrayData';

function Array() {
    return (
        <div className="array">
            <div className="array_align">
                {arrayData.map((arrayData) => (
                    <ArrayCard number={arrayData.number} />
                ))}
            </div>
            
        </div>
    )
}

export default Array;
