import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me 📫</h2>
      <div className="contact-icons">
        <a href="https://meu-linktree-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/manoel-franco-fernandes-neto-6260a0281/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
        </a>
        <a href="https://wa.me/+5511932590460" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/-WhatsApp-%25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
        </a>
        <a href="https://t.me/+5511932590460" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/-Telegram-%2300B2EE?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
