import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import useEmployeeAPI from '../hooks/useEmployeeAPI';

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
        margin-top: 20px
`;


const EditEmployee = () => {
    const [getEmployees, getEmployee, addEmployee, editEmployee, deleteEmployee] = useEmployeeAPI();
    const [employee, setEmployee] = useState(initialValue);
    const { name, email, phone , city , department } = employee;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadEmployeeDetails();
    }, []);

    const loadEmployeeDetails = async() => {
        const response = await getEmployee(id);
        setEmployee(response);
    }

    const editEmployeeDetails = async() => {
        const response = await editEmployee(id, employee);
        navigate('/');
    }

    const onValueChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4">Edit Employee</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={department} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editEmployeeDetails()}>Edit Employee</Button>
            </FormControl>
        </Container>
    )
}

export default EditEmployee;