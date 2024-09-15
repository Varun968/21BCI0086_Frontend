import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [owner, setOwner] = useState('');
    const [lawFirm, setLawFirm] = useState('');
    const [attorney, setAttorney] = useState('');
    const [status, setStatus] = useState('');

    const handleSearch = async () => {
        const params = {
            query,
            owner,
            lawFirm,
            attorney,
            status,
        };

        onSearch(params);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Trademark"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input
                type="text"
                placeholder="Owner"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
            />
            <input
                type="text"
                placeholder="Law Firm"
                value={lawFirm}
                onChange={(e) => setLawFirm(e.target.value)}
            />
            <input
                type="text"
                placeholder="Attorney"
                value={attorney}
                onChange={(e) => setAttorney(e.target.value)}
            />
            <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
