import React from 'react';

import Container from 'react-bootstrap/Container';

import EmpNavBar from '../NavBar';
import EmployeeGrid from '../EmployeeGrid';

const Home = () => {
    const tableHeaders = ["First Name", "Last Name", "Phone", "Email", "Role", "Online"]
    
    return (
        <Container>
            <EmpNavBar></EmpNavBar>
            <EmployeeGrid headers={tableHeaders}></EmployeeGrid>
        </Container>
    )
}

export default Home;