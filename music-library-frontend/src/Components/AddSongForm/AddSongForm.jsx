import React, { useState } from 'react';
import "./AddSongForm"
//Form to input Add song 

function AddSongForm(props) {

    const [idIndex, setIdIndex] = useState(0);
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSongEntry = {
            idIndex: idIndex,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre,
        }
        console.log(newSongEntry);
        props.addNewSongEntryProperty(newSongEntry)//executes the function on line 16 of Apps.js
    }
    return (
            <div>
                <form onSubmit={handleSubmit} className='form-grid'>
                    <div className='form-group'>
                        <label>ID</label>
                        <input type='number' className='form-control' value={idIndex} onChange={(event) => setIdIndex(parseFloat(event.target.value))} />
                    </div>
                    <div className='form-group'>
                        <label>Artist</label>
                        <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Album</label>
                        <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Release Date</label>
                        <input type='date' className='form-control' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Genre</label>
                        <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)} />
                    </div>
                    <button type='submit' className='btn'>Add Song</button>
                </form>
        // search button
            <div>
                <div>
                <form className="search-button">
                    <input type="text" name="search" />
                    <button type="submit"></button>
                </form>
            </div>
            </div>
  
        </div>
   
    )

}
export default AddSongForm;