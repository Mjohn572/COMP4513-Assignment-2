import SongList from './SongList.jsx';

const Playlists = function (props) {

    return (
        <>
            <div className="pageParent">
                <h1>Playlists</h1>
                <div>
                    <table className="table-auto bg-orange-50">
                    <thead>
                        <tr key="headings">
                            <th>Name</th>
                            <th># Songs</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.playlists.map((playlist, index) => (
                            <tr key={index}>
                                <td>
                                    {playlist.playlist_id}                                   
                                </td>
                                <td>
                                    {playlist.songs.length} 
                                </td>
                                <td>
                                    <button
                                        onClick={() => props.playlistFunctions.setCurrentPlaylist(playlist)}
                                    >
                                        Set as Current Playlist
                                    </button> 
                                    <button
                                        onClick={() => props.playlistFunctions.deletePlaylist(playlist.playlist_id)}
                                    >
                                        Delete Playlist
                                    </button> 
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <button onClick={() => props.playlistFunctions.makeNewPlaylist()}>
                                Add New Playlist
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1>Songs in Playlist</h1>
                <SongList songs={props.currentPlaylist.songs} isInPlaylist={props.playlistFunctions.isInPlaylist}/> 
                </div>
            </div>
        </>
    )
}

export default Playlists;