import React from 'react';
import './AddCourse.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

const AddCourse = () => {
    const { register, handleSubmit} = useForm();
    const history = useHistory();
    const onSubmit = data => {
        axios.post(`https://limitless-eyrie-66726.herokuapp.com/courses`, data)
            .then(res => {
                swal("Congratulation!", "New Courses Added Successfully!", "success");
                history.push('/')
            })
    };


    return (
        <div>
            <Container>
                <Row>
                    <Col xm={12} md={12} lg={2}></Col>
                    <Col xm={12} md={12} lg={8}>
                        <Card className='py-4 bg-dark text-white'>
                            <form className='form-design' onSubmit={handleSubmit(onSubmit)}>
                                <label for="courseId">Course ID</label>
                                <input id='courseId' className='form-control' {...register("courseId")} />
                                <label for="Curriculum">Curriculum</label>
                                <select id='Curriculum' className='form-control' {...register("medium")}>
                                    <option value="English Medium">English Medium</option>
                                    <option value="Bangla Medium">Bangla Medium</option>
                                </select>
                                <label for="classess">Class</label>
                                <input id='classess' className='form-control' type='number' {...register("classes")} />
                                <label for="subject">Subjects</label>
                                <input id='subject' className='form-control' {...register("subjects")} />
                                <label for="participant">Participant</label>
                                <input id='participant' className='form-control' type='number' {...register("participants")} />
                                <label for="seat">Vacant Seats</label>
                                <input id='seat' className='form-control' type='number' {...register("seats")} />
                                <label for="start">Start Date</label>
                                <input id='start' className='form-control' type='date' {...register("startDate")} />
                                <label for="end">End Date</label>
                                <input id='end' className='form-control' type='date' {...register("EndDate")} />
                                <label for="cTime">Class Time</label>
                                <input id='cTime' className='form-control' type='time' {...register("classTime")} />
                                <label for="cEnd">Class End Time</label>
                                <input id='cEnd' className='form-control' type='time' {...register("classduration")} />
                                <label for="payment">Payment Status</label>
                                <select id='payment' className='form-control' {...register("status")}>
                                    <option value="Paid">Paid</option>
                                    <option value="Free">Free</option>
                                </select>
                                <label for="fee">Fee</label>
                                <input id='fee' className='form-control' type='number' {...register("fees")} />

                                <input className='btn form-control mt-3' type="submit" />
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddCourse;