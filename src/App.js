import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=1f9f2ef35d0c920a873334efdee09da1&language=en-US&query=spiderman&page=1&include_adult=false"
  //     )
  //     .then((res) => console.log(res));
  // });
  return <h1 className="title">Hello</h1>;
}

export default App;
