import React from "react";
import styled from "styled-components"

const Button = styled.button`
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

function FilterBar({setFurnFilter}) {
    return (
    <div className="filter">
        <Button onClick={() => setFurnFilter("All")}>All</Button> 
        <Button onClick={() => setFurnFilter("Seating")}>Seating</Button> 
        <Button onClick={() => setFurnFilter("Lighting")}>Lighting</Button> 
        <Button onClick={() => setFurnFilter("Tables")}>Tables</Button> 
        <Button onClick={() => setFurnFilter("Decorative")}>Decorative</Button>
      </div>
    );
}

export default FilterBar;