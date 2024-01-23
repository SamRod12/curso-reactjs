import React from "react"
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import {GalacticStars} from './GalacticStars';
import "./App.css";
import "./CreateTodoButton.css";
import "./TodoItem.css";
import "./TodoCounter.css";
import "./TodoSearch.css";
import "./TodoList.css";
import "./GalacticStars.css";

const MemoizedGalacticStars = React.memo(GalacticStars);

function useLocalStorage(itemName, initialValue){
  const localStorageTodos = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageTodos){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
  }else{
      parsedItem = JSON.parse(localStorageTodos);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage("LIST_TODOS", []);

  const [searchValue,setSearchValue] = React.useState("");
  
  const searchedTodos = todos.filter(todo => (todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())));
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  
  
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=> todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  const createTodo = (text) => {
    const newTodos = [...todos];
    if (!newTodos.find(todo => todo.text.toLocaleLowerCase() === text.toLocaleLowerCase())){
      newTodos.push({
        text:text,
        completed: false
        });
        setSearchValue("");
    }
    
    saveTodos(newTodos);
    
  }
  return (
    <div className="contenedor">
      <div className="c-izquierda">
        
          <div className="contenedor-izquierdo">
            <div className="contenido-izquierdo">
              <TodoCounter completed={completedTodos} total={totalTodos}/>
              <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              />
              <CreateTodoButton onCreateTodo={() => createTodo(searchValue)}/>
            </div>
          </div>
          
      </div>
      <div className="c-derecha">
        
          <div className="contenedor-derecho">
            <div className="contenido-derecho">
              <TodoList >
                {searchedTodos.map(todo => (
                  <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
                ))}
              </TodoList >
            </div>
          </div>
        
          
        
      </div>
      <MemoizedGalacticStars />
    </div>
  );
}

export default App;
