import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import EmpNavBar from '../NavBar';
import EmployeeGrid from '../EmployeeGrid';
import ListContext from '../../utils/ListContext';

const Home = () => {

    const summaryStatsAPI = 
          [
            {'f_name': 'Gary', 'l_name': 'Burner', 'phone': '555-555-5555', 'email': 'gary@pennLPS.com', 'role': 'student', 'online': true},
            {'f_name': 'James', 'l_name': 'Ravelle', 'phone': '555-555-5555', 'email': 'james@pennLPS.com', 'role': 'student', 'online': true},
            {'f_name': 'Christina', 'l_name': 'Bayley', 'phone': '555-555-5555', 'email': 'christina@pennLPS.com', 'role': 'student', 'online': true},
            {'f_name': 'Ram', 'l_name': 'Sah', 'phone': '555-555-5555', 'email': 'ram@pennLPS.com', 'role': 'student', 'online': true},
            {'f_name': 'Conchetta', 'l_name': 'Park', 'phone': '555-555-5555', 'email': 'conchetta@pennLPS.com', 'role': 'student', 'online': true},
            {'f_name': 'Calvin', 'l_name': 'Lee', 'phone': '555-555-5555', 'email': 'calvin@pennLPS.com', 'role': 'student', 'online': true},
            {'f_name': 'Nick', 'l_name': 'Dziewit', 'phone': '555-555-5555', 'email': 'gary@pennLPS.com', 'role': 'student', 'online': true},
            {'f_name': 'Quincy', 'l_name': 'Iheme', 'phone': '555-555-5555', 'email': 'quincy@pennLPS.com', 'role': 'teacher', 'online': true},
            {'f_name': 'Vince', 'l_name': 'Gubitosi', 'phone': '555-555-5555', 'email': 'vince@pennLPS.com', 'role': 'TA', 'online': true},
          ]

    const [list, setList] = useState({list: summaryStatsAPI});

    const tableHeaders = [["First Name", "f_name"], ["Last Name", "l_name"], ["Phone", "phone"], ["Email", "email"], ["Role", "role"], ["Online", "online"]]

    function setData(data) {
        console.log(data)
        setList({
            list: data
        })
    }

    function resetData() {
        console.log('into reset Data')
        setList({
            list: summaryStatsAPI
        })
    }
    
    return (
        <Container>
            <ListContext.Provider value={list}>
                <EmpNavBar data={summaryStatsAPI} changeData={setData} resetData={resetData}></EmpNavBar>
                <EmployeeGrid headers={tableHeaders} data={summaryStatsAPI} changeData={setData}></EmployeeGrid>
            </ListContext.Provider>
        </Container>
    )
}

export default Home;