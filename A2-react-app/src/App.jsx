import { useState } from 'react';
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
import useFetchData from '../components/useFetchData';


function App() {

  const {songs, setSongs, artists, setArtists, genres, setGenres, playlists, setPlaylists} = useFetchData();

  const isInPlaylist = function (songID) {
    return true;
  }
    
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          {console.log(songs)}
          <Route path="/" element={<Home songs={songs}/>} />
          <Route path="/artists" element={<ArtGen/>} />
          <Route path="/genres" element={<ArtGen/>} />
          <Route path="/songs" element={<Browse songs={songs} isInPlaylist={isInPlaylist}/>} />
          <Route path="/song/" element={<SingleSong/>} />
          <Route path="/singleartist" element={<SingleArtGen songs={songs}/>} />
          <Route path="/singlegenre" element={<SingleArtGen songs={songs}/>} />
          <Route path="/playlists" element={<Playlists/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
