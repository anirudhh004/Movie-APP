import MovieCard from "../components/MovieCard";
import { useState,useEffect } from "react";
import { searchMovies,getPopularMovies} from "../services/api" ;
import "../css/Home.css"

function Home() {
    const [searchQuery,setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Fast and Furious", release_date: "2002" },
        { id: 3, title: "The Avengers", release_date: "2012" },
        { id: 4, title: "Demon Slayer", release_date: "2021" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    )
                )}
            </div>
        </div>
    );
}

export default Home;