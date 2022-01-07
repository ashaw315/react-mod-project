import React from "react";


function SortSelect({setFurnFilter}) {
    return (
    <div className="sort-select">
        <select onChange={(e) => setSortType(e.target.value)} className="sort">
                <option value="price">Price</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
             </select>
      </div>
    );
}

export default SortSelect;