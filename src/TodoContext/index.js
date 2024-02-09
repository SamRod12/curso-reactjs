import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();


function TodoProvider({children}){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("LIST_TODOS", []);
    
    const [searchValue,setSearchValue] = React.useState("");
    const [addValue,setAddValue] = React.useState("");
    const[openModal, setOpenModal] = React.useState(false);
  
  const searchedTodos = todos.filter(todo => (todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())));
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  /*
  console.log("log 1")
  React.useEffect(() => {
    console.log("loooooog 2");
  },[totalTodos]);
  console.log("log 3")
  */

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
    if (!newTodos.find(todo => todo.text.toLocaleLowerCase() === text.toLocaleLowerCase()) && text !== ""){
      newTodos.push({
        text:text,
        completed: false
        });
        setAddValue("");
        
        setOpenModal(!openModal);
    }
    
    saveTodos(newTodos);
    
  }
  const openCloseModal = (value) => {
    setAddValue("");
    setOpenModal(!value);
    
  }
  const onOpenModal = () => openCloseModal(openModal)
  const onCreateTodo = () => createTodo(addValue)

    return (
        <TodoContext.Provider 
        value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            addValue,
            setAddValue,
            searchedTodos,
            completeTodo,
            onCreateTodo,
            onOpenModal,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export {TodoContext, TodoProvider}