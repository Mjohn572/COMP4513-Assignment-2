import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Shake, ShakeLittle } from 'reshake'; // custom package https://elrumordelaluz.github.io/reshake/

const Header = function (props) {

    //Props will have logged in/logged out and display the other one
    const navigate = useNavigate();

    return (

        <>
        <div id="toasterbar" className="fixed middle text-white rounded">

        </div>
            <header 
                className="w-full border-b border-gray-200 bg-white px-4 py-3"
            >
                <div
                    className="mx-auto flex items-center justify-between gap-4"
                >
                    <Shake 
                        h={5}
                        v={5}
                        r={3}
                        dur={1000}  >
                        <img
                            src="/lava-lamp-logo.png"
                            alt="https://commons.wikimedia.org/wiki/File:Lavalampe.jpg"
                            onClick={() => navigate('/')}
                            className="h-auto w-[50px] cursor-pointer logoImage"
                        />
                    </Shake>
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
                        <div className="relative inline-block">
                            <ShakeLittle> 
                                <img
                                    src="/lava-lamp-logo.png"
                                    alt="https://commons.wikimedia.org/wiki/File:Lavalampe.jpg"
                                    onClick={() => navigate('/')}
                                    className="h-auto w-[50px] cursor-pointer logoImage"
                                /><span
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-md"
                                >
                                {props.currentPlaylist.songs.length}
                                </span>
                            </ShakeLittle>
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