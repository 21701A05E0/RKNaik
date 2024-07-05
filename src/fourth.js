import React, { useState, useEffect } from 'react';
import './App.css';

function DataFetching() {
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);
            } catch(error) {
                console.error('Error Fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="App">
            <h1>Data from API</h1>
            <ol>
                {Data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ol>
        </div>
    );
}

export default DataFetching;