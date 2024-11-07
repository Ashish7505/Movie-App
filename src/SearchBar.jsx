import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input style={{padding:"10px",width:"500px"}}
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={handleChange}
        />
    );
};

export default SearchBar;

