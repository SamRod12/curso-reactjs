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
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import {TodoForm} from "../TodoForm"
//import { TodoSearchLoading } from "../TodoSearchLoading";
const MemoizedGalacticStars = React.memo(GalacticStars);

function AppUI() {
  const {
    
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
    
  } = React.useContext(TodoContext)
  return (
    
            <div className="contenedor">
              <div className="c-izquierda">
                
                  <div className="contenedor-izquierdo">
                    <div className="contenido-izquierdo">
                      <TodoCounter />
                      <TodoSearch/>
                      <CreateTodoButton />
                    </div>
                  </div>
                  
              </div>
              <div className="c-derecha">
                
                  <div className="contenedor-derecho">
                    <div className="contenido-derecho">
                    
                      <TodoList >
                        {loading && <TodoLoading/>}
                        {error && <TodoError/>}
                        {(!loading && searchedTodos.length === 0 ) && <EmptyTodo/>}
                        
                        {searchedTodos.map(todo => (
                          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)}/>
                        ))}
                      </TodoList >
                    </div>
                  </div>
                
                  
                
              </div>
              <MemoizedGalacticStars />
              {openModal && (
                <Modal>
                  <TodoForm/>
                </Modal>
              )}
            
          </div>

      
  );
}
export { AppUI };