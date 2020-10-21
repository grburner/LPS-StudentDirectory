import React, { useEffect, useState } from 'react';
import summaryStatsAPI from '../../utils/mockAPI';
import Table from 'react-bootstrap/Table'

const EmployeeRows = (props) => {
    const { headers } = props

    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        summaryStatsAPI.then((data) => {
            setEmpList(data)
        })
    }, []);

    console.log(props.headers)

    let renderProductRow
    if (empList) {
        renderProductRow = empList.map((emp, index) => (
            <tr key={index}>
                <td>{emp.f_name}</td>
                <td>{emp.l_name}</td>
                <td>{emp.phone}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                <td>{emp.online}</td>
            </tr>
        ))
    } else {
        renderProductRow = 'Loading...'
    }

  return (
        <Table striped bordered hover size="sm">
        <caption>Penn LPS Web Development Roster</caption>
        <thead>
            <tr>
            {headers.map((head) => (
                <th>{head}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {renderProductRow}
        </tbody>
        </Table>
    )
}

export default EmployeeRows;