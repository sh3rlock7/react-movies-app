import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';



export const MovieCard = ({ title, poster_path, vote_average, overview, release_date }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const imgURL = 'https://image.tmdb.org/t/p/w500';
     

    const setVoteColor = (vote) =>{
        if( vote >= 8 ){
            return "green";
        }else if (vote >= 6){
            return "orange";
        }else{
            return "red";
        }
    }




    return (
        <div className="card-container">
           <div className="card-container__info">
                <img src={poster_path 
                            ? (imgURL + poster_path) 
                            : "https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433326_960_720.jpg"}  
                    alt={title}  
                />
                
                
                <div className="title-info">
                    <h3> {title} </h3>
                    <br/>
                    <div className="tag">
                        <h4 className={`tag-result ${setVoteColor(vote_average)}`} >{ vote_average } </h4>
                    </div>
                </div>

            <button
                className="btn btn-card text-white mt-2"
                onClick={ handleShow }
            >
                More info...
            </button>

            <Modal size="lg" className="d-flex flex-columns text-center modal-container" show={show} onHide={handleClose}>
                <Modal.Header className="d-flex">
                    <Modal.Title className="flex-grow-1">
                    <img src={poster_path 
                            ? (imgURL + poster_path) 
                            : "https://cdn.pixabay.com/photo/2016/06/03/12/42/popcorn-1433326_960_720.jpg"}  
                        alt={title}  
                />
                        <br />
                    </Modal.Title>    
                        <Modal.Body className="flex-shrink-1">
                            <h1 > { title } </h1>
                            <hr />
                            <h2>  Plot: </h2>
                            <br />
                            <span>{ overview }</span>  
                        </Modal.Body>
                </Modal.Header>
                <Modal.Footer className="d-flex text-center">
                
                <h3 className="d-flex  m-auto mb-2">
                    Released on:{ release_date 
                                    ? <h3 className="ms-2">{release_date}</h3> 
                                    : <h3 className="ms-2"> unknown</h3> 
                    }
                </h3> 

                <Button className="w-100 bg-danger " variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>


            </div> 
        </div>

        
    )
}
