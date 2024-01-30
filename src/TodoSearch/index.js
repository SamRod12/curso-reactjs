import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue})  {

  
    return (
      <div className="input-container">
        <input  
        className="TodoSearch" 
        placeholder="Busca o agrega un TODO"
        value={searchValue}
        onChange={(event)=>{
          setSearchValue(event.target.value);          
        }}
        />
      </div>
      
  
    );
}

export {TodoSearch};