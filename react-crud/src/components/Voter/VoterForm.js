import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


const API_BASEURL = "https://localhost:7015/api/Voters/";
const API_DEFAULT_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json; charset=UTF-8"
}

export default function VoterForm() {

    let navigate = useNavigate()
    let { id } = useParams()
    const [voter, setVoter] = useState({ id: '00000000-0000-0000-0000-000000000000', firstName: '', lastName: '' })
    const firstNameInput = useRef()
    const lastNameInput = useRef()

    async function fetchVoter(id) {
        const response = await axios({
            method: 'GET',
            url: API_BASEURL + id,
            headers: API_DEFAULT_HEADERS
        })
        if (response.status == 200) {
            setVoter(response.data)
        }
    }

    useEffect(() => {
        if (id) {
            fetchVoter(id)
        }
    }, [])

    useEffect(() => {
        firstNameInput.current.value = voter.firstName;
        lastNameInput.current.value = voter.lastName;
    }, [voter])

    async function save() {

        const voterToBeSaved = {
            id: voter.id,
            firstName: firstNameInput.current.value,
            lastName: lastNameInput.current.value
        }

        //validate if add or update 
        if (voterToBeSaved.id !== '00000000-0000-0000-0000-000000000000') {
            const response = await axios({
                method: "PUT",
                url: API_BASEURL + id,
                headers: API_DEFAULT_HEADERS,
                data: voterToBeSaved
            }).then((response) => {
                if (response.status == 204) {
                    goBack()
                }
            });
        }

        if (voterToBeSaved.id === '00000000-0000-0000-0000-000000000000') {
            const response = await axios({
                method: "POST",
                url: API_BASEURL,
                headers: API_DEFAULT_HEADERS,
                data: voterToBeSaved
            }).then((response) => {
                if (response.status == 200) {
                    navigate('/voters/' + response.data.id)
                }
            });

        }
    }

    async function callDeleteApi() {
        if (voter.id !== '00000000-0000-0000-0000-000000000000') {
            const response = await axios({
                method: "DELETE",
                url: API_BASEURL + voter.id,
                headers: API_DEFAULT_HEADERS               
            }).then((response) => {
                if (response.status == 200) {
                    goBack()
                }
            });
        }
    }

    function deleteButton() {
        if (voter.id !== '00000000-0000-0000-0000-000000000000') {
            return <Button variant="danger" onClick={callDeleteApi}>Delete</Button>;
        }
    }


    function goBack() {
        navigate("../voters")
    }

    return (
        <>
            <h1>Voter Form</h1>
            {deleteButton()}
            <Form>
                <Form.Group className="mb-3" controlId="voterForm.FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" ref={firstNameInput} placeholder="John" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="voterForm.LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" ref={lastNameInput} placeholder="Doe" />
                </Form.Group>

                <Button variant="primary" onClick={save}>Save</Button>{' '}
                <Button variant="secondary" onClick={goBack}>Back</Button>
            </Form>
        </>
    )
}
