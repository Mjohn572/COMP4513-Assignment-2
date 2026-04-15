import {useEffect, useState} from 'react';

const usePlaylistChange = function () {

    const [currentPlaylist, setCurrentPlaylist] = useState(() => {
        const saved = localStorage.getItem('currentPlaylist');
        return saved ? JSON.parse(saved) : {playlist_id: null, songs: []};
    });

    useEffect(() => {
        localStorage.setItem('currentPlaylist', JSON.stringify(currentPlaylist));
    }, [currentPlaylist]);

    const deletePlaylist = function (playlistID) {

    };
    const makeNewPlaylist = function () {

    };

    const editPlaylist = function (passedSong) {
        const inPlaylist = currentPlaylist.songs.some(song => song.song_id === passedSong.song_id);
        if(inPlaylist) { 
        setCurrentPlaylist(prev => ({
            ...prev,
            songs: prev.songs.filter(song => song.song_id !== passedSong.song_id) // Removes the song to the playlist 
        }));
        }
        else {
        setCurrentPlaylist(prev => ({
            ...prev,
            songs: [...prev.songs, passedSong]
        }));
        }
    }

    const isInPlaylist = function (passedSong) {

        const exists = currentPlaylist.songs.some(song => song.song_id === passedSong.song_id);
        if(exists) {
        return true;
        }
        else {
        return false;
        }
    }
    const toasterBarHandler = function (text, songTitle) {
        console.log("toasterBarHandler called", text, songTitle);
        if (text === "+") {
            text = `Added ${songTitle} to playlist!`;
        }
        else {
            text = `Removed ${songTitle} from playlist!`;
        }
        const toasterBar = document.getElementById("toasterbar");

        // If the toaster bar is already showing, reset the timer
        if(toasterBar._timer) {
            clearTimeout(toasterBar._timer);
            toasterBar.classList.remove("show");
        }

        void toasterBar.offsetWidth; // Restarts animation

        toasterBar.textContent = text;
        toasterBar.classList.add("show");

        toasterBar._timer = setTimeout(() => {
            toasterBar.classList.remove("show");
            toasterBar._timer = null;
        }, 3000);
    }

    return {currentPlaylist, setCurrentPlaylist, deletePlaylist, makeNewPlaylist, editPlaylist, isInPlaylist, toasterBarHandler};
}

export default usePlaylistChange;