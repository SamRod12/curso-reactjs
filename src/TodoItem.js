import { FaRegCheckSquare , FaTimes  } from "react-icons/fa";


function TodoItem(props){
    return (
      <li className='TodoItem'>
        <span onClick={props.onComplete} className={`Icon Icon-check figure ${props.completed && "Icon-check--active"}`}>
        <FaRegCheckSquare />


        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span onClick={props.onDelete} className={`Icon Icon-delete figure`}>
          <FaTimes />
        </span>
      </li>
      
  
    );
  }
export {TodoItem};