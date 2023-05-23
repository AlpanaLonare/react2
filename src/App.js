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
  let [displayImage, setDisplayImage] = useState(
    "https://picsum.photos/id/230/300/300"
  );

  let likeMe = () => {
    counter = counter + 1;
  
    setCounter(counter);
  };
  let changeImage = () => {
    displayImage = "https://picsum.photos/id/238/300/300";
    setDisplayImage(displayImage);
  };

  let resetImage = () => {
    displayImage = "https://picsum.photos/id/241/300/300";

    setDisplayImage(displayImage);
  };

  return (
    <div >
      <h1>Like</h1>
      <img src={displayImage} />
      <input className="d-flex justify-content-between"type="button" value="Like Me" onClick={likeMe} />
      <br />
      <input type="button" value="Chnage Image" onClick={changeImage} />
      <input type="button" value="Reset Image" onClick={resetImage} />
    </div>
  );
}
export default App;