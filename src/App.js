import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movie/movie";
function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path="movie/:id" element={<h1>{<Movie/>}</h1>}></Route> 
                    {/* gives path to the component */}
                    <Route path="movies/:type" element={<MovieList/>}></Route>
                    <Route path="/*" element={<h1>Error Page</h1>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
