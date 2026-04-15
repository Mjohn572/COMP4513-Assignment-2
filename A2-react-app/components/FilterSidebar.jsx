import { use } from "react";
import { useState, useEffect } from "react";

const FilterSidebar = function (props) {

    const [titleSearch, setTitleSearch] = useState("");
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [sortBy, setSortBy] = useState("Title");
    const [sortOrder, setSortOrder] = useState("asc");

    const years = [... new Set(props.songs.map(s => s.year))]; // Grabs all unique years
    const artists = [... new Set(props.songs.map(s => s.artist.artist_name))]; // Grabs all unique artists
    const genres = [... new Set(props.songs.map(s => s.genre.genre_name))]; // Grabs all unique genres

    const toggleItem = (list, setList, item) => {
        setList(prev => {
            if (prev.includes(item)) {
                return prev.filter(i => i !== item);
            } 
            else {
                return [...prev, item];
            }

        })
    }

    useEffect(() => {
        props.setFilters({
            titleSearch,
            selectedYears,
            selectedArtists,
            selectedGenres
        });
    }, [titleSearch, selectedYears, selectedArtists, selectedGenres]);


    return (
        <div className="p-4 w-52 bg-black/40 w-2/4 border-collapse border border-purple-800 whitespace-normal break-words sticky top-20">
            <h1>Filters</h1>
            <div>
                <p>Title</p>
                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        checked={titleSearch !== ""}
                        onChange={() => setTitleSearch("")} 
                    />
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={titleSearch} 
                        onChange={(e) => setTitleSearch(e.target.value)} 
                    />
                </div>
            </div>
            <div className="mb-4">
                <p className="font-medium mb-2">Years</p>
                {years.map(year => (
                    <label key={year} className="flex items-center gap-2 mb-1">
                        <input 
                            type="checkbox" 
                            checked={selectedYears.includes(year)}
                            onChange={() => toggleItem(selectedYears, setSelectedYears, year)}
                        />
                        {year}
                    </label>
                ))}
            </div>
            <div className="mb-4">
                <p className="font-medium mb-2">Artists</p>
                {artists.map(artist => (
                    <label key={artist} className="flex items-center gap-2 mb-1">
                        <input 
                            type="checkbox" 
                            checked={selectedArtists.includes(artist)}
                            onChange={() => toggleItem(selectedArtists, setSelectedArtists, artist)}
                        />
                        {artist}
                    </label>
                ))}
            </div>
            <div className="mb-4">
                <p className="font-medium mb-2">Genres</p>
                {genres.map(genre => (
                    <label key={genre} className="flex items-center gap-2 mb-1">
                        <input 
                            type="checkbox" 
                            checked={selectedGenres.includes(genre)}
                            onChange={() => toggleItem(selectedGenres, setSelectedGenres, genre)}
                        />
                        {genre}
                    </label>
                ))}
            </div>
        </div>
    )
}
    
export default FilterSidebar;   