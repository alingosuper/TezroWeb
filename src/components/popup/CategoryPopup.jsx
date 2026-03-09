import React from "react"

const categories = [
"Vendor",
"Driver",
"Delivery Boy",
"Hotel Manager",
"Shopkeeper"
]

function CategoryPopup({setCategory}){

 return(
  <div className="popup">

   <h2>Select Your Category</h2>

   {categories.map((c)=>(
    <button key={c} onClick={()=>setCategory(c)}>
      {c}
    </button>
   ))}

  </div>
 )
}

export default CategoryPopup
