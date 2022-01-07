import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"


const Button = styled.button`
    background: white;
    padding: 10px;
    margin-right: 20px;
    border: 2px solid black;
    transition: 500ms ease;
    color: dodgerblue;
    text-decoration: none;
    font: 1rem Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 12px;
    box-shadow: 2px 2px black;

    &:hover {
        background: dodgerblue;
        color: white;
        border: dodgerblue;
        transform: scale(1.2);
        box-shadow: 2.2px 2.2px turquoise;
    }
    `;


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
          <h5>by {designer}</h5>
          <h5>${price}</h5>
          <Link to={path}>
            <Button className="button-cardA">See More</Button>
          </Link><Button className="button-card" onClick={() => onAdd(furn)}>Add To Cart</Button>
        </div>
      </li>
    );
  }
export default MemCard;
