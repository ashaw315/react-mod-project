import React,{ useState } from "react";

function Sell ({ onAddNewItem }) {
const [name, setName]= useState("")
const [category, setCategory] = useState("")
const [image, setImage] = useState("")
const [designer, setDesigner] = useState("")
const [materials, setMaterials] = useState("")
const [price, setPrice] = useState("")
const [about, setAbout] = useState("")

function handleSubmitItem(e){
    e.preventDefault(e);
    const itemData = {
        name: name, 
        category: category,
        image: image,
        designer: designer,
        materials: materials,
        price: price,
        about: about,
    }
    fetch('https://floating-cove-91761.herokuapp.com/furniture', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
    })
        .then((r) => r.json())
        .then((newItem) => onAddNewItem(newItem))
        
}

    return (
        <section>
            
                <form onSubmit={handleSubmitItem} className="form">
                <h3 style={{color: "purple"}}>Do you own a piece by the Memphis Group you would like sell with us?</h3>
            <h3 style={{color: "green"}}>Please fill out and submit the form below to list your item.</h3>
                    <h3 style={{color: "orange"}}>New Item</h3>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="category">Category</label>
                    <select
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Seating">Seating</option>
                        <option value="Lighting">Lighting</option>
                        <option value="Seating">Tables</option>
                        <option value="Seating">Decorative</option>
                    </select>
                    <label htmlFor="designer">Designer</label>
                    <input
                    type="text"
                    name="designer"
                    value={designer}
                    onChange={(e) => setDesigner(e.target.value)}
                    />
                    <label htmlFor="materials">Materials</label>
                    <input
                    type="text"
                    name="materials"
                    value={materials}
                    onChange={(e) => setMaterials(e.target.value)}
                    />
                    <label htmlFor="price">Price</label>
                    <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor="image">Image</label>
                     <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                    <label htmlFor="about">About</label>
                    <textarea
                     id="about"
                     name="about"
                     value={about}
                     onChange={(e) => setAbout(e.target.value)}
                    />
                    <button type="submit">Add Item</button>
                </form>
            </section>
    )
}

export default Sell;