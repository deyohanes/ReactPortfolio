import React, { useRef } from "react";
import "./contacts.css";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
// import { BsTelegram } from "react-icons/bs";
function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzdqfeq",
        "template_fzi8vta",
        form.current,
        "HzBo1rfQrDlFx6uuS"
      )
      .then(
        e.target.reset(),
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jonederese@gmail.com</h5>
            <a href="mailto:jonederese@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Yohanes Derese</h5>
            <a
              href="https://www.linkedin.com/in/yohanes-derese-008b22246/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          {/* <article className="contact_option">
            <BsTelegram className="contact_option-icon" />
            <h4>Telegram</h4>
            <h5>t.me</h5>
            <a
              href="https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={chat_id}&text={notification_text} "
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article> */}
        </div>

        <form onSubmit={sendEmail} ref={form}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" cols="30" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
