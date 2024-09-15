import React from 'react';

const Results = ({ data }) => {
    return (
        <div className="results">
            {data.length === 0 ? (
                <p>No results found</p>
            ) : (
                data.map((item, index) => (
                    <div key={index} className="result-item">
                        <h3>{item.trademark}</h3>
                        <p>Owner: {item.owner}</p>
                        <p>Law Firm: {item.lawFirm}</p>
                        <p>Attorney: {item.attorney}</p>
                        <p>Status: {item.status}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Results;