import React from "react";
import "../App.css";
import styled from "styled-components"


const Input = styled.input`
    background: white;
    padding: 10px;
    margin-right: 20px;
    border: 2px solid black;
    transition: 500ms ease;
    color: black;
    text-decoration: none;
    font: 1rem Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    box-shadow: 2px 2px;
    }

	&:hover {
        background: black;
        color: white;
        border: none;
        transform: scale(1.2);
        box-shadow: 2.2px 2.2px grey;
    `;

const Menu = ({ setLineColor, setLineWidth,
setLineOpacity }) => {

	

return (
	<div className="Menu">
	<label>Brush Color </label>
	<Input
		type="color"
		onChange={(e) => {
		setLineColor(e.target.value);
		}}
	/>
	<label>Brush Width </label>
	<input
		type="range"
		min="3"
		max="100"
		onChange={(e) => {
		setLineWidth(e.target.value);
		}}
	/>
	<label>Brush Opacity</label>
	<input
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
		setLineOpacity(e.target.value / 100);
		}}
	/>
	</div>
);
};

export default Menu;