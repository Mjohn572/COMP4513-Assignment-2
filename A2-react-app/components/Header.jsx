import { useNavigate } from 'react-router-dom'

const Header = function (props) {

    //Props will have logged in/logged out and display the other one
    const navigate = useNavigate();

    return (

        <>
            <header 
                className="flex items-center justify-between"
            >
                <div
                    className="mx-auto flex max-w-[1200px] items-center justify-between gap-4"
                >
                    <div 
                        className="flex flex-1 items-center gap-4"
                    >
                        <img
                            src="/lava-lamp-logo.jpg"
                            alt="https://commons.wikimedia.org/wiki/File:Lavalampe.jpg"
                            onClick={() => navigate('/')}
                            className="h-auto w-[50px] cursor-pointer"
                        />

                        <h1
                            onClick={() => navigate('/')}
                            className="cursor-pointer text-2xl font-bold text-gray-900"
                        >
                        
                        </h1>
                    </div>

                    <button
                        onClick={() => navigate('artists')}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Artists
                    </button>

                    <button
                        onClick={() => navigate('genres')}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                    Genres
                    </button>

                    <button
                        onClick={() => navigate('songs')}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                    Songs
                    </button>

                    <button // might need to be a dialog box on click
                        onClick={() => navigate('about')} 
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                    About
                    </button>

                    <button
                        onClick={() => navigate('/current-playlist')}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                    Current Playlist
                    </button>

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