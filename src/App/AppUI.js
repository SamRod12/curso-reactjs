import React from "react"
import {GalacticStars} from '../GalacticStars';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from "../TodoLoading";
import { EmptyTodo } from "../EmptyTodo";
import { TodoError } from "../TodoError";
const MemoizedGalacticStars = React.memo(GalacticStars);

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    createTodo,
    loading,
    error
}) {
  
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
                {loading && <TodoLoading/>}
                {error && <TodoError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodo/>}
                
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
export { AppUI };