import React from 'react';
import { navigateTo } from 'gatsby-link';
import {
  Field,
  Textearea,
  Container,
  Cell,
  Button,
  Paragraph,
  PageHeader,
  Box,
  Text,
  Mobile,
  Tablet,
  Desktop,
  Default,
} from 'components';

const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactPage extends React.Component {
  state = {
    model: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    submitted: false,
    errors: {
      firstName: { required: true },
      lastName: { required: true },
      email: { required: true },
      message: { required: true },
    },
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(({ model, errors }) => {
      const newErrors = { ...errors };
      delete newErrors[name];

      if (!value) {
        newErrors[name] = { required: true };
      } else if (name === 'email' && !emailRegex.test(value)) {
        newErrors[name] = { format: true };
      }

      return {
        model: {
          ...model,
          [name]: value,
        },
        errors: newErrors,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      submitted: true,
    });

    const { model, errors } = this.state;
    if (Object.keys(errors).length) {
      return;
    }

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...model,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => {
        console.error(error);
        navigateTo('/contact/error');
      });
  };

  renderForm = () => {
    const { model, errors, submitted } = this.state;
    return (
      <Box py="20px">
        <form
          name="contact"
          method="post"
          action="/contact/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p style={{ display: 'none' }}>
            {/* Required for javascript submission*/}
            <input type="hidden" name="form-name" value="contact" />
            {/* Hidden field to avoid bot submission */}
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
            value={model.firstName}
            onChange={this.handleInputChange}
          />
          {submitted &&
            !!errors.firstName &&
            errors.firstName.required && (
              <Text color="red">Merci d'indiquer votre prénom</Text>
            )}

          <Field
            label="Nom"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={model.lastName}
            onChange={this.handleInputChange}
          />
          {submitted &&
            !!errors.lastName &&
            errors.lastName.required && (
              <Text color="red">Merci d'indiquer votre nom</Text>
            )}

          <Field
            label="Adresse email"
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@company.com"
            value={model.email}
            onChange={this.handleInputChange}
          />
          {submitted &&
            !!errors.email && (
              <Text color="red">
                {errors.email.required
                  ? `Merci d'indiquer votre adresse email`
                  : `L'adresse email n'est pas au bon format`}
              </Text>
            )}

          <Field label="Message">
            <Textearea
              id="message"
              name="message"
              placeholder="Hello Romain,"
              rows={1}
              value={model.message}
              onChange={this.handleInputChange}
            />
          </Field>
          {submitted &&
            !!errors.message &&
            errors.message.required && (
              <Text color="red">Merci de saisir un message</Text>
            )}
          <Box textAlign="center" py={4}>
            <Button type="submit" label="Envoyer" />
          </Box>
        </form>
      </Box>
    );
  };

  renderHeader = () => (
    <PageHeader title="Écrivez-moi">
      <Paragraph>
        Une dissert ou un haïku,
        <br /> un pamphlet ou un sonnet,
        <br />
        vous lire me fera plaisir !
      </Paragraph>
    </PageHeader>
  );

  render() {
    return (
      <Container height="auto" rows="300px auto">
        <Mobile>
          <Cell width={6} middle>
            {this.renderHeader()}
          </Cell>
          <Cell width={6}>{this.renderForm()}</Cell>
        </Mobile>
        <Default>
          <Cell width={4} left={5} middle>
            {this.renderHeader()}
          </Cell>
          <Cell width={4} left={5}>
            {this.renderForm()}
          </Cell>
        </Default>
      </Container>
    );
  }
}

export default ContactPage;
