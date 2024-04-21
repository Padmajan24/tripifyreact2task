
import './App.css'
import { Navbar,Container,Nav,Button,Card } from 'react-bootstrap'

import spinner from './assets/tour.gif'
import first from './assets/img1.jpg'
import second from './assets/img2.jpg'
import third from './assets/img3.jpg'



function App() {
  

  return (
    <>
    
      {/* <h1 style={{color:'blue'}}>YOUR TRAVEL DESTINATION </h1> */}

      <Navbar style={{width:"100%", height:'100px', }} bg="primary" data-bs-theme="dark">
        <Container >
          <Navbar.Brand  ></Navbar.Brand>
          <h1>Tripify</h1>
          <Nav className="ms-auto fs-3 p-2 ms-2 ">
            <Nav.Link href="#home">About us</Nav.Link>
            <Nav.Link href="#features">Locations</Nav.Link>
            <Nav.Link href="#pricing">Connect</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='landingsection container'>
      <div className='row align-items-center my-5'>
        <div className='col-lg-4'>
          <h3>Welcome to <span className='text-primary fs-1'>Tripify</span></h3>
          <p className='mt-5 fs-5' style={{textAlign:'justify'}}> At Tripify, we're passionate about travel and exploration. We believe that travel opens doors to new experiences, broadens horizons, and creates lifelong memories. Our mission is to inspire and empower travelers like you to embark on unforgettable journeys, discover hidden gems around the world, and connect with diverse cultures.</p>
        
        </div>
        <div  style={{width:'150px'}} className='col-lg-5 '>
          
          <img className=' w-5' src={spinner} />
        
          
        </div>
        
      </div>
    </div>

    <div className='landingsection container'>
    <h3 style={{textAlign:'center'}}> <span className='text-primary fs-1 '>Locations</span></h3>

    
      
     

<div className='row align-items-center my-5' >
  
     <div className='col-lg-4'>
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Malaysia</Card.Title>
            <Card.Text>
            Madrid boasts an array of stunning tourist attractions, from the iconic Petronas Twin Towers in Kuala Lumpur to the breathtaking natural 
            </Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
     </div>
     <div className='col-lg-4'>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            Italy, renowned for its rich history, art, and culinary delights, beckons travelers with its timeless charm and diverse landscapes. From the ancient ruins of Rome to the 
              
            </Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
     </div>
     <div className='col-lg-4'>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              
Goa, known for its picturesque beaches and vibrant nightlife, is a popular destination on the western coast of India. Visitors flock to its sandy shores, historical landmarks.
            </Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
     </div>
</div>
   
      </div>


      <div className='landingsection container'>
    <h3 style={{textAlign:'center'}}> <span className='text-primary fs-1 '>Connect</span></h3>

    <div className='icons d-flex justify-content-center align-items-center  p-1 fs-3'>
          <a href="" style={{textDecoration:'none',color:'yellow', padding:'15px'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
          <a href="" style={{textDecoration:'none',color:'yellow',padding:'15px'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
          <a href="" style={{textDecoration:'none',color:'yellow',padding:'15px'}} target='_blank'><i class="fa-brands fa-google"></i></a>
          
          <a href="" style={{textDecoration:'none',color:'yellow',padding:'15px'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
          <a href="" style={{textDecoration:'none',color:'yellow',padding:'15px'}} target='_blank'><i class="fa-solid fa-phone"></i></a>

         
          </div>
          <div >
          <p className='text-center mt-5'>Copyright © 2024 Tripify. Built With React.</p>
          </div>
      </div>

    </>
  )
}

export default App



