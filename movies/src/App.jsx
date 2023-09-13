import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("a");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <Header handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<MovieSearch search={searchQuery} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
