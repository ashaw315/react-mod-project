import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FurnitureList from "./FurnitureList";

function App() {
  const [furniture, setFurniture] = useState([])

  useEffect(() => {
    fetch('https://floating-cove-91761.herokuapp.com/furniture')
      .then((r) => r.json())
      .then((furniture) => setFurniture(furniture))
  },[])

  console.log(furniture)


  return (
    <div >
      <h1>Link</h1>
      <p>Hey Austin!</p>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/About">About</Link> | {""}
        <Link to="/Home">Home</Link>
      </nav>
    </div>
  );
}

export default App;
