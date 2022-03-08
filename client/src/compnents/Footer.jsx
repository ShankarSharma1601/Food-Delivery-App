import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
//import { Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" className="mt-5">
            <Container>
                <Navbar.Brand > Made by Shankar Sharma</Navbar.Brand>
                {/* <div className='fixed-bottom' style={{height:"10px"}}>Made by Shankar Sharma</div> */}
            </Container>
        </Navbar>
/* <div postion="relative">
<nav class="navbar sticky-bottom navbar-light bg-light">
  <div class="container-fluid">
    <div postion="bottom">Made by Shankar Sharma</div>
  </div>
</nav>
</div> */

  )
}

export default Footer