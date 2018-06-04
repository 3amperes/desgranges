import React from 'react';
import Link from 'gatsby-link';
import { Label } from '../components/tools/styled-system';

const ContactPage = () => (
  <div>
    <h1>écrivez-moi</h1>
    <p style={{ maxWidth: 170 }}>
      Une dissert ou un haïku, un pamphlet ou un sonnet, vous lire me fera
      plaisir !
    </p>
    <form name="contact" method="POST" netlify>
      <p>
        <Label htmlFor="firstName">Prénom</Label>
        <input type="text" id="firstName" name="firstName" placeholder="John" />
      </p>
      <p>
        <Label htmlFor="lastName">Nom</Label>
        <input type="text" id="lastName" name="lastName" placeholder="Doe" />
      </p>
      <p>
        <Label htmlFor="email">Adresse email</Label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@company.com"
        />
      </p>
      <p>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          placeholder="Hello Romain,"
          rows={5}
        />
      </p>
      <p>
        <button type="submit">Envoyer</button>
      </p>
    </form>
  </div>
);

export default ContactPage;
