import useAxiosPrivate from "../hooks/useAxiosPrivate";

const useEmployeeAPI = () => {
    const axiosPrivate = useAxiosPrivate();

    const getEmployees = async () => {
        try {
            const response = await axiosPrivate.get('/employees');
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
        }
    }

    const getEmployee = async (id) => {
        try {
            const response = await axiosPrivate.get(`/employees/${id}`);
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
        }
    }

    const addEmployee = async (employee) => {
        try {
            const {name, email, phone, city, department} = employee;
            const response = await axiosPrivate.post('/employees',
                JSON.stringify({ name, email, phone, city, department }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
        }
    }

    const editEmployee = async (id,employee) => {
        try {
            //const [id,name, email, phone, city, department] = employee;
            console.log(employee);
            const response = await axiosPrivate.put('/employees',
                JSON.stringify({ id:employee._id , name:employee.name, email:employee.email, phone:employee.phone, city:employee.city, department:employee.department }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
        }
    }

    const deleteEmployee = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/employees/${id}`);
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
        }
    }

    return [getEmployees, getEmployee, addEmployee, editEmployee, deleteEmployee];
}

export default useEmployeeAPI;