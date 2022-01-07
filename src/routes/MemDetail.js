import React,{ useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

function MemDetail({ onAdd }) {
    const [furniture, setFurniture] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    

const { id } = useParams();
// const history = useNavigate();

// function handleBack() {
//     history.goBack();
// }


    useEffect(() => {
        fetch(`https://floating-cove-91761.herokuapp.com/furniture/${id}`)
        .then((r) => r.json())
        .then((furniture) => {
            setFurniture(furniture);
            setIsLoaded(true);
        });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;
    const {name, category, image, designer, materials, price, about} = furniture

    console.log(furniture)

    console.log(name)



return (
    <section className="whole-detail">
        <div className="project-image">
          <img src={image} alt={name} />
        </div>
  
        <div className="furn-details">
          <p className="price-detail">{name}</p>
          <p className="price-detail">${price}</p> 
          <p>by {designer}</p>
          <p>{category}</p>
          <p>{materials}</p>
          <Accordion className="accordian-detail">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography><strong>About</strong></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                <p>{about}</p>
                </Typography>
        </AccordionDetails>
      </Accordion>
          <Button className="button-card" onClick={() => onAdd(furniture)}>Add To Cart</Button><Link to="/furniture">
          <Button className="button-go-back">Go Back</Button>
        </Link>

          
          <div>
      </div>
    </div>
  </section>
)

}

export default MemDetail;
