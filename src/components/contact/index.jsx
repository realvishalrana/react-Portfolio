import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wgdj616",
        "template_qv8g34m",
        formRef.current,
        "xoeYBSGW6DUccQNrF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8141923360
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              isvishalrana@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Surat, Gujarat, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Ask any question
          </p>
          <form ref={formRef} onSubmit={handlesubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            ></textarea>
            <button>Submit</button>
          </form>
          <div className="Thnk">{done && "Thank you..😎😎"}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
