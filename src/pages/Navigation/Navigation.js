import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className='mt-4'>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={{ textDecoration: 'none', marginRight: '15px', fontWeight: 700, color: '#336BFF' }} to="/">CLASSES</NavLink>
            <NavLink style={{ textDecoration: 'none', marginRight: '15px', fontWeight: 700, color: '#336BFF' }} to="/">SUBJECTS</NavLink>
            <NavLink style={{ textDecoration: 'none', marginRight: '15px', fontWeight: 700, color: '#336BFF' }} to="/">TUTOR</NavLink>
            <NavLink style={{ textDecoration: 'none', marginRight: '15px', fontWeight: 700, color: '#336BFF' }} to="/">STUDENTS</NavLink>
            <NavLink style={{ textDecoration: 'none', marginRight: '15px', fontWeight: 700, color: '#336BFF' }} to="/">PARENTS</NavLink>
          </Nav>
          <Nav className="ms-auto">
            {user.email ? <>
              <img className='rounded-circle w-25 me-2' src={user?.photoURL} alt="" />
              <button onClick={logOut} className='btn btn-danger'>Logout</button>
            </> :
              <NavLink style={{ textDecoration: 'none', marginRight: '15px', fontWeight: 700, color: '#336BFF' }} to="/login">LOGIN</NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;