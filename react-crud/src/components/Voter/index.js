import React, { useEffect, useState } from 'react'
import VoterList from './VoterList'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Row, Stack } from 'react-bootstrap'

export default function Voter() {
    
    let navigation = useNavigate()
    const [data, setData] = useState([])

    const columns = [
        { id: 1, text: "id" },
        { id: 2, text: "First Name" },
        { id: 3, text: "Last Name" }
    ]

    useEffect(() => {
        fetch("https://localhost:7015/api/Voters",
            {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result)
                },
                (error) => {
                    console.error(error)
                }
            )
    }, [])

    function goToAdd() {
        navigation("/voters/new", { replace: true })
    }

    return (
        <>
            <Row>
                <Col><h1>Voter List</h1></Col>
                <Col></Col>
                <Col></Col>
                <Col>
                </Col>
            </Row>
            <Stack>
                <Row>
                    <Col><Button variant="success" onClick={goToAdd}>Add</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <VoterList columns={columns} data={data} />
                    </Col>
                </Row>
            </Stack>

            <Row>


            </Row>
        </>
    )
}
