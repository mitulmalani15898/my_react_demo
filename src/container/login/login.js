import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import * as authAction from '../../action/auth';

class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    btnLogin_Click(e) {
        e.preventDefault();
        this.props.action.auth.loginUser(this.state);
    }

    changeHandler(e) {
        this.setState({[e.target.name]:e.target.value});
    }
 
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email Id" onChange={this.changeHandler.bind(this)} value={this.state.email} />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={this.changeHandler.bind(this)} value={this.state.password} />
                </FormGroup>
                <button onClick={this.btnLogin_Click.bind(this)}>Login</button>
                <Label>{}</Label>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        auth: auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: {
            auth: bindActionCreators(authAction, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);