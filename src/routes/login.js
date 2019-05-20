import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, clearErrors } from '../redux/actions';
import { Card, CardBody, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidUpdate() {
    if (this.props.error) {
      alert(this.props.error);
      this.props.clearErrors();
    }
  }
  


  onSubmit(e) {
    e.preventDefault();
  
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    
    this.props.loginUser(userData, this.props.history)

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="layout">
        <div className="login-container">
          <Card>
            <CardBody>
              <Row>
                <Col md={10} className="m-auto">
                  <CardTitle>Log In</CardTitle>
                  <CardText className="text-center">Sign in to your account</CardText>
                    <Form onSubmit={this.onSubmit}>
                      <Input
                        placeholder="username"
                        name="username"
                        type="username"
                        value = {this.state.username}
                        onChange ={this.onChange}
                      />
                        <br/>
                      <Input
                        placeholder="password"
                        name="password"
                        type="password"
                        value = {this.state.password}
                        onChange ={this.onChange}
                      />
                        <br/>
                      <input type="submit" className="btn btn-info btn-block mt-4" />
                    </Form>
                  <br/>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { username, error } = state;
  return { username, error };
};

export default connect(
  mapStateToProps, {
    loginUser,
    clearErrors
  }
)(withRouter(Login));
