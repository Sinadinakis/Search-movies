import React from 'react';
import './resultList.scss'

import LikeButton from '../LikeButton';

const ResultList = ({ movies }) => {
    return (
        <ul className="resultList">
            {movies && movies.map((movie, index ) => (
                <li key={`title-${index}`}>
                    {movie.Title}
                    <LikeButton />
                </li>
            ))}
        </ul>
    )
}

export default ResultList;