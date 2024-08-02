import { useState } from "react";
import "../Hooks.css";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with the controlled state (name)
    // const dataValue = document.querySelector("#inputName").value;
    // console.log(dataValue);
    console.log(name);
  };

  return (
    <section className="container state-container">
      <h1>unControlled Component</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ControlledForm;
