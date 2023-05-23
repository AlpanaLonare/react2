import { useState } from "react";
function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}
function EventDemo() {

  
  let [displayImage, setDisplayImage] = useState(
    "https://picsum.photos/id/237/300/300"
  );
  let Topview = () => {
    displayImage = "https://picsum.photos/id/228/300/300";
    // perform dom operation
    setDisplayImage(displayImage);
  };

  let Frontview = () => {
    displayImage = "https://picsum.photos/id/231/300/300";
    // perform dom operation
    setDisplayImage(displayImage);
  };
  let Sideview = () => {
    displayImage = "https://picsum.photos/id/239/300/300";

    setDisplayImage(displayImage);
  };
  return (
    <div>
      <h1>View</h1>
      <img src={displayImage} />

      <br />
      <input type="button" value="Top view" onClick={Topview} />
      <input type="button" value="Front view" onClick={Frontview} />
      <input type="button" value="Side view" onClick={Sideview} />
    </div>
  );
}
export default App;