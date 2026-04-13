
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
                    </div>
                    <div> // Box for Image
                    </div>
                    <div> // Box for Genre, + song type info
                    </div>
                    <div> // Radar Chart 
                    </div>
                </div>
                <div> // Related Songs title

                </div>
                <div> // For Related Songs
                    {relatedSongs.map((song, index) => (
                        <div></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SingleSong;