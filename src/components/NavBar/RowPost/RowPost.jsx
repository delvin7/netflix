import React ,{useEffect,useState}from 'react'
import './RowPost.css'
import axios from '../../../axios';
import {imageUrl} from '../../../Constants/Constants'
import Youtube from 'react-youtube'
import { API_KEY } from '../../../Constants/Constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]) 
  const[UrlId,setUrlId] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    axios.get(props.url)
    .then((response) => {
      setMovies(response.data.results)
    }).catch((error) => {alert('Error fetching data')})
  }, [])
  const handleMotion = (id, name, backdropPath) => {
    setSelectedMovie({ id, name, backdropPath });
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0].key);
      } else {
        console.log('No trailer available');
      }
    }).catch((error) => {
      console.error('Error fetching trailer:', error);
    });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <div key={obj.id} className="poster-container">
            <img
              onClick={() => handleMotion(obj.id, obj.name, obj.backdrop_path)}
              className={props.isSmall ? "smallPoster" : 'poster'}
              src={`${imageUrl}${obj.backdrop_path}`}
              alt={obj.name}
            />
            {selectedMovie && selectedMovie.id === obj.id && (
              <div className="movie-name-overlay">
                <p className="movie-name">{selectedMovie.name}</p>
              </div>
            )}
          </div>
        )}
      </div>
      {UrlId && (
        <div className="youtube-container">
          <Youtube
            videoId={UrlId}
            opts={{ height: '390', width: '100%', playerVars: { autoplay: 1 } }}
          />
        </div>
      )}
    </div>
  );
}

export default RowPost;