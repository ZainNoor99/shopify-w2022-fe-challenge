import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from './components/picture';
import './App.css';

function App() {
  // sets pictures as part of state
  const [pictures, setPictures] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // ensures API called only on page load
  useEffect(() => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 9);
    // ideally this would be encapsulated in a hook
    axios.get(
      'https://api.nasa.gov/planetary/apod',
      {
        params: {
          start_date: `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
          api_key: 'BiOmXOnxO6n89b2hhDrscT4lcnj9EdOE2nm56DhT',
        },
      },
    ).then((response) => {
      setPictures(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <h1>Shopify Winter 2022 FE Challenge</h1>
      {isLoading && (
        <h2 className="loading">Waiting for response from API...</h2>
      )}
      {pictures.length > 0 && (
        <div className="images">
          {pictures.filter((picture) => picture.media_type === 'image').map((picture) => (
            <Picture
              date={picture.date}
              explanation={picture.explanation}
              hdurl={picture.hdurl}
              url={picture.url}
              title={picture.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
