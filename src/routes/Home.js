import React, { useState, useEffect } from "react";
import MemCard from "./MemCard";
import FilterBar from "./FilterBar";



function Home ({ 
        onAdd, 
        cartItems, 
        onRemove, 
        furniture, 
        filterFurniture, 
        handleSearch, 
        setFurnFilter, 
        sortBy, 
        onChangeSort }) {
    
// const [furniture, setFurniture] = useState([])
const [data, setData] = useState([])
const [sortType, setSortType] = useState('name');



  
// useEffect(() => {
//     fetch('http://localhost:3000/furniture')
//         .then((r) => r.json())
//         .then((furniture) => setFurniture(furniture))
// },[])

const furnitureItems = filterFurniture
    .map((furn) => {
    return <MemCard key={furn.id} furn={furn} onAdd={onAdd} />
    })  
   
// useEffect(() => {
//     const sortArray = type => {
//         const types = { 
//             name: 'name',
//             price: 'price',
//         };
//         const sortProperty = types[type];
//         const sorted = [...furniture].sort((a, b) => b[sortProperty] - a[sortProperty]);
//         console.log(sorted)
//         setData(sorted)
//     }
//     sortArray(sortType)
// },[sortType])
   
function handleSortChange(event) {
    onChangeSort(event.target.value);
    console.log(event.target.value)
  }




    return (
        <div className="main" style={{ padding: "1rem 0" }}>
            <div className="search">
            <input 
                className="searchTerm"
                type="text"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
             />
            <strong className="sort-by">Sort by:</strong>
            <label>
                <input
                autocomplete="off"
                type="radio"
                value="Alphabetically"
                name="sort"
                checkbox={sortBy === "Alphabetically"}
                onChange={handleSortChange}
                />
                Alphabetically
            </label>
            <label>
                <input
                autocomplete="off"
                type="radio"
                value="High"
                name="sort"
                checkbox={sortBy === "High"}
                onChange={handleSortChange}
                />
                Price High
            </label>
            <label>
                <input
                autocomplete="off"
                type="radio"
                value="Price"
                name="sort"
                checkbox={sortBy === "Price"}
                onChange={handleSortChange}
                />
                Price Low
            </label>
             <FilterBar setFurnFilter={setFurnFilter}/>
            </div>
            <ul className="cards" style={{ padding: "1rem 0" }}>{furnitureItems}</ul>
        </div>
        
    
    )
}

export default Home;