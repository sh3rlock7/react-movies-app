import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'

const mainURL = "https://api.themoviedb.org/3/discover/movie?api_key=22266077da25022d1fd9726a6c947340&page="
const searchURL = "https://api.themoviedb.org/3/search/movie?&api_key=22266077da25022d1fd9726a6c947340&query="


export const MovieScreen = () => {
    const [newPage, setNewPage] = useState( 1 )
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
            fetch( mainURL+newPage )
                .then(res => res.json())
                .then( data => {
                    setMovies(
                        data.results
                    )
                })            
    }, [newPage])

    const handlePreviousPage = () => {
            setNewPage( 
                newPage - 1
            )
    }

    const handleNextPage = () => {
        setNewPage(
            newPage + 1
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(searchTerm){
            fetch( searchURL+searchTerm )
                .then(res => res.json())
                .then( data => {
                    setMovies(
                        data.results
                    )
                })     
            setSearchTerm('')           
        }
    }
    
    const handleInputChange = (e) =>{
        setSearchTerm(e.target.value)
    }
 
    const handleAllMovies = () => {
        window.location.reload(true)
    }
    
    return (
        <>
        <header className="navbar navbar-expand-lg navbar-light navbar-container">
            <button 
                className="btn moviesBtn"
                onClick={handleAllMovies}
            >
                See All Movies
            </button>
            
            <form  onSubmit={handleSubmit}>
                <input
                    className="nav-item nav-link me-5 text-white"
                    placeholder="Search your movie"
                    value={searchTerm}
                    onChange={handleInputChange}
                />                        

            </form>
        </header>

           

            <div className="card-container mt-20 mb-10">
                {
                    movies.length > 0 && movies.map( movie => ( 
                        <MovieCard 
                            key={movie.id}
                            {...movie}
                        />

                    ))

                }            
            </div>


            <div className="d-flex justify-content-center">
                <button
                    id="button"
                    className="btn-card btn btn-primary w-25 marb-10"
                    disabled={ newPage === 1 ?  true :  false}
                    onClick={handlePreviousPage}
                >
                    previous
                </button>

                <button
                    className="btn-card btn btn-primary marb-10 marl-10 w-25"
                    onClick={handleNextPage}
                >
                    Next
                </button>

            </div>    

        </>
    )
}
