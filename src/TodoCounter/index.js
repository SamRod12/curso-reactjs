import "./TodoCounter.css";
import React from "react";
import { TodoContext } from "../TodoContext";
function TodoCounter(){
const {
  completedTodos: completed,
  totalTodos: total
} = React.useContext(TodoContext)
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
  
    );
  }

export {TodoCounter};