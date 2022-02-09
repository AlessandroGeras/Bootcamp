import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./Components/NavBar";
import Bootcamps from "./Components/Bootcamps";
import Advertising from "./Components/Advertising";
import Footer from "./Components/Footer";




const App = () => {
  return(
    <div className="App">

      <NavBar />
      <Bootcamps />
      <Advertising />
      <Footer />

    </div>
  )
}


ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root')
);