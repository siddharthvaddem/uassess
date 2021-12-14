import React from 'react'
import './App.css'
import { Container, Row, Col, Button } from "reactstrap";
import Login from './Login';
const Home = () => {
  return (
    <>
      <Container fluid="true" style={{marginTop:'5vh'}}>
        <Row style={{alignItems:'center',textAlign:'center',fontSize:'5vmax'}}>UAssess</Row>
      </Container>
      <Container fluid="true">
      <Login/>
      </Container>
    </>
  )
}

export default Home
