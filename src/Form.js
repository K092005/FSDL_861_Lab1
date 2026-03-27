import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email) {
      setError("All fields required");
    } else if (!data.email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Form</h2>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <button type="submit">Submit</button>

      <p style={{ color: "red" }}>{error}</p>
    </form>
  );
}

export default Form;