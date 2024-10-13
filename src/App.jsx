import { useState } from "react";
import Rectangle from "./components/rectangle";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="entirepage">
        <div className="page1">
          <div className="pet1">
            <img src="../src/assets/pet1.png" alt="Pet Image" />
          </div>
          <div>
            <p className="historyof">History Of</p>
            <p className="alabay">ALABAY</p>
            <p className="paratex">
              The Central Asian Shepherd Dog, also known as Alabay, has been a
              guardian of livestock and property for centuries. Originating from
              Central Asia, these dogs are renowned for their courage, strength,
              and loyalty.
            </p>
          </div>
        </div>

        <div className="page2">
          <div>
            <span>ALL</span>
            <span className="hoveredtext">PHOTOS</span>
            <span>VIDEOS</span>
          </div>
          <div className="rectcomp">
            <Rectangle name={"PHOTO 1"}/>
            <Rectangle name={"PHOTO 2"}/>
            <Rectangle name={"PHOTO 3"}/>
          </div>
        </div>

        <div className="page3">
          <div>
            <p className="projvis">Project Vision</p>
          </div>
          <div>
            <img src="../src/assets/doggygroup.png" alt="Doggy Group PNG" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
