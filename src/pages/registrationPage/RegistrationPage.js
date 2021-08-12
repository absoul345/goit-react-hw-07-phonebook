import React, { Component } from 'react';
import { connect } from 'react-redux';
import Registration from '../../components/registration/Registration';
import { authOperations } from '../../redux/auth';

export class RegistrationPage extends Component {
  state = { name: '', email: '', password: '' };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <Registration
          name={name}
          email={email}
          password={password}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapDispatchToProps = { onRegister: authOperations.register };

export default connect(null, mapDispatchToProps)(RegistrationPage);
