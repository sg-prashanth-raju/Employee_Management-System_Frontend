import { useState, useEffect } from 'react';
import useEmployeeAPI from '../hooks/useEmployeeAPI';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllEmployees = () => {
    const [getEmployees, getEmployee, addEmployee, editEmployee, deleteEmployee] = useEmployeeAPI();
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        getAllEmployees();
    }, []);

    const deleteEmp = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }

    const getAllEmployees = async () => {
        let response = await getEmployees();
        setEmployees(response);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {employees.map((employee) => (
                    <TRow key={employee._id}>
                        <TableCell>{employee._id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.phone}</TableCell>
                        <TableCell>{employee.city}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${employee._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteEmp(employee._id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllEmployees;