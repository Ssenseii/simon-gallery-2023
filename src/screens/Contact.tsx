import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k51bso9",
        "template_7e3t07s",
        form.current,
        "l596VIqccy6B-uih8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__title">
        <h2>Contact</h2>
        <div className="underline"></div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact__input">
        <input
          name="user_email"
          className="contact__input-email"
          type="email"
          placeholder="Email..."
        />
        <textarea
          name="user_message"
          className="contact__input-message"
          placeholder="Message..."
        />
        <input className="contact__input-submit" type="submit" />
      </form>

      <div className="contact__social">
        <div className="contact__social-title">
          <h2>Social Links</h2>
          <div className="underline"></div>
        </div>
        <div className="contact__social-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/__ssensseiii/"
          >
            Instagram
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ssenseii"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
