import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Shake, ShakeLittle } from 'reshake'; // custom package https://elrumordelaluz.github.io/reshake/
const baseUrl = import.meta.env.BASE_URL;

const Header = function (props) {

    //Props will have logged in/logged out and display the other one
    const navigate = useNavigate();

    const [shaking, setShaking] = useState(false);

    useEffect(() => {
        if(props.currentPlaylist.songs.length > 0) {
            setShaking(true);
            const timer = setTimeout(() => {
                setShaking(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [props.currentPlaylist.songs.length]);

    return (

        <>
        <div id="toasterbar" className="fixed middle text-white rounded">

        </div>
            <header 
                className="sticky top-0 w-full border-b border-gray-200 bg-white px-4 py-3 bg-gradient-to-br from-black/80  to-silver-800/20"
            >
                <div
                    className="mx-auto flex items-center justify-between gap-4"
                >
                    <Shake 
                        fixed={shaking}
                        v={25} // Shakes the logo vertically when hovering over
                        dur={1000} 
                    >
                        <img
                            src={`${baseUrl}/lava-lamp-logo.png`}
                            alt="https://commons.wikimedia.org/wiki/File:Lavalampe.jpg"
                            onClick={() => navigate('/')}
                            className="h-auto w-[50px] cursor-pointer logoImage"
                        />
                    </Shake>
                    <nav>
                        <button
                            onClick={() => navigate('/')}
                            className="hover:text-blue-500 hover:underline text-white"
                        >
                        Home
                        </button>
                        <button
                            onClick={() => navigate('/artists')}
                            className="hover:text-blue-500 hover:underline text-white"
                        >
                        | Artists
                        </button>

                        <button
                            onClick={() => navigate('/genres')}
                            className="hover:text-blue-500 hover:underline text-white"
                        >
                        | Genres
                        </button>

                        <button
                            onClick={() => navigate('/songs')}
                            className="hover:text-blue-500 hover:underline text-white"
                        >
                        | Songs 
                        </button>

                        <button // might need to be a dialog box on click
                            onClick={() => navigate('/about')} 
                            className="hover:text-blue-500 hover:underline text-white"
                        >
                        | About
                        </button>

                    </nav>

                    <div className="flex items-center justify-between gap-1">
                        <button
                            onClick={() => navigate('/playlists')}
                            className="hover:text-blue-500 hover:underline text-white"
                        >
                        Current Playlist
                        </button> 
                        <div className="relative inline-block">
                            <Shake 
                                fixed={shaking}
                                v={15} // Shakes the logo vertically when hovering over
                                dur={1250 - (props.currentPlaylist.songs.length * 50)} // The more songs in the playlist, the faster it shakes
                            >  
                                <img
                                    src="/lava-lamp-logo.png"
                                    alt="https://commons.wikimedia.org/wiki/File:Lavalampe.jpg"
                                    onClick={() => navigate('/')}
                                    className="h-auto w-[50px] cursor-pointer logoImage"
                                />
                                <span
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-md"
                                >
                                {props.currentPlaylist.songs.length}
                                </span>
                            </Shake>
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