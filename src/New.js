export function New(props) {
  function onClick() {
    let elem = document.getElementById("input-text");

    let v = elem.value;
    if (v !== "") {
      props.onNewItem(v);
    }
    elem.value = "";
  }
  return (
    <div style={{ display: "flex" }}>
      <input
        className="form-control"
        style={{ maxWidth: "300px", background: "none" }}
        placeholder="Enter text"
        id="input-text"
      />
      <button
        className="btn btn-outline-secondary"
        style={{ marginLeft: "10px" }}
        onClick={onClick}
      >
        Add
      </button>
    </div>
  );
}
