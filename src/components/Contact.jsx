import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = ({ cart }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hsldulf",
        "template_zd9mkgp",
        form.current,
        "MzycEju2X270zHi3Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <Navbar cart={cart} />
      <form ref={form} onSubmit={sendEmail} style={{ marginTop: '100px' }}>
        <h2 className="title">Name</h2>
        <input type="text" name="user_name" />
        <h2 className="title">Email</h2>
        <input type="email" name="user_email" />
        <h2 className="title">Message</h2>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
