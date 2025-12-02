import React, { useState } from "react";

function Forms() {
  let [count, setCount] = useState([1]);

  function handelClick() {
    setCount([...count, count.length + 1]);
  }
  function deleting(id) {
    setCount(count.filter((val) => val !== id));
  }
  function submitting(e){
    e.preventDefault();
    console.dir(e.target)
  }

  return (
    <div>
      <form onSubmit={submitting}>
        {count.map((val)=>(
        <div key={val}>
           <input placeholder="Name" name="name" />
           <input placeholder="Age" name="age" />
          <button onClick={()=>deleting(val)}>Remove</button>
        </div>
      ))}
      <button>Submit</button>
      </form>
      <button onClick={handelClick}>Add More...</button>
    </div>
  );
}

export default Forms;
