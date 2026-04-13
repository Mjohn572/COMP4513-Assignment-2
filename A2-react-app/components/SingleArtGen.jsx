const SingleArtGen = function (props) {


    return (
        <>
            <div> // Page
                <div> // Title
                </div>
                <div> // Box for 2 Items
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.songs.map((song, index) => (
                            <tr>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.year}</td>
                                <td>
                                    <button
                                        onClick={() => props.addToPlaylist(song)}
                                    >
                                        {props.isInPlaylist(song.id) ? "✓" : "+"}
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