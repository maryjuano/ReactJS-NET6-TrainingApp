import React from 'react'
import Table from 'react-bootstrap/Table'

export default function VoterList({ columns, data }) {
    
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
                            <tr key={row.id}>
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
