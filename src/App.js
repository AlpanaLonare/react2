import { useState } from "react";
function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  
  let [list, setList] = useState(["todo1"]);

  
  let addNewItem = () => {
    let inputTag = document.querySelector("#inputid");
    let inputValue = inputTag.value;
    let newList = [inputValue, ...list];
    setList(newList);
  };

  return (
    <div>
      <h1>TODO </h1>

      <input type="text" placeholder="Enter Todo" id="inputid" />
      <input type="button" value="Add new Item" onClick={addNewItem} />

      <hr />
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
export default App;