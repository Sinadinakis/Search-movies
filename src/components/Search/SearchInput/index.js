import React from 'react';
import PropTypes from 'prop-types';
// CSS
import './SearchInput.scss';

const SearchInput = ({ query, searchHandler}) => (
    <div>
        <p>Search Input</p>
        <input
            type="text"
            className="search-input"
            title="Movies"
            value={query}
            placeholder="Enter Movie title"
            onChange={searchHandler}
        />
    </div>
)

SearchInput.propTypes = {
    query: PropTypes.string,
    searchHandler: PropTypes.func,
}

export default SearchInput;