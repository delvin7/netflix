import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../../Constants/Constants';  
import './Banner.css';
import axios from '../../../axios';

function Banner() {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                const movies = response.data.results;
                if (movies && movies.length > 0) {
                
                    const randomIndex = Math.floor(Math.random() * movies.length);
                    setMovie(movies[randomIndex]);
                } else {
                    setError('No trending movies found.');
                }
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setError('Error fetching data. Please try again later.');
            });
    }, []);

    return (
        <div style={{backgroundImage: `url(${imageUrl}${movie ? movie.backdrop_path : ''})`}} className='banner'>
            {error && <div className="error">{error}</div>}
            {movie && (
                <>
                    <div className="fade_top"></div>
                    <div className='content'>
                        <h1 className='title'>{movie.title}</h1>
                        <div className='banner_buttons'>
                            <button className='button'>Play</button>
                            <button className='button'>My list</button>
                        </div>
                        <h1 className='description'>{movie.overview}</h1>
                    </div>
                    <div className="fade_bottom"></div>
                </>
            )}
        </div>
    );
}

export default Banner;
