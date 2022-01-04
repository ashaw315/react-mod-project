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
import './App.css'

function App() {
  const [furniture, setFurniture] = useState([])
  const [page, setPage] = useState("/")
  const [cartItems, setCartItems] = useState([])
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    fetch('https://floating-cove-91761.herokuapp.com/furniture')
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


  const filterFurniture = furniture.filter((f) => {
    if(search === "") {
        return true;
    } return f.name.toLowerCase().includes(search.toLowerCase())  || f.designer.toLowerCase().includes(search.toLowerCase())
})

function handleSearch (searchFurniture) {
    setSearch(searchFurniture);
}

function handleAddItem(newItem) {
  setFurniture([...furniture, newItem]);
}



  return (
    <div >
      <h1 className="header">memphis</h1>
      <Navbar countCartItems={cartItems.length}/>
      <Routes>
        <Route path="/furniture" element={
          <Home 
            onAdd={onAdd} 
            cartItems={cartItems} 
            handleSearch={handleSearch}
            onRemove={onRemove} 
            filterFurniture={filterFurniture}/>} 
            />
        <Route path="/furniture/:id" component={MemDetail} />   
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
