import React,{useState,useEffect} from 'react';
import { Container ,Row,Col,Pagination,PaginationItem,PaginationLink,Button,CardTitle,Card,CardText} from 'reactstrap';
import mcq from './mcq.json'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const questions = [];
const Mcq = () => {
    const [count,setCount]=useState(1);
    
    const [status,setStatus]=useState([{}])
    const mcqlength=Object.keys(mcq).length;
    
    const navigate = useNavigate();
    const location=useLocation()
    const auth=location.state
    console.log(auth)
    
const handlePrev=()=>{
    if(count===1)
    setCount(count);
    else
    setCount(count-1);
}
const handleNext=()=>{
  if(count===mcqlength)
  setCount(count);
  else
  setCount(count+1);
}
const handleEnd=()=>{
  alert('Submit responses?')
  navigate('/summary',{state:questions,auth})
}
const handleSubmit=(e)=>{

questions[count-1]={submit:true,option:e}


console.log(questions)
handleNext()
 
}

if(auth===true)
{
  return <>
    <Container fluid="true" style={{marginTop:'5vh'}}>
      <Row style={{alignItems:'center',textAlign:'center',marginTop:'5vh'}}>
        <h1 style={{fontSize:'2rem'}}>UAssess MCQ</h1>
      </Row>
    </Container>
    <Container fluid="true" style={{alignItems:'center',textAlign:'center',marginTop:'10vh'}}>
    <Pagination
  
  size="lg"
  style={{alignItems:'center',textAlign:'center',marginLeft:'-10vw'}}
>
  <Row style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
  
  
    {
      count!==1 &&(
        <PaginationItem>
        <PaginationLink
      
      style={{textDecoration:'none',color:'black',border:'none',background:'none',fontWeight:'bold',fontSize:'1.25rem'}}
      previous
      onClick={()=>handlePrev()}
      
    />
     </PaginationItem>
      )
    }
 
  <PaginationItem>
    <PaginationLink  style={{textDecoration:'none',color:'black',border:'none',background:'none',fontWeight:'bold',fontSize:'1.25rem'}}>
      {count}
    </PaginationLink>
  </PaginationItem>
  
 
    {
      count!==6 && (
        <PaginationItem>
        <PaginationLink
     
      next
      style={{textDecoration:'none',color:'black',border:'none',background:'none',fontWeight:'bold',fontSize:'1.25rem'}}
      onClick={()=>handleNext()}
    />
    
     </PaginationItem>
      )
    }
    {
      count===6 && (
        <PaginationItem>
        <PaginationLink
     
     onClick={()=>{handleEnd()}}
      style={{textDecoration:'none',color:'black',border:'none',background:'none',fontWeight:'bold',fontSize:'1.25rem'}}
     
    >
    End Test
    
    </PaginationLink>
    
     </PaginationItem>
      )
    }
 
  
  </Row>
</Pagination>
    </Container>

    <Container fluid="true" style={{alignItems:'center',textAlign:'center',marginTop:'10vh',marginLeft:'5vw',marginRight:'5vw'}}>
    <Card
    body
    
    inverse
    style={{
      backgroundColor: '#333',
      borderColor: '#333',
      minHeight:'30vh',
      maxHeight:'40vh',
      alignContent:'center',
      textAlign:'center',
      padding:'1vh'
      
    }}
  >
    <CardTitle tag="h3" style={{paddingTop:'2vh'}} >
     {mcq[count-1].id}. {mcq[count-1].question}
    </CardTitle>
    <CardText>
     A. {mcq[count-1].a} <br/>
     B. {mcq[count-1].b} <br/>
     C. {mcq[count-1].c} <br/>
     D. {mcq[count-1].d} <br/>
    </CardText>
    <Col>
   <Row>
   <Button type="button" onClick={()=>handleSubmit('a')}>A</Button>
   <Button type="button" onClick={()=>handleSubmit('b')}>B</Button>
   <Button type="button" onClick={()=>handleSubmit('c')}>C</Button>
   <Button type="button" onClick={()=>handleSubmit('d')}>D</Button>
   </Row>

    </Col>
   
  </Card>

    </Container>
    
  </>
}
else{
  return <>
  <h1>
  You aren't authorised to visit this page without <span style={{color:'red'}}>logging</span> in
  </h1>
  <Link to="/" >Login here</Link>
  </>
}

}


export default Mcq;
