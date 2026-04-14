import { Link } from 'react-router-dom';

const SongList = function (props) {

    return (
        <>
            <div className="flex min-h0screen flex-col items-center justify-center ">
                <table className="table-auto bg-orange-50">
                    <thead>
                        <tr key="headings">
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.songs.map((song, index) => {
                            const artistName = song.artist?.artist_name ?? song.artist_name;
                            return (
                            <tr key={index}>
                                <td>
                                    <Link 
                                        to={`/song/${song.song_id}`}
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                    {song.title}
                                    </Link>
                                </td>
                                <td>
                                    <Link 
                                        to={`/artist/${artistName}`}
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                    {artistName}
                                    </Link>
                                </td>
                                <td>{song.year}</td>
                                <td>
                                    <button
                                        onClick={() => props.isInPlaylist(song.song_id) ? props.removeFromPlaylist(song) : props.addToPlaylist(song)}
                                    >
                                        {props.isInPlaylist(song.song_id) ? "-" : "+"}
                                    </button> 
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