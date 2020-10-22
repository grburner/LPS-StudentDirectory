import React, { useEffect, useState, useContext } from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import TableContext from '../../utils/TableContext';


const EmpNavBar = () => {
    const tableCtx = useContext(TableContext)
    const [search, setSearch] = useState('');

    const updateSearch = e => {
        tableCtx.resetData()
        const { value } = e.target;
        setSearch(value)
    }

    useEffect(() => {
        console.log('search' + search)
        const retSearch = "" ? tableCtx.list : tableCtx.list.filter(({f_name}) => (
            f_name.toLowerCase().indexOf(search.toLowerCase()) >= 0
        ))
        tableCtx.setData(retSearch)
    }, [search])

    return (
        <Navbar className="bg-light justify-content-between">
        <Form inline>
            <InputGroup>
                <Button>Reset</Button>
            </InputGroup>
        </Form>
        <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={e => {updateSearch(e)}}/>
            <Button type="submit">Search</Button>
        </Form>
        </Navbar>
    )
}

export default EmpNavBar;