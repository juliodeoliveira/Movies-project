import React, { createContext, useState } from "react";
import { MOVIESWATCHING } from "../utils/moviesWatching";

export const WatchingContext = createContext(MOVIESWATCHING);

function MovieProvider({ children }) {
    const [moviesWatching, setMoviesWatching] = useState(MOVIESWATCHING);

    const addMovie = (newMovie) => {
        setMoviesWatching((prev) => [...prev, newMovie]);
    }

    return (
        <WatchingContext.Provider value={{ moviesWatching, addMovie }}>
            { children }
        </WatchingContext.Provider>
    );
}

export default MovieProvider;