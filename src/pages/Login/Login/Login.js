import React from 'react';
import useAuth from '../../../hooks/useAuth'
import { Card, Col, Row, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {googleSignIn} = useAuth();
    const history = useHistory();
    const location = useLocation()
    const ridirect_path= location?.state?.from || '/'

    const handleSignIn=()=>{
        googleSignIn();
        history.push(ridirect_path)
       
    }
    return (
        <div className='text-center'>
            <Container>
            <Row>
            <Col xm={12} md={12} lg={4}></Col>
            <Col xm={12} md={12} lg={6}>
            <Card className='w-50 py-5 shadow-lg'>
                <h3 style={{fontFamily:'cursive', margin:'20px 0'}}>Login with Google</h3>
            <button onClick={handleSignIn} className='w-25 m-auto border-0'><i class="btn btn-primary fab fa-google"></i></button>
            </Card>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Login;