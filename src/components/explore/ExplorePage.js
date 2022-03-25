import React, {useState, useEffect} from 'react';
import ExploreSongList  from "./ExploreSongList"
import { getTracksByArtistAndSong } from '../../modules/ExploreManager';

const ExplorePage = () => {
  const [tracks, setReturnedTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [artist, setSearchArtist] = useState('');
  const [song, setSearchSong] = useState('');

  const explorePageContent = tracks === null ? <h1>Can not find song</h1> : <ExploreSongList tracks={tracks} />

  // Submit button worked once and now it's not able to read value property.
  const handleSearchInputChange = (event) => {
    event.preventDefault() // Prevents the browser from submitting the form

    if (artist !== '' && song !== '') {
      getTracksByArtistAndSong(artist, song)
      .then(tracks => {
        console.log(tracks);
          setReturnedTracks(tracks);
          setIsLoading(false);
      })
    }

  }

  useEffect(() => {
    
    }, []);

  return (
    <div>
      <h1>Explore Page</h1>
      {/* Input form to help search for current artits */}
      <section className='section-searchBar'>
        {/* <form action=""> */}
          <input type="text"
          className='searchBar-Artist'
            placeholder="Artist..."
            onChange={(event) => {
              setSearchArtist(event.target.value)
            }}
          />
        {/* Input form to help search for current song */}
          <input type="text"
          className='searchBar-Song'
            placeholder="Song name..."
            onChange={(event) => {
            setSearchSong(event.target.value)
            }}
          />
          {/* Button that will submit the users values in the input*/}
          <button className='btn btn-primary'
          type='submit'
          onClick={handleSearchInputChange}
          >Search</button>
        {/* </form> */}
      </section>
        {explorePageContent}
    </div>
  )
}

export default ExplorePage