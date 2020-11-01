import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class LoginForm extends React.Component{
    
    state={
        username:"",
        password:""
    }
    
    handleChange=(evt)=>{
        console.log(evt.target.value)
        this.setState({
            [evt.target.name]:evt.target.value     
        })
    }

    handleClick=(evt)=>{
        evt.preventDefault();
        this.props.handleLogin(this.state)
    }

    render() {
        return(
                    <Form onSubmit={this.handleSubmit}>
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
              
                      <Link to="/products">
                        <Button onClick={this.handleClick} color="grey" fluid size="small">
                          Login
                        </Button>
                      </Link>
                      </Form>
                    
                );
        }
}

export default LoginForm