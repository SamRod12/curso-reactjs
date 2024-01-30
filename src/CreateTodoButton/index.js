import { FaPlus } from "react-icons/fa";

import "./CreateTodoButton.css";

function CreateTodoButton(props){
    return (
        <button className="CreateTodoButton" onClick={props.onCreateTodo}>
            <span>
                <FaPlus />
            </span>
        </button>
    );
}

export {CreateTodoButton}