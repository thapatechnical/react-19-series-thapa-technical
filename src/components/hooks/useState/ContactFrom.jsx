import { useState } from "react";
import "./index.css";

export const ContactForm = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const contactData = {
    //   username,
    //   email,
    //   message,
    // };

    console.log(contacts);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={contacts.username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={contacts.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="password"
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={contacts.message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={handleInputChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
