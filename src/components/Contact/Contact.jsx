import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const success = () => {
    toast.success("Submitted", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const failed = () => {
    toast.error("Failed to submit", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await emailjs.sendForm(
      "service_khjz5u6",
      "template_9ohw6g8",
      form.current,
      "n9m99NQ1wYO0xcJXo"
    );

    const result = response.text;
    if (result === "OK") {
      success();
      console.log("Successful!!");
    } else {
      failed();
      console.log("Failed!!");
    }
    // console.log(response);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contacts-main-container" id="contact">
      <div className="contacts-container">
        <h1>Get in touch</h1>
        <hr />

        <div className="contact-form-container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container textarea">
              <label htmlFor="message">Message</label>
              <textarea
                name="Message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
