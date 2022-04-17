import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function VoterForm() {
    let navigate = useNavigate()

    function goBack() {
        navigate("../voters", { replace: true });
    }

    return (
        <>
            <h1>Voter Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="voterForm.FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="voterForm.LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" />
                </Form.Group>
                <Button variant="primary">Save</Button>{' '}
                <Button variant="secondary" onClick={goBack}>Back</Button>
            </Form>
        </>
    )
}
