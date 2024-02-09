import React from "react";

import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
function TodoForm(){

    const {onCreateTodo, onOpenModal, addValue, setAddValue} = React.useContext(TodoContext)
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value={addValue}
             placeholder="Agregar TODO"
             onChange={(event)=>{
                setAddValue(event.target.value);          
              }}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type=""
                className="TodoForm-button TodoForm-button--cancel" 
                onClick ={onOpenModal}>
                    Cancel
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add" 
                onClick={onCreateTodo}>
                    Agregar Todo
                </button>
            </div>
            

        </form>
    )
}

export {TodoForm}