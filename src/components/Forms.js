import React, { useState } from "react";

function Forms() {
  let [count, setCount] = useState([1]);

  function handelClick() {
    setCount([...count, count.length + 1]);
  }

  function deleting(id, e) {
    e.preventDefault();
    setCount(count.filter((val) => val !== id));
  }

  function submitting(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let final = [];

    for (let val of count) {
      let name = formData.get(`name`);
      let age = formData.get(`age`);

      if (name && age) {
        final.push({ name, age: Number(age) });
      }
    }

    console.log(final); 
  }

  return (
    <div>
      <form onSubmit={submitting}>
        {count.map((val) => (
          <div key={val}>
            <input
              placeholder="Name"
              name={`name`}
            />
            <input
              placeholder="Age"
              name={`age`}
            />
            <button onClick={(e) => deleting(val, e)}>Remove</button>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      <button onClick={handelClick}>Add More...</button>
    </div>
  );
}

export default Forms;
