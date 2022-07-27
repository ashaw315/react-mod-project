import React,{ useState } from "react";
import styled from "styled-components"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const ButtonA = styled.button`
    background: white;
    padding: 10px;
    margin-right: 20px;
    border: 2px solid black;
    transition: 500ms ease;
    color: black;
    text-decoration: none;
    font: 1rem Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    box-shadow: 2px 2px;

    

    &:hover {
        background: black;
        color: white;
        border: none;
        transform: scale(1.2);
        box-shadow: 2.2px 2.2px grey;
    }
    `;


function Sell ({ onAddNewItem }) {
const [name, setName]= useState("")
const [category, setCategory] = useState("")
const [image, setImage] = useState("")
const [designer, setDesigner] = useState("")
const [materials, setMaterials] = useState("")
const [price, setPrice] = useState(0)
const [about, setAbout] = useState("")

const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


function handleSubmitItem(e){
    e.preventDefault(e);
    const itemData = {
        name: name, 
        category: category,
        image: image,
        designer: designer,
        materials: materials,
        price: parseFloat(price),
        about: about,
    }
    setName("")
    setCategory("")
    setImage("")
    setDesigner("")
    setMaterials("")
    setPrice("")
    setAbout("")

    fetch('http://localhost:3000/furniture', {
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
                <h3 style={{color: "purple"}}>Own a piece by the Memphis Group you would like sell with us?</h3>
            <h3 style={{color: "green"}}>Fill out and submit the form below to list your item.</h3>
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
                    <label htmlFor="image">Image Url</label>
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
                    <ButtonA className="sell-button" type="submit" onClick={handleOpen}>Add Item</ButtonA>
                </form>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Thank you for your submission!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Your item is now listed.
                        </Typography>
                        </Box>
                    </Modal>
            </section>
    )
}

export default Sell;