import React from "react";
import "./contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Server response:", data); // Log the server response for debugging
        if (data && data.success) {
          alert("Data saved successfully");
        } else {
          throw new Error("Data not saved successfully");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert(
          "An error occurred while submitting the form. Please try again later."
        );
      });
  };

  return (
    <div className="contact-container" id="ct">
      <h2 className="contact-heading">
        <i className="fas fa-envelope"></i> Contact Us
      </h2>
      <div className="swimming-effect">
        <div className="swimmer"></div>
        <div className="wave"></div>
      </div>
      <p className="contact-info">
        For any inquiries or questions, please fill out the form below or
        contact me at amit192400@gmail.com.
      </p>
      {/* Contact Form */}
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNo">Contact No</label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      {/* Social Media Links */}
      <div className="social-media">
        <h3>Connect with us:</h3>
        <ul className="social-icons">
          <li>
            <a
              href="https://web.whatsapp.com//+918340616588"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/amit1924"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/your-facebook-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          {/* Add other social media links and icons here */}
          <li>
            <a
              href="https://www.youtube.com/your-youtube-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com/your-pinterest-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-pinterest"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/amit1924"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          {/* Add more social media links and icons here */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
