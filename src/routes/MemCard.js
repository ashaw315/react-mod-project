import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function MemCard({furn, onAdd }) {

  const {id, name, category, image, designer, materials, price, about} = furn

  const path = `/furniture/${id}`;

    return (
        <li className="card">
        <div className="project-image">
          <img src={image} alt={name} />
        </div>
  
        <div className="details">
          <h4>{name}</h4>
          <h4>by {designer}</h4>
          <p>{category}</p> 
          <p>${price}</p> 
          <Link to={path}>See More</Link>
          <div>
            <Button variant="container" color='primary' className="button-card" onClick={() => onAdd(furn)}>Add To Cart</Button>
          </div>
        </div>
      </li>
    );
  }
export default MemCard;
