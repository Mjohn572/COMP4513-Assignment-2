import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Header = function (props) {

    //Props will have logged in/logged out and display the other one
    const navigate = useNavigate();

    return (

        <>
            <header 
                className="w-full border-b border-gray-200 bg-white px-4 py-3"
            >
                <div
                    className="mx-auto flex items-center justify-between gap-4"
                >
                    <img
                        src="/lava-lamp-logo.jpg"
                        alt="https://commons.wikimedia.org/wiki/File:Lavalampe.jpg"
                        onClick={() => navigate('/')}
                        className="h-auto w-[50px] cursor-pointer logoImage"
                    />
                    <nav>
                        <button
                            onClick={() => navigate('/')}
                            className=""
                        >
                        Home
                        </button>
                        <button
                            onClick={() => navigate('/artists')}
                            className=""
                        >
                        | Artists
                        </button>

                        <button
                            onClick={() => navigate('/genres')}
                            className=""
                        >
                        | Genres
                        </button>

                        <button
                            onClick={() => navigate('/songs')}
                            className=""
                        >
                        | Songs 
                        </button>

                        <button // might need to be a dialog box on click
                            onClick={() => navigate('/about')} 
                            className=""
                        >
                        | About
                        </button>

                    </nav>

                    <div className="flex items-center justify-between gap-1">
                        <button
                            onClick={() => navigate('/playlists')}
                            className=""
                        >
                        Current Playlist
                        </button> 
                        <div>
                            {props.currentPlaylist.songs.length}
                        </div>
                    </div>

                    <button
                        //onClick={handleSignOut}
                        className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                    >
                    Sign Out
                    </button>
                </div>
            </header>
        </>
    )

}

export default Header;