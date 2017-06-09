import React from 'react';
import { Redirect } from 'react-router-dom';
import cn from 'classnames';
import styles from './styles.scss';

class Login extends React.Component {
  handleClick = () => {
    // todo: use proper form validation
    const username = this.username.value;
    const password = this.password.value;
    if (username && password) {
      this.props.login(username, password);
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (this.props.token) {
      return <Redirect to={from} />;
    }

    return (
      <div className={cn('container', styles.container)}>
        <div className={styles.form}>
          <img
            src="/static/img/logo-front.png"
            alt="Testio"
            width={246}
            height={65}
            className={styles.logo}
          />
          <p><input type="text" ref={(c) => { this.username = c; }} /></p>
          <p><input type="password" ref={(c) => { this.password = c; }} /></p>
          {!!this.props.error && <p className={styles.error}>{this.props.error}</p>}
          <p><button type="button" onClick={this.handleClick}>Login</button></p>
        </div>
      </div>
    );
  }
}

export default Login;