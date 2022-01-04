import React, { useState, useEffect } from "react";
import MemCard from "./MemCard";






function Home ({ onAdd, cartItems, onRemove, filterFurniture, handleSearch}) {
    
const [furniture, setFurniture] = useState([])


  
useEffect(() => {
    fetch('http://localhost:4000/furniture')
        .then((r) => r.json())
        .then((furniture) => setFurniture(furniture))
},[])

const furnitureItems = filterFurniture.map((furn) => {
    return <MemCard key={furn.id} furn={furn} onAdd={onAdd} />
})

console.log(furniture)

    return (
        <div className="main" style={{ padding: "1rem 0" }}>
            <div className="search">
            <input 
                className="searchTerm"
                type="text"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
             />
            </div>
            <ul className="cards" style={{ padding: "1rem 0" }}>{furnitureItems}</ul>
        </div>
        
    
    )
}

export default Home;