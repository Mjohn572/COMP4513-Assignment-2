import { Link } from 'react-router-dom';

const SongList = function (props) {

    const isInPlaylistHandler = function (passedSong) {
        return props.isInPlaylist(passedSong) ? "-" : "+";
    }


    return (
        <>
            <div className="flex min-h0screen flex-col items-center justify-center">  
                <h1>Songs</h1>
                <p className="text-white px-4 py-2">Click on the Song title or Artist to learn more about them!</p>
                <table className="table-fixed bg-black/40 w-2/4 border-collapse border border-purple-800 whitespace-normal break-words ">
                    <thead>
                        <tr key="headings">
                            <th className="text-white px-2 py-1 w-1/4">Title</th>
                            <th className="text-white px-2 py-1 w-1/4">Artist</th>
                            <th className="text-white px-2 py-1 w-1/8">Year</th>
                            <th className="text-white px-2 py-1 w-1/6"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.songs.map((song, index) => {
                            const artistName = song.artist?.artist_name ?? song.artist_name;
                            return (
                            <tr key={index} className="h-12">
                                <td className="whitespace-normal break-words w-1/3 px-3 py-1 text-white">
                                    <Link 
                                        to={`/song/${song.song_id}`}
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                    {song.title}
                                    </Link>
                                </td>
                                <td className="whitespace-normal break-words w-1/4 px-2 py-1 text-white">
                                    <Link 
                                        to={`/artist/${artistName}`}
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                    {artistName}
                                    </Link>
                                </td>
                                <td className="whitespace-normal break-words w-1/14 px-2 py-1 text-white">{song.year}</td>
                                <td className="align-middle whitespace-normal break-words w-1/6 px-2 py-1 text-white">
                                    <div className="flex items-center justify-center">
                                        <button id="playlistChanger" className="rounded-md bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 h-10 w-10 text-center"
                                            onClick={() => {
                                                props.toasterBarHandler(isInPlaylistHandler(song), song.title);
                                                props.editPlaylist(song);
                                            }}
                                        >
                                            {isInPlaylistHandler(song)}
                                        </button> 
                                    </div>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SongList;