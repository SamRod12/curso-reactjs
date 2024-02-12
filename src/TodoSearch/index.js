import "./TodoSearch.css";
import React from "react";
import { TodoContext } from "../TodoContext";
function TodoSearch()  {
const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
    return (
      <div className="input-container">
        <input  
        className="TodoSearch" 
        placeholder="Busca un TODO"
        value={searchValue}
        onChange={(event)=>{
          setSearchValue(event.target.value);          
        }}
        />
      </div>
      
  
    );
}

export {TodoSearch};