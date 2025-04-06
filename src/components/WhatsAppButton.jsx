import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <WhatsAppIcon fontSize="large" />
    </a>
  );
};

export default WhatsAppButton;
