import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import EmpNavBar from '../NavBar';
import EmployeeGrid from '../EmployeeGrid';
import TableContext from '../../utils/TableContext';

const Home = ({ initialData }) => {

    const summaryStatsAPI = initialData[0]
    const headersAPI = initialData[1]

    const [tableCtx, setTableCtx] = useState({
        list: summaryStatsAPI,
        tableHeaders: headersAPI,
        setData: data => {
            setTableCtx({
                ...tableCtx,
                list: data
            })
        },
        resetData: summaryStatsAPI => {
            setTableCtx({
                ...tableCtx,
                list: summaryStatsAPI
            })
        }
    });
    
    return (
        <Container>
            <TableContext.Provider value={tableCtx}>
                <EmpNavBar></EmpNavBar>
                <EmployeeGrid></EmployeeGrid>
            </TableContext.Provider>
        </Container>
    )
}

export default Home;