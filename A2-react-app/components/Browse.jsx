import SongList from './SongList.jsx';

const Browse = function (props) {

    return (
        <>
            <div className="pageParent">
                <SongList songs={props.songs} isInPlaylist={props.isInPlaylist}/>
            </div>
        </>
    )
}

export default Browse;