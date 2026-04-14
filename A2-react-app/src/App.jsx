import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import ArtGen from '../components/ArtGen';
import Browse from '../components/Browse';
import SingleSong from '../components/SingleSong';
import SingleArtGen from '../components/SingleArtGen';
import Playlists from '../components/Playlists';
import Login from '../components/Login';
import Footer from '../components/Footer';
import usePlaylistChange from '../components/usePlaylistChange';
import useFetchData from '../components/useFetchData';


function App() {

  const {songs, setSongs, artists, setArtists, genres, setGenres, playlists, setPlaylists} = useFetchData();
  

  const {currentPlaylist, setCurrentPlaylist, deletePlaylist, makeNewPlaylist, editPlaylist, isInPlaylist, toasterBarHandler} = usePlaylistChange(); // Initializing the event listener 

  const playlistFunctions = {
    deletePlaylist: deletePlaylist,
    makeNewPlaylist: makeNewPlaylist,
    editPlaylist: editPlaylist,
    isInPlaylist: isInPlaylist,
    setCurrentPlaylist: setCurrentPlaylist,
    toasterBarHandler: toasterBarHandler
  }
    
  return (
    <>
      <BrowserRouter>
        <Header currentPlaylist={currentPlaylist}/>
        <Routes>
          <Route path="/" element={<Home songs={songs}/>} />
          <Route path="/artists" element={<ArtGen/>} />
          <Route path="/genres" element={<ArtGen/>} />
          <Route path="/songs" element={<Browse songs={songs} isInPlaylist={isInPlaylist} editPlaylist={editPlaylist} toasterBarHandler={toasterBarHandler}/>} />
          <Route path="/song/:song_id" element={<SingleSong/>} />
          <Route path="/artist/:artist_name" element={<SingleArtGen songs={songs}/>} />
          <Route path="/genre/:genre_name" element={<SingleArtGen songs={songs}/>} />
          <Route path="/playlists" element={<Playlists playlists={playlists} playlistFunctions={playlistFunctions} currentPlaylist={currentPlaylist}/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
