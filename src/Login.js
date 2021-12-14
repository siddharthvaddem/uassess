import React,{useState} from 'react'
import { FormGroup,Form,Label,Input,Container,Row,Col,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  

  const handleLogin=(e)=>{
    e.preventDefault();
    if(email==='uassess@admin.com' && password==="admin123"){

      navigate('/mcq',{state:true})
        console.log('Successfully logged in')
    }
      else
      alert('Incorrect Credentials, try again')
      console.log('Invalid Credentials')
  }

  return (
    <>
    <Container fluid="true" style={{marginTop:'5vh'}}>
      <Form onSubmit={handleLogin} style={{alignItems:'center',textAlign:'center'}}>
      <FormGroup>
      <Row style={{marginTop:'2vh'}}>
        <Col >
         <Label for="Email">
        Email
      </Label>
      </Col>
      <Col >
      <Input
        id="Email"
        name="email"
        placeholder="Enter Email"
        type="email"
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      </Col>
      </Row>
     
     
      </FormGroup>
      <FormGroup>
      <Row style={{marginTop:'2vh'}}>
        <Col>  <Label for="Password">
      Password
    </Label></Col>
    <Col>
    <Input
      id="Password"
      name="password"
      placeholder="Enter Password"
      type="password"
      onChange={(e)=>{setPassword(e.target.value)}}
    />
    </Col>
      </Row>
  
    
  </FormGroup>
  <Button style={{border:'none',marginTop:'2vh'}}  type='submit'>Login</Button>
      </Form>

      
      </Container>
    </>
  )
}

export default Login
