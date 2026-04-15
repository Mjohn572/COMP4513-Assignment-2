import { useState, useEffect } from 'react'

function useFetchData() {

    const dataURL = "https://comp4513-assignment-1-jm8r.onrender.com";
  
    const [songs, setSongs] = useState([]);

    const [artists, setArtists] = useState([]);

    const [genres, setGenres] = useState([]);

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetch(dataURL + "/api/songs").then(res => res.json()).then(json => setSongs(json));
        fetch(dataURL + "/api/artists").then(res => res.json()).then(json => setArtists(json));
        fetch(dataURL + "/api/genres").then(res => res.json()).then(json => setGenres(json));
        fetch(dataURL + "/api/playlists").then(res => res.json()).then(json => setPlaylists(json));
    }, [])

    //console.log(songs);

    return {songs, setSongs, artists, setArtists, genres, setGenres, playlists, setPlaylists}
}

export default useFetchData;