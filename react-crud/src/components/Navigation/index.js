import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


export default function Top() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Election Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/voters">Voters</Nav.Link>
                        <Nav.Link href="/candidates">Candidates</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



