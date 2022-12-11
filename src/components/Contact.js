import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Contact.css';

const ContactMe = () => {  
  return (
    <div className="contactme">
      <h2>Contact Me</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:555-555-5555">555-555-5555</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:test@test.com">test@test.com</a>
        </li>
        <li>
          <a href="https://github.com/">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
