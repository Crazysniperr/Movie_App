import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom" 
import MovieList from "../../components/movieList/movieList";
const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res=>res.json())
        .then(data => setPopularMovies(data.results))
    },[])
    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="content">

                                    <div className="bg-shape">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />


                                    </div>
                                    <div className="product-img">
                                        <div className="product-img__item" id="img1">
                                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                        </div>
                                    </div>
                                    <div className="product-slider">
                                        <div className="product-slider__wrp">
                                            <div className="product-slider__item" data-target="img1">
                                                <div className="product-slider__card">
                                                <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405223/starwars/item-4-bg.webp"   className="product-slider__cover" />
                                                    <div className="product-slider__content">
                                                   
                                                        <div className="posterImage__title ">{movie ? movie.original_title: ""}</div>
                                                        <div className="posterImage__runtime">
                                                            {movie ? movie.release_date : ""}
                                                            <span className="posterImage__rating">
                                                                {movie ? movie.vote_average :""}
                                                                <i className="fas fa-star" />{" "}
                                                            </span>
                                                        </div>
                                                        <div className="posterImage__description">{movie ? movie.overview : ""}</div>



                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}

export default Home

