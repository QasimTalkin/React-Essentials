import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// 

export default function SampleDom() {
  const [count, setCount] = useState(0)
  setInterval(()=>setCount(count+1), 1000)
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Welcome this is react dom 
      </h1>
      <div className="class1">
        child
        <div className="class2">grand child {count}</div>
      </div>
    </div>
  );
}


