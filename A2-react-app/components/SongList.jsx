import { Link } from 'react-router-dom';

const SongList = function (props) {

    const isInPlaylistHandler = function (passedSong) {
        return props.isInPlaylist(passedSong) ? "-" : "+";
    }


    return (
        <>
            <div className="flex min-h0screen flex-col items-center justify-center ">
                <table className="table-auto bg-black/40 w-3/4 border-collapse border border-gray-400 whitespace-normal break-words ">
                    <thead>
                        <tr key="headings">
                            <th className="text-white">Title</th>
                            <th className="text-white">Artist</th>
                            <th className="text-white">Year</th>
                            <th className="text-white"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.songs.map((song, index) => {
                            const artistName = song.artist?.artist_name ?? song.artist_name;
                            return (
                            <tr key={index} className="h-12">
                                <td className="whitespace-normal break-words max-w-xs text-white">
                                    <Link 
                                        to={`/song/${song.song_id}`}
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                    {song.title}
                                    </Link>
                                </td>
                                <td className="text-white">
                                    <Link 
                                        to={`/artist/${artistName}`}
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                    {artistName}
                                    </Link>
                                </td>
                                <td className="text-white">{song.year}</td>
                                <td className="align-middle">
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