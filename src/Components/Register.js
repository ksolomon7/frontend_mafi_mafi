import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Form, Label} from 'semantic-ui-react'

class Register extends React.Component{

    state={
        username:"",
        first_name: "",
        last_name: "",
        email:"",
        password:"",
        address:"",
        state:"",
        city: "",
        zipcode:10000
    }


    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleClick=()=>{
        console.log("submit")
    }


    render(){
        return(
            <div className="container-register">
            
              <Form className="login-form">
                <Form.Field>
                    <label>Username</label>
                    <Form.Input width={15} type="text" autoComplete="off" name="username" onChange={this.handleChange} placeholder='Username'/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Form.Input width={15} type="password" autoComplete="off" name="password" onChange={this.handleChange} placeholder='PassWord'/>
                </Form.Field>
                <Form.Field >
                    <label>First Name</label>
                    <Form.Input width={15} type="" autoComplete="off" name="first_name" onChange={this.handleChange} placeholder='First Name' />
                </Form.Field>
                <Form.Field >
                    <label>Last Name</label>
                    <Form.Input width={15} type="" autoComplete="off" name="last_name"onChange={this.handleChange} placeholder='Last Name' />
                </Form.Field>
                <Form.Field >
                    <label>E-mail</label>
                    <Form.Input width={15} type="text" autoComplete="off" name="email" onChange={this.handleChange} placeholder='Email' />
                </Form.Field>
                <Form.Field >
                    <label>Address</label>
                    <Form.Input width={15} type="text" autoComplete="off" name="address" onChange={this.handleChange} placeholder='Address' />
                </Form.Field>
                <Form.Field >
                    <label>State</label>
                    <Form.Input width={15} type="text" autoComplete="off" name="state" onChange={this.handleChange} placeholder='State' />
                </Form.Field>
                <Form.Field >
                    <label>City</label>
                    <Form.Input width={15} type="text" autoComplete="off" name="city" onChange={this.handleChange} placeholder='City' />
                </Form.Field>
                <Form.Field >
                    <label>Zipcode</label>
                    <Form.Input width={15} type="number" autoComplete="off" name="zipcode"onChange={this.handleChange} placeholder='Zipcode' />
                </Form.Field>
             
                  <Button onClick={this.handleClick} color="grey" fluid size="small">
                    Register
                  </Button>
                  <Link to="/">
                    <p className="register">Registered?</p>
                  </Link>
                </Form>
           
          </div>
        )
    }
}

export default Register