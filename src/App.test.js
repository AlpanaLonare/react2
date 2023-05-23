import { useState } from "react";
import { useState, useRef } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}
// MAP OPERATOR
// <h1>Delhi</h1>
function EventDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["todo1"]);

  // Member Funcn
  let addNewItem = () => {
    // We should not use document object
    let inputTag = document.querySelector("#inputid");
    let inputValue = inputTag.value;
    console.log(inputRef.current);

    let newList = [inputValue, ...list];
    setList(newList);
    let newValue = inputRef.current.value;
    setList([newValue, ...list]);

    inputRef.current.value = "";
  };

  // UI
  return (
    <div>
      <h1>List Demo </h1>

      <input type="text" placeholder="Enter Todo" id="inputid" />
      <input type="text" placeholder="Enter Todo" ref={inputRef} />
      <input type="button" value="Add new Item" onClick={addNewItem} />

      <hr />
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
