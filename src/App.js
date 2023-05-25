import { useState } from "react";
function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}
function EventDemo() {
 
  let [counter, setCounter] = useState(100);
  let likeMe = () => {
    alert();
  };
  let likeMe1 = (e) => {
    console.log(e);
    console.log(e.target);
  };
    counter = counter + 1;
  let likeMe2 = (p1) => {
    console.log(p1);
  };
  let likeMe3 = (e, p1) => {
    console.log(p1);
    console.log(e);
    setCounter(counter);
  };
  return (
    <div>
      <img src="https://picsum.photos/id/237/300" alt="" />
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
      <input type="button" value="Like Me 1" onClick={likeMe1} />

      {/** For User Defined param */}
      <input type="button" value="Like Me 2" onClick={() => likeMe2("data")} />

      {/** Default Param + User Defined Param */}
      <input
        type="button"
        value="Like Me 3"
        onClick={(e) => likeMe3(e, "data")}
      />
    </div>
  );
}
export default App;
