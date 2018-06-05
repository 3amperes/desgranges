import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Field, Textearea } from '../components/common';
import { Box, Text } from '../components/tools';

const ContactPage = () => (
  <Box maxWidth={250}>
    <h1>écrivez-moi</h1>
    <Text fontSize="20px">
      Une dissert ou un haïku, un pamphlet ou un sonnet, vous lire me fera
      plaisir !
    </Text>
    <Box py="20px">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <Field
          label="Prénom"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
        />
        <Field
          label="Nom"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Doe"
        />
        <Field
          label="Adresse email"
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@company.com"
        />
        <Field label="Message">
          <Textearea
            id="message"
            name="message"
            placeholder="Hello Romain,"
            rows={5}
          />
        </Field>
        <button type="submit">Envoyer</button>
      </form>
    </Box>
  </Box>
);

export default ContactPage;
