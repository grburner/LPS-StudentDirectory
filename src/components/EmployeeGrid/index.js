import React, { useContext, useState } from 'react';
import Table from 'react-bootstrap/Table';
import TableContext from '../../utils/TableContext';

const EmployeeRows = () => {
    const tableCtx = useContext(TableContext)
    const [sortObj, setsortObj] = useState({direction: 'asc', key: 'f_name'});
    // console.log(tableCtx.tableHeaders)
    console.log(tableCtx.list)
    const headers = [["First Name", "f_name"], ["Last Name", "l_name"], ["Phone", "phone"], ["Email", "email"], ["Role", "role"], ["Online", "online"]]

    const resetTableSort = () => {
        let sortedTable = [...tableCtx.list]
        sortedTable.sort((a, b) => {
            if (a[sortObj.key] < b[sortObj.key]) {
                return sortObj.direction === 'asc' ? -1 : 1;
            }
            if (a[sortObj.key] > b[sortObj.key]) {
                return sortObj.direction === 'asc' ? 1 : -1;
            }
            return 0
        })
        tableCtx.setData(sortedTable)
    }

    const sortByColumn = key => {
        let direction = 'asc';
        if (sortObj.key === key && sortObj.direction === 'asc') {
            direction = 'dsc'
        }
        setsortObj({ key, direction });
        resetTableSort(sortObj.key);
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
            {tableCtx.list.map((emp, index) => (
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