import React, { useState } from 'react';
import { debounce } from 'lodash';

// CSS
import './searchBar.scss';

// Components
import { fetchData } from '../../services/fetchData';
import ResultList from '../ResultList';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState({});
    const [dataList, setDataList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const onChange = ({ target: { value } }) => {
        setQuery(value);

        const search = debounce(fetchQuery, 300);

        setSearchQuery(prevSearch => {
            if (prevSearch.cancel) {
                prevSearch.cancel();
            }
            return search;
        });

        if(value) {
            search(value);
        } else {
            setDataList([]);
            setErrorMsg('');
        }
    }

    const fetchQuery = async value => {
        const { cancelPrevQuery, result } = await fetchData(value);

        if(cancelPrevQuery) return;
        if( result.Response === 'True') {
            setDataList(result.Search);
            setErrorMsg('')
        } else {
            setDataList([]);
            setErrorMsg(result.Error);
        }

    }

    return (
        <>
            <div>
                <p>Search Input</p>
                <input
                    type="text"
                    className="SearchBar"
                    title="Movies"
                    value={query}
                    placeholder="Enter Movie title"
                    onChange={onChange}
                />
            </div>

            <div>
                <ResultList movies={dataList} />
                {errorMsg}
            </div>
        </>
    );
}

export default SearchBar;