import React from 'react';
import './movieDate.css';

function MovieContent({movie}) {
    return (
        <div className={`date ${movie.active ? "active" : undefined}`}>
                    <h2>On {movie.date}</h2>
                </div>
        );
};

export default MovieContent