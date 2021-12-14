import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import mcq from './mcq.json'
import { useLocation ,Link} from 'react-router-dom';

const Summary = () => {
  const location=useLocation()
   const answers=location.state

let index=0
  if(answers===undefined || answers===null)
    return(
      <>
        <h1>Login and submit answers to see your summary</h1>
        <Link to="/mcq">Questions</Link>
      </>
    )
    else{
  return (
    <>
      <Container fluid="true" style={{marginLeft:'2vw',marginRight:'2vw'}}>
        <Row style={{marginTop:'5vh',marginBottom:'5vh'}}>Here is your summary</Row>

        
           
       {
         mcq.map((q)=>{

          return(<>
            <Row  style={{display:'flex',flexDirection:'column'}}>
          <Col lg="6">{q.id}. {q.question}</Col>
          <Col lg="3">Answer.  {q.answer}</Col>
          <Col lg="3">You marked {answers[index].option} </Col>
         
          </Row>
            <br/>
            <br/>
            <br/>
            <h6 style={{display:'none'}}>{index=index+1}</h6>
          </> 
          
          )
          
           
         })
         
       }
      
          
       
      </Container>
    </>
  )
      }
};

export default Summary;
