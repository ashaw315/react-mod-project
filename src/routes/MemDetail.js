import React,{ useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function MemDetail() {
    const [piece, setPiece] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


const { id } = useParams();
// const history = useNavigate();

// function handleBack() {
//     history.goBack();
// }


    useEffect(() => {
        fetch(`http://localhost:4000/furniture/${id}`)
        .then((r) => r.json())
        .then((piece) => {
            setPiece(piece);
            setIsLoaded(true);
        });
    }, [id]);

    if (!isLoaded) return <h2>Loading...</h2>;

    console.log(piece)



const {name, category, image, designer, materials, price, about} = piece

return (
    <section>
    <div className="project-detail box">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>{about}</p>
        <Link to="/furniture">
          Go Back
        </Link>
      </div>
    </div>
  </section>
)

}

export default MemDetail;
