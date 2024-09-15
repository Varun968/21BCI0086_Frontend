import React, { useState } from 'react';
import SearchBar from './components/Searchbar';
import Results from './components/Results';
import Button from './components/Button';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';

const App = () => {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    const fetchResults = async (params = {}) => {
        setLoading(true); 
        setError(null);   

        try {
            const response = await axios.get('https://vit-tm-task.api.trademarkia.app/api/v3/us', {
                params,
            });
            setData(response.data); 
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch results. Please try again.'); 
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="App">
            <header>
                <h1>Trademarkia</h1>
            </header>

            {/* Search Bar for user input */}
            <SearchBar onSearch={fetchResults} />

            {/* Button to manually trigger search */}
            <Button label="Search" onClick={() => fetchResults()} />

            {/* Display Results */}
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Results data={data} />
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
