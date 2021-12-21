import { CgRemoveR } from "react-icons/cg";

export function List(props) {
  let todoItem = [];

  function handleDelete(i) {
    props.onDelete(i);
  }

  for (let i = 0; i < props.todos.length; i++) {
    todoItem.push(
      <li
        style={{
          
          color: "#7f7097",
          fontSize: "13pt",
          margin: "5px 0",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <CgRemoveR
          style={{ cursor: "pointer" }}
          onClick={function () {
            handleDelete(i);
          }}
        />

        {props.todos[i].text}
      </li>
    );
  }

  return <ul style={{ listStyle: "none", padding: "0" }}>{todoItem}</ul>;
}
