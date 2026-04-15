import SongList from './SongList.jsx';
import { useState, useMemo } from 'react';
import FilterSidebar from './FilterSidebar.jsx';

const Browse = function (props) {

    const [filters, setFilters] = useState({
        titleSearch:"",
        selectedYears: [],
        selectedArtists: [],
        selectedGenres: []
    }); // State to hold filters

    const filteredSongs = useMemo(() => {
        return props.songs.filter(s => 
            !filters.titleSearch || s.title.toLowerCase().includes(filters.titleSearch.toLowerCase())).filter(s =>
            !filters.selectedYears.length || filters.selectedYears.includes(s.year)).filter(s =>
            !filters.selectedArtists.length || filters.selectedArtists.includes(s.artist.artist_name)).filter(s =>
            !filters.selectedGenres.length || filters.selectedGenres.includes(s.genre.genre_name))
    }, [props.songs, filters]); // Only runs when one of these are changed

    return (
        <>
            <div className="pageParent">
                
                <div className="flex gap-4 items-start justify-center">
                    <FilterSidebar songs={props.songs} setFilters={setFilters}/>
                    <SongList songs={filteredSongs} isInPlaylist={props.isInPlaylist} editPlaylist={props.editPlaylist} toasterBarHandler={props.toasterBarHandler}/>                    
                </div>
                
            </div>
        </>
    )
}

export default Browse;