// Footer.js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";

const Footer = ({ cart }) => {
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
      <footer>
    <div className="container">    
    <p style={{fontFamily: 'fantasy', fontSize: '30px' , fontWeight: 'bold', color: 'white'}}>You can send us a message down below in the form and feel free to give us a feedback !</p>       
      <form ref={form} onSubmit={sendEmail} style={{ marginTop: '100px' }}>
        <h2 className="title">Name</h2>
        <input type="text" name="user_name" />
        <h2 className="title">Email</h2>
        <input type="email" name="user_email" />
        <h2 className="title">Message</h2>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />        
      </form>
      <p className="footertxt">&copy;2024 - Riders Zone <img src='/images/flag.png' className='flag'></img></p>   
    </div>
  </footer>
  );
};

export default Footer;
