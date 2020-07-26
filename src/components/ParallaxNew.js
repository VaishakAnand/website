import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Lady from '../assets/Lady.jpeg'
import Leaves from '../assets/Leaves.jpg'
import Boat from '../assets/Boat.mp4'
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

const inlineStyle = {
    background: '#ffff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
}


const ParallaxNew = () => (
    <div>
        <Parallax bgImage={Lady} strength={990}>
            <div style={{ height: '100vh' , width: '100%' }}>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col></Col>
                        <Col md={6}>
                            <Jumbotron style={{backgroundColor: '#bebfd67d' }} className="align-self-center m-5 ">
                                <h1>Welcome!</h1>
                                <p style={{color: 'snow'}}>
                                    This is not a fully functional site, just a showcase of some web designs.
                    </p>
                                <p>
                                    <Button variant="dark">Learn more</Button>
                                </p>
                            </Jumbotron>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        </Parallax>
        <div className='parallax1'
            style={{
                backgroundImage: require("../assets/Leaves.jpg"),
                backgroundColor: 'black',
                // position: 'relative',
                height: '100vh',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>

        </div>
        <Parallax bgImage={Lady} strength={1000}>
            <div style={{ height: '100vh' , width: '100%'}}></div>
        </Parallax>
    </div>
);
export default ParallaxNew;