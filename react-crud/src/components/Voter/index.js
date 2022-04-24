import React, { useEffect, useState } from 'react'
import VoterList from './VoterList'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Row, Stack } from 'react-bootstrap'
import axios from 'axios'


export default function Voter() {
    const [data, setData] = useState([])
    let navigation = useNavigate()

    const columns = [
        { id: 1, text: "id" },
        { id: 2, text: "First Name" },
        { id: 3, text: "Last Name" }
    ]

    async function fetchData() {
        const response = await axios({
            method: 'GET',
            url: 'https://localhost:7015/api/Voters',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        setData(response.data)
    }   

    useEffect(() => {
        fetchData()
    }, [])

    function goToAdd() {
        navigation("/voters/new", { replace: true })
    }

    return (<>
        <Col><Button variant="success" onClick={goToAdd}>Add</Button></Col>
        <Row>
            <Col><h1>Voter List</h1></Col>
            <Col></Col>
            <Col></Col>
            <Col>
            </Col>
        </Row>
        <Stack>
            <Row>

            </Row>
            <Row>
                <Col>
                    <VoterList columns={columns} data={data} />
                </Col>
            </Row>
        </Stack>

        <Row>


        </Row>
    </>);
}
