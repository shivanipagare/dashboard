import React, { useState } from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal, Button } from 'react-bootstrap';
const NavBar = () => {
  // for profile
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//for password
const [passwordshow, setPwdShow] = useState(false);

const handlePwdClose = () => setPwdShow(false);
const handlePwdShow = () => setPwdShow(true);
  return (
    <>
      <Navbar >
        <Container>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Dropdown>

              <Dropdown.Toggle id="dropdown-basic" className='dropdown' style={{ background: "transparent", border: "none", fontWeight: "bold", color:"black" }}>
                Welcome : ?
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleShow}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={handlePwdShow}>Change Password</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* for profile */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body><div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div class="card p-4">
            <div class=" image d-flex flex-column justify-content-center align-items-center">
              <button class="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button>
              <span class="name" style={{marginTop:"80px"}}>shivani pagare</span> <span class="idd">shivani123@gmail.com</span>
              <div class=" d-flex mt-2"> <button class="btn1 btn-dark">Edit Profile</button> </div>

            </div>
          </div>
        </div></Modal.Body>
      </Modal>


      {/* change password */}


      <Modal show={passwordshow} onHide={handlePwdClose} className='w-20'>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="card text-center" style={{width: "auto", background:"transparent", justifyContent:"center"}}>
    <div class="card-header h5 text-white bg-primary">Password Reset</div>
    <div class="card-body px-5">
        <p class="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div class="form-outline">
            <input type="email" id="typeEmail" class="form-control my-3" />
            <label class="form-label" for="typeEmail">Email input</label>
        </div>
        <Button href="#" class="btn btn-primary w-100" height="20px">Reset password</Button>
        <div class="d-flex justify-content-between mt-4">
            <a class="" href="#">Login</a>
            <a class="" href="#">Register</a>
        </div>
    </div>
</div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavBar;

