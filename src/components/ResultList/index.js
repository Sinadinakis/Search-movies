import React from 'react';
import './resultList.scss'

const ResultList = ({ movies }) => {
    return (
        <ul className="resultList">
            {movies && movies.map((movie, index ) => (
                <li key="index">{movie.Title}</li>
            ))}
        </ul>
    )
}

export default ResultList;