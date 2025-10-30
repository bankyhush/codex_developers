"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  // Replace with your WhatsApp number (with country code, no "+")
  const phoneNumber = "2349071853515";
  const message = "Hi! I’d like to learn more about your services.";

  const handleClick = () => {
    // Opens WhatsApp chat link
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="
      cursor-pointer
        fixed
        bottom-5
        right-5
        z-50
        bg-blue-600
        dark:bg-blue-900
        hover:bg-blue-500
        dark:hover:bg-blue-800
        text-white
        p-4
        rounded-full
        shadow-lg
        transition-transform
        duration-300
        hover:scale-110
        flex
        items-center
        justify-center
      "
    >
      <FaWhatsapp size={28} />
    </button>
  );
}
