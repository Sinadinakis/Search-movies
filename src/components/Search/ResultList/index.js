import React from 'react';
import PropTypes from 'prop-types';
// CSS
import './ResuultList.scss'

// UI
import Card from '../../UI/Card';

const ResultList = ({ movies }) => {
    return (
        <div>
            <ul className="result-list">
                {movies && movies.map(item => (
                    <Card
                        key={item.imdbID}
                        imageUrl={item.Poster}
                        title={item.Title}
                        type={item.Type}
                    />
                ))}
            </ul>
        </div>
    )
}

ResultList.propTypes = {
    movies: PropTypes.array
}

export default ResultList;