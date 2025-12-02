import React, { useState } from "react";

function Forms() {
  const [fields, setFields] = useState([{ id: 1, name: "", age: "" }]);

  function addField() {
    setFields([...fields, { id: fields.length + 1, name: "", age: "" }]);
  }

  function deleteField(id, e) {
    e.preventDefault();
    setFields(fields.filter((f) => f.id !== id));
  }

  function handleChange(id, key, value) {
    setFields(
      fields.map((f) =>
        f.id === id ? { ...f, [key]: value } : f
      )
    );
  }

  function submitting(e) {
    e.preventDefault();

    const formatted = fields.map((f) => ({
      name: f.name,
      age: Number(f.age), // FIX: convert to Number
    }));

    console.log(formatted);
  }

  return (
    <div>
      <form onSubmit={submitting}>
        {fields.map((f) => (
          <div key={f.id}>
            <input
              placeholder="Name"
              value={f.name}
              onChange={(e) =>
                handleChange(f.id, "name", e.target.value)
              } name="name"
            />

            <input
              placeholder="Age"
              value={f.age}
              onChange={(e) =>
                handleChange(f.id, "age", e.target.value)
              } name="age"
            />

            <button onClick={(e) => deleteField(f.id, e)}>
              Remove
            </button>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      <button onClick={addField}>Add More...</button>
    </div>
  );
}

export default Forms;
