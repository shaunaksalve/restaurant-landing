import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Enter e-mail id" />
        <input type="date" />
        <input type="submit" value="BOOK NOW" />
      </form>
    </div>
  );
}

export default Contact;
