import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppChat.css";

function WhatsAppChat() {
  return (
    <div className="whatsapp-wrapper">
      <a
        href="https://wa.me/917730870763"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-container"
      >
        <div className="whatsapp-icon">
          <FaWhatsapp />
        </div>
        <div className="whatsapp-text">
          <strong>Sales</strong>
        </div>
      </a>

      <a
        href="https://wa.me/918520823389"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-container"
      >
        <div className="whatsapp-icon">
          <FaWhatsapp />
        </div>
        <div className="whatsapp-text">
          <strong>Support</strong>
        </div>
      </a>
    </div>
  );
}

export default WhatsAppChat;