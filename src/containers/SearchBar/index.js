import React, { useState } from 'react';
import { debounce } from 'lodash';

// Components
import { fetchData } from '../../services/fetchData';
import ResultList from '../../components/Search/ResultList';
import SearchInput from '../../components/Search/SearchInput';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [searchQuery, setSearchQuery] = useState({});
    const [dataList, setDataList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchHandler = ({ target: { value } }) => {
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
            <SearchInput query={query} searchHandler={searchHandler} /> 
            <ResultList movies={dataList} />
            {errorMsg}
        </>
    );
}

export default SearchBar;