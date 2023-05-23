import { useState } from "react";
function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  let [list, setList] = useState([" "]);
  let addNewItem = () => {
    let inputTag = document.querySelector("#inputid");
    let inputValue = inputTag.value;
    let newList = [inputValue, ...list];
    setList(newList);
  };
  return (
    <div >
      <h1 className="bg-success">TODO</h1>
      <input type="text" placeholder="Type here...." id="inputid" />
      <input type="button" value="Add" onClick={addNewItem} />

      <hr />
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
export default App;