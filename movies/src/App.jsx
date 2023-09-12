import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import MovieSearch from "./components/MovieSearch"
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <div>
    <Header />
    <Routes>
    <Route path="/" element={<MovieSearch search="popular"/>} />
    <Route path="/movie/:id" element={<MovieDetails/>} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  )
}

export default App
