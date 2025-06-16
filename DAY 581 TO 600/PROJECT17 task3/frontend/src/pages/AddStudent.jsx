import React, {  useState } from "react";
import { Navbar, Container, Form ,Row,Col, Button} from 'react-bootstrap'
import axios from "axios";
import {useNavigate} from 'react-router'
function AddStudent() {
    const [data,setData]=useState({})
    const navigate=useNavigate()
    const handleSubmit=()=>{
        axios.post('http://localhost:8000/api/add',{data},{withCredentials:true}).then((res)=>{
            alert(res.data.message)
            navigate('/')
        }).catch((err)=>{
            alert(err.response.data.message)
        })
    }
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
                        <Form onSubmit={(e)=>{
                            e.preventDefault()
                            handleSubmit()
                        }}>
                            <Form.Control className="mt-3" type="text" placeholder="Rollno" required onChange={(e)=>{
                                setData({...data,rollno:e.target.value.toUpperCase().trim()})
                            }}/>
                            <Form.Control className="mt-3" type="text" placeholder="Name" required onChange={(e)=>{
                                setData({...data,name:e.target.value})
                            }}/>
                            <Form.Control className="mt-3" type="email" placeholder="Email" required onChange={(e)=>{
                                setData({...data,email:e.target.value})
                            }}/>
                            <Form.Control className="mt-3" min={1} max={100} type="number" placeholder="Mark 1" required onChange={(e)=>{
                                setData({...data,mark1:Number(e.target.value)})
                            }}/>
                            <Form.Control className="mt-3" min={1} max={100} type="number" placeholder="Mark 2" required onChange={(e)=>{
                                setData({...data,mark2:Number(e.target.value)})
                            }}/>
                            <Form.Control className="mt-3" min={1} max={100} type="number" placeholder="Makr 3" required onChange={(e)=>{
                                setData({...data,mark3:Number(e.target.value)})
                            }}/>
                            <Button type="submit" className="w-100 mt-4">Add Student</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddStudent;