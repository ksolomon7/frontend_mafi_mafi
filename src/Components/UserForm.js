import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'

class UserForm extends React.Component{
    
    state={
        username:"",
        password:""
    }
    
    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value     
        })
    }

    handleClick=(evt)=>{
        this.props.handleLogin(this.state)
    }

   
    render() {
        return(
                <div className="container-login">
                  <div>
                    <Form className="login-form">
                      <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                        className="auth-input-field"
                      />
                      <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        type="password"
                        className="auth-input-field"
                      />
              
                   
                        <Button onClick={this.handleClick} color="grey" fluid size="small">
                          Login
                        </Button>
                        <Link to="/register">
                          <p className="register">Not Registered?</p>
                        </Link>
                      </Form>
                  </div>
                </div>
                );
        }
}

export default withRouter(UserForm)