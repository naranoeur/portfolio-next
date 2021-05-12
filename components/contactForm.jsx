import React from 'react';
import styles from './contactForm.module.scss';
import { StyledInput, StyledTextarea, SolidButton } from './library';

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        message: ""
      },
      error: {
        name: "",
        email: "",
        message: ""
      }
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.hasChanged = this.hasChanged.bind(this);
  }

  onSubmit(event) {
    const { data } = this.state;
    const error = {
      name: "",
      email: "",
      message: ""
    }
    error.name = data.name == "" ? "Cannot be blank" : "";
    error.message = data.message == "" ? "Cannot be blank" : "";
    error.email = isValidEmail(data.email) ? "" : "Not a valid email"

    if(error.name || error.message || error.email) {
      event.preventDefault();
    }
    this.setState({ error: error });

  }

  hasChanged(event) {
    const { data } = this.state;
    this.setState({
      data: { ...data, [event.target.name]: event.target.value }
    });
  }

  render() {
    const { error, data } = this.state;
    console.log(error);
    return (
      <div className={styles.formContainer}>
        <form
          onSubmit={this.onSubmit}
          action="https://formspree.io/pheezxinfo@gmail.com"
          method="POST"
        >
          <div className={styles.inputsContainer}>
            <StyledInput
              className={styles.topInput}
              error={error.name}
              value={data.name}
              name="name"
              placeholder="Name"
              onChange={this.hasChanged}
            />
            <StyledInput
              className={styles.topInput}
              error={error.email}
              value={data.email}
              name="email"
              placeholder="Email"
              onChange={this.hasChanged}
            />
          </div>
          <StyledTextarea
            className={styles.bottomInput}
            error={error.message}
            name="message"
            value={data.message}
            onChange={this.hasChanged}
            placeholder="Message"
          />
          <button type="submit" className={styles.sendButton}>
            <SolidButton>
              Get in Touch
            </SolidButton>
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
