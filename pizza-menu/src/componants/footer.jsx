import React from "react";

function Footer() {
  const hour = new Date().getHours();
  // console.log(new Date().toLocaleTimeString());
  let open = 10;
  let close = 24;

  let isOpen = hour >= open && hour <= close;

  return (
    <footer className="footer">
      <p>
        {" "}
        {new Date().toLocaleTimeString()}{" "}
        {isOpen ? (
          <span> We are currently open </span>
        ) : (
          <span> See you tommorrow between 10 AM - 12 PM </span>
        )}{" "}
      </p>
    </footer>
  );
}

export default Footer;
