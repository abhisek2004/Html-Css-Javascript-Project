import React, { useEffect, useState } from "react";
import { Navbar, Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from "axios";
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
function EditStudent() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const { rollno } = useParams()
    const handleSubmit = () => {
        axios.put('http://localhost:8000/api/edit', { data }, { withCredentials: true }).then((res) => {
            alert(res.data.message)
            navigate('/')
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }
    async function fetchData() {
        await axios.get(`http://localhost:8000/api/${rollno}`, { withCredentials: true }).then((res) => {
            const { data } = res.data;
            setData(data);
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
                </Container>
            </Navbar>
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={10} sm={8} md={6} lg={4}>
                        <Form onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}>
                            <Form.Control className="mt-3" type="text" placeholder="Rollno" required value={data?.rollno} disabled />
                            <Form.Control className="mt-3" type="text" placeholder="Name" value={data?.name} required onChange={(e) => {
                                setData({ ...data, name: e.target.value })
                            }} />
                            <Form.Control className="mt-3" type="email" placeholder="Email" value={data?.email} required onChange={(e) => {
                                setData({ ...data, email: e.target.value })
                            }} />
                            <Form.Control className="mt-3" min={1} max={100} type="number" value={data?.mark1} placeholder="Mark 1" required onChange={(e) => {
                                setData({ ...data, mark1: Number(e.target.value) })
                            }} />
                            <Form.Control className="mt-3" min={1} max={100} type="number" value={data?.mark2} placeholder="Mark 2" required onChange={(e) => {
                                setData({ ...data, mark2: Number(e.target.value) })
                            }} />
                            <Form.Control className="mt-3" min={1} max={100} type="number" value={data?.mark3} placeholder="Makr 3" required onChange={(e) => {
                                setData({ ...data, mark3: Number(e.target.value) })
                            }} />
                            <Row>
                                <Col>
                                    <Button type="submit" className="w-100 mt-4">Edit</Button>
                                </Col>
                                <Col>
                                    <Button type="reset" variant="danger" className="w-100 mt-4" onClick={()=>{navigate('/')}}>Cancel</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default EditStudent;