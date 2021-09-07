import React from 'react'

function Category({category}) {
 
    return (
        <div>
            {/* <select>
                <option onClick={()=>category("electronics")}>electronics</option>
            </select> */}
            <h2>Category</h2>
            <p onClick={()=>category("electronics")}>electronics</p>
            <p onClick={()=>category("jewelery")}>jewelery</p>
            <p onClick={()=>category("men's clothing")}>men's clothing</p>
            <p onClick={()=>category("women's clothing")}>women's clothing</p>
        </div>
    )
}

export default Category
