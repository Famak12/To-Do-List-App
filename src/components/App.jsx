import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    setItems(prevValue => prevValue.filter((items, key) => key !== id));
    // console.log(id);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
           <List key={index} id={index} text={todoItem} onCheck={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
