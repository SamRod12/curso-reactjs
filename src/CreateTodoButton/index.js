import { FaPlus } from "react-icons/fa";
import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton(){
    const {onOpenModal} = React.useContext(TodoContext)
    return (
        <button className="CreateTodoButton" onClick={onOpenModal}>
            <span>
                <FaPlus />
            </span>
        </button>
    );
}

export {CreateTodoButton}