import { useFetchMovies } from "../hooks/useFetchMovies"



export const GetMoviesById = () =>{
    
    const movieId =  useFetchMovies()
    const { id } = movieId
    return movieId.find(movies => movies.id === id)

}