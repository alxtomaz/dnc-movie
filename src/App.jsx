import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home/Home.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import { useState } from "react";

function App() {

  const [searchValue, setsearchValue] = useState('');

  return (
    <div className="App" style={{ backgroundColor: "#303030" }}>
      <Header onSubmit={(inputValue) => setsearchValue(inputValue)}/>
      <Routes>
        <Route path="/" element={<Home searchValue={searchValue}/>} />
        <Route path="movie/:movieid" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
