import React, { useState } from "react";

const Recherche = ({setInputValue }) =>{



return (
    <div>
 <input type="text" placeholder="search" onChange={(event)=>setInputValue(event.target.value) } />
 
    </div>
);

}




export default Recherche ;