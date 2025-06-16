import React, { useEffect, useState } from "react";
import { Container, Navbar, Row, Col, Table,Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from 'axios';

function Home() {
    const [students, setStudents] = useState({})
    const navigate=useNavigate()
    async function fetchData() {
        await axios.get('http://localhost:8000/api/', { withCredentials: true }).then((res) => {
            const { data } = res.data;
            setStudents(data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Student Managemenet System</Navbar.Brand>
                    <Button size="sm" variant="light" onClick={()=>{navigate('/add')}}>Add</Button>
                </Container>
            </Navbar>
            <Container>
                <Row className="px-3">
                    <Col className="overflow-auto">
                        <Table className="mt-5" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Rollno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mark 1</th>
                                    <th>Mark 2</th>
                                    <th>Mark 3</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students && Object.keys(students).map((key,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{students[key].rollno}</td>
                                            <td>{students[key].name}</td>
                                            <td>{students[key].email}</td>
                                            <td>{students[key].mark1}</td>
                                            <td>{students[key].mark2}</td>
                                            <td>{students[key].mark3}</td>
                                            <td>{students[key].mark1+students[key].mark2+students[key].mark3}</td>
                                            <td>
                                                <a href={`/edit/${students[key].rollno}`} className="m-2">Edit</a>
                                                <a href={`/delete/${students[key].rollno}`} className="m-2">Delete</a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;