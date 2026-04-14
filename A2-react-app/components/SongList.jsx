const SongList = function (props) {

    return (
        <>
            <div>
                <table className="table-auto">
                    <thead>
                        <tr key="headings">
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.songs.map((song, index) => (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist.artist_name}</td>
                                <td>{song.year}</td>
                                <td>
                                    <button
                                        onClick={() => props.isInPlaylist(song.id) ? props.removeFromPlaylist(song) : props.addToPlaylist(song)}
                                    >
                                        {props.isInPlaylist(song.id) ? "-" : "+"}
                                    </button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SongList;