import React, { useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function VoterForm(props) {
    let navigate = useNavigate();
    const voterData = useRef();

    useEffect(() => {
        voterData = props.voter;
    } ,[])

    function goBack() {
        navigate("../voters", { replace: true });
    }

    return (
        <>
            <h1>Voter Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="voterForm.FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control ref={voterData.firstName} type="text" placeholder="John" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="voterForm.LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control ref={voterData.lastName} type="text" placeholder="Doe" />
                </Form.Group>
                <Button variant="primary">Save</Button>{' '}
                <Button variant="secondary" onClick={goBack}>Back</Button>
            </Form>
        </>
    )
}
