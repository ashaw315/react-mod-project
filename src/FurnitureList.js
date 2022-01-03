import React from "react";

function FurnitureList({furniture}) {

    console.log(furniture)

    const furnitureInfo = furniture.map((furn) => {
        return (
            <div key={furn.id}>
                <li>{furn.name}</li>
            </div>
                   )
    })

    console.log(furniture.name)

//   const toyInfo = toys.map((toy) => {
//       return (
//           <div key={toy.id}>
//               <li>{toy.name}</li>
//               <img src={toy.image} />
//           </div>
//       )
//   })

    return(
        <div>
            {furnitureInfo}
        </div>
    )
}
export default FurnitureList;