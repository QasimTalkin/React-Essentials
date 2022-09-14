import React, { useState } from "react";
import PokeGallery from "../Molecule/PokeGallery";
const DEMO_MODE = false;
export default function About() {
  let seconds = 0;

  function startStopwatch() {
    setInterval(() => {
      console.log(seconds);
      seconds += 1;
    }, 1000);
  }
  console.log(process.env);
  const [count, setCount] = useState(0);
  let [limit, setLimit] = useState(7);
  
  
  return (
    // give section some padding and background color
    <section className="bg-emerald-20 px-10">
      {DEMO_MODE && (
        <>
          <div>
            {seconds}
            <button className="bg-red-500" onClick={startStopwatch}>
              Start
            </button>
          </div>
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        </>
      )}

      <h1 className="text-3xl font-bold underline text-center">Welcome </h1>
      {/* large input box to set the limit */}
      <div className="grid gap-2 p-10">
        <input type="number" className="w-full border-2 border-gray-300 p-2" onChange={(e) => setLimit(parseInt(e.target.value))}/>
      </div>
      <PokeGallery limit={limit}/>
      {/* <img
        src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
        style={{ width: "100%" }}
        alt="cover pic"
        id="cover-pic"
      /> */}
    </section>
  );
}
