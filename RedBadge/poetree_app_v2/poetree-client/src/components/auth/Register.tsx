import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import { Redirect } from 'react-router-dom';

type RegisterProps = {
    email: string;
    password: string;
    setEmail: (e: any)=> any;
    setPassword: (e: any) => any;
    sessionToken: any;
    updateToken: any;
    getToken: any;
}

class Register extends React.Component<RegisterProps, {redirect: null | string}> {
    constructor(props: RegisterProps) {
        super(props)
        this.state = {
            redirect: null
        }
        }

        handleSubmit = (event: any) => {
            event.preventDefault();
            fetch(`http://localhost:3000/user/create`, {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        email: this.props.email,
                        password: this.props.password
                    }
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("Registration is successful.");

                    } else {
                        console.log("Registration has failed.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    // this.props.updateToken(data.sessionToken);
                    this.setState({redirect: '/userhomepage'})
                })
        }
    
 render() {
     if (this.state.redirect) {
         return <Redirect to = {this.state.redirect} />
     }
    return (
        <div>
    <Container>
        <Row>
            <Col></Col> 
                <Col id="logincard">   
                    <Card id="logincard">  
                        <Form className="registerForm" onSubmit={this.handleSubmit}>
                            <Label><h1>Signup</h1></Label>    
                            <FormGroup>   
                            <Label htmlFor="email" className="email">Email</Label>
                            <br/>

                            <Input  
                            className="email" 
                            placeholder="enter email"
                            onChange={(e) => this.props.setEmail(e.target.value)}
                            value={this.props.email} />
                            <br/>
                            </FormGroup>

                            <FormGroup>
                            <Label htmlFor="password"className="password">Password</Label>
                            <br/>
                            <Input 
                            className="password" 
                            placeholder="enter password"  
                            onChange={(e) => this.props.setPassword(e.target.value)}
                            value={this.props.password} />
                            </FormGroup> 
                            <br/>
    
                            <Button 
                            type="submit">Submit</Button>
                            </Form>
                    </Card>
                </Col>
            <Col></Col>
        </Row>
        <br />
        <br />
    </Container>
</div>
    )
}
}
export default Register;



