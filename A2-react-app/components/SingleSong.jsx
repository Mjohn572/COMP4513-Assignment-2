
const SingleSong = function (props) {

    const relatedSongs = [];
    
    return (
        <>
            <div className="pageParent"> // for the whole thing (background)
                <div>  // For the title
                    {props.song.title}
                </div> 
                <div> // Box for everything else
                    <div> // Box for Information
                        <p>Artist: {props.song.artist.artist_name}</p>
                        <p>Genre: {props.song.genre.genre_name}</p>
                        <p>Year: {props.song.year}</p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default SingleSong;