import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'

const EmployeeRows = (props) => {
    const { headers, data } = props

    const [empList, setEmpList] = useState(data);

    const sortByColumn = (col) => {
        let sortedTable = [...empList]
        sortedTable.sort((a, b) => {
            if (a[col] < b[col]) {
                return -1;
            }
            if (a[col] > b[col]) {
                return 1;
            }
            return 0
        })
        setEmpList(sortedTable)
    }

  return (
        <Table striped bordered hover size="sm">
        <caption>Penn LPS Web Development Roster</caption>
        <thead>
            <tr>
            {headers.map((head) => (
                <th onClick={() => {sortByColumn(head[1])}}>{head[0]}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {empList.map((emp, index) => (
                <tr key={index}>
                    <td>{emp.f_name}</td>
                    <td>{emp.l_name}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{emp.role}</td>
                    <td>{emp.online}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    )
}

export default EmployeeRows;