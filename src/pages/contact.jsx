import "./contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="titlediv">
        <h1 className="SideTitle">Lets Make</h1>
        <h1 className="SideTitle">this Happen.</h1>
      </div>


      <div className="contactContent verticalLayout">
        <div className="contactside">
          <h1 className="subtitle">Contact Me</h1>
          <p className="info">Phone Number: <a href="tel:+447742015027">+44 7742015027</a></p>
          <p className="info">Email: <a href="mailto:yusufabeed@outlook.com">yusufabeed@outlook.com</a></p>
          <p className="info">GitHub: <a href="https://github.com/BinaryX101">BinaryX101</a></p>
        </div>

        <form className="contactForm">
          <label>Name</label>
          <input type="text" placeholder="e.g. John Smith" required />

          <label>Email address</label>
          <input type="email" placeholder="e.g. example@gmail.com" required />

          <label>Message</label>
          <textarea placeholder="Let me know what you need" required></textarea>

          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
