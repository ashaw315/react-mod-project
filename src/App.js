import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FurnitureList from "./FurnitureList";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import History from "./routes/History";
import Create from "./routes/Create";
import Sell from "./routes/Sell";
import Cart from "./routes/Cart";
import MemDetail from "./routes/MemDetail";
import SplashPage from "./routes/SplashPage";
import './App.css'

function App() {
  const [furniture, setFurniture] = useState([])
  const [page, setPage] = useState("/")
  const [cartItems, setCartItems] = useState([])
  const [search, setSearch] = useState("")
  const [furnFilter, setFurnFilter] = useState("All")
  const [data, setData] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically");
  

  useEffect(() => {
    fetch('http://localhost:3000/furniture')
      .then((r) => r.json())
      .then((furniture) => setFurniture(furniture))
  },[])


  const onAdd = (furniture) => {
    const exist = cartItems.find((x) => x.id === furniture.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === furniture.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...furniture, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  const filterFurniture = furniture
    .filter((f) => {
      if(search === "") {
        return true;
      } return f.name.toLowerCase().includes(search.toLowerCase())  || f.designer.toLowerCase().includes(search.toLowerCase())
    })
    .filter((f) => {
      return furnFilter === "All" || f.category === furnFilter;
      })
    .sort((furniture1, furniture2) => {
  if (sortBy === "Alphabetically") {
    return furniture1.name.localeCompare(furniture2.name);
  } else if (sortBy === "High") {
    return furniture2.price - furniture1.price;
  } else {
    return furniture1.price - furniture2.price
  }
});

// const filteredFurniture = sortedFurniture.filter(
//   (stock) => stock.type === filterBy
// );

function handleSearch (searchFurniture) {
    setSearch(searchFurniture);
}

function handleAddItem(newItem) {
  setFurniture([...furniture, newItem]);
}


// useEffect(() => {
//   const sortArray = type => {
//       const types = { 
//           name: 'name',
//           price: 'price',
//       };
//       const sortProperty = types[type];
//       const sorted = [...furniture].sort((a, b) => b[sortProperty] - a[sortProperty]);
//       console.log(sorted)
//       setFurniture(sorted)
//   }
//   sortArray(sortType)
// },[sortType])






  return (
    <div >
      <a className="header" href="/" style={{ textDecoration: 'none', color: "black" }}>memphis</a>
      <Navbar countCartItems={cartItems.length}/>
      <Routes>
        <Route path="/" element= {<SplashPage />}/>
        <Route path="/furniture/:id" element={<MemDetail furniture={furniture} onAdd={onAdd}/>} />  
        <Route path="/furniture" element={
          <Home 
            onAdd={onAdd} 
            cartItems={cartItems} 
            handleSearch={handleSearch}
            onRemove={onRemove}
            furniture={furniture}
            setFurnFilter={setFurnFilter} 
            filterFurniture={filterFurniture}
            sortBy={sortBy}
            onChangeSort={setSortBy}/>} 
            /> 
        <Route path="/history" element={<History />} />
        <Route path="/create" element={<Create />} />
        <Route path="/sell" element={<Sell onAddNewItem={handleAddItem}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>} />
      </Routes>

      
      {/* <FurnitureList furniture={furniture}/> */}
    </div>
  );
}

export default App;
