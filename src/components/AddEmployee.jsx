import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import useEmployeeAPI from '../hooks/useEmployeeAPI';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    phone: '',
    city: '',
    department: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddEmployee = () => {
    const [getEmployees, getEmployee, addEmployee, editEmployee, deleteEmployee] = useEmployeeAPI();
    const [employee, setEmployee] = useState(initialValue);
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    const addEmployeeDetails = async() => {
        await addEmployee(employee);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={employee.name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={employee.email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={employee.phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={employee.city} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={employee.department} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addEmployeeDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddEmployee;