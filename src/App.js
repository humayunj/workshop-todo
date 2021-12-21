import logo from "./logo.svg";
import "./App.css";
import { List } from "./List";
import { New } from "./New";
const { useState } = require("react");
function App() {
  var [todos, setTodos] = useState([]);

  function handleNewItem(item) {
    setTodos(
      todos.concat({
        text: item,
        id: Date.now(),
      })
    );
  }
  function handleDelete(index) {
    var newTodos = [];
    for (var i = 0; i < todos.length; i++) {
      if (i !== index) {
        newTodos.push(todos[i]);
      }
    }
    setTodos(newTodos);
  }
  return (
    <div
      style={{
        margin: "0 auto",
        width: "min(90vw, 500px)",
        background: "rgba(255,255,255,0.5)",
        boxShadow:"0px 3px 10px 3px #9991",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: "#7f7097", fontSize: "20pt", marginBottom: "20px" }}>
        Todo Town
      </h1>
      <List onDelete={handleDelete} todos={todos}></List>
      <New onNewItem={handleNewItem} />
    </div>
  );
}

export default App;
