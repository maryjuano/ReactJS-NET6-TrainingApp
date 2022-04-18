import React from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom'

export default function VoterList({ columns, data }) {
    const navigation = useNavigate();

    function goToEdit(id) {
        navigation('/voters/' + id)
    }

    return (
        <Table bordered hover>
            <thead>
                <tr>
                    {
                        columns.map(column => {
                            return <th key={column.id}>{column.text.toUpperCase()}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(row => {
                        return (
                            <tr key={row.id} onClick={() => goToEdit(row.id)}>
                                <td>{row.id}</td>
                                <td>{row.firstName}</td>
                                <td>{row.lastName}</td>
                            </tr>)
                    })
                }
            </tbody>
        </Table>
    )
}
