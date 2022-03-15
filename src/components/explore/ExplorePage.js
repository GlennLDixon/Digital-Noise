import React, {useState, useEffect} from 'react';
import ExploreSongList  from "./ExploreSongList"
import { getTracksByArtistAndSong } from '../../modules/PlayListManager';

const ExplorePage = () => {
  const [tracks, setReturnedTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [artist, setSearchArtist] = useState('');
  const [song, setSearchSong] = useState('');

  const handleSearchInputChange = (event) => {
    event.preventDefault() // Prevents the browser from submitting the form

    console.log(event.target.text.value)

  }
  

  useEffect(() => {
    if (artist !== '' && song !== '') {
      getTracksByArtistAndSong(artist, song)
      .then(tracks => {
        console.log(tracks);
          setReturnedTracks(tracks);
          setIsLoading(false);
      })
    }
    }, []);

  return (
    <div>
      <h1>Explore Page</h1>
      {/* Input form to help search songs */}
      <section className='section-searchBar'>
        {/* <form action=""> */}
          <input type="text"
            placeholder="Artist..."
            onChange={(event) => {
              setSearchArtist(event.target.value)
            }}
          />
          <input type="text"
            placeholder="Song name..."
            onChange={(event) => {
            setSearchSong(event.target.value)
            }}
          />
          <button className='btn btn-primary'
          type='submit'
          onClick={handleSearchInputChange}
          >Search</button>
        {/* </form> */}
      </section>
        <ExploreSongList tracks={tracks} />
    </div>
  )
}

export default ExplorePage