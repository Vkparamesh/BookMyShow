
import './App.css';
//routes
import { Route, Routes } from 'react-router-dom';
//css react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home_Page';
import MoviePage from './pages/Movie_Page';
import Plays from './pages/Plays_page';
import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/plays' element={<Plays />} />
    </Routes>
  );
}

export default App;
