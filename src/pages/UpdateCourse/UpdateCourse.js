import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router';

const UpdateCourse = () => {
    const {id} = useParams();
    const { register, handleSubmit, setValue } = useForm();
    const history = useHistory();
    const [courses, setCourses] = useState({});
    const {_id, courseId, medium, subjects, participants, seats, startDate, EndDate, classTime, fees, classes, status, classduration } = courses;

    useEffect(() => {
        fetch(`https://limitless-eyrie-66726.herokuapp.com/courses/${id}`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [id]);

    setValue('courseId', `${courseId}`);
    setValue('medium', `${medium}`);
    setValue('classes', `${classes}`);
    setValue('subjects', `${subjects}`);
    setValue('participants', `${participants}`);
    setValue('seats', `${seats}`);
    setValue('startDate', `${startDate}`);
    setValue('EndDate', `${EndDate}`);
    setValue('classTime', `${classTime}`);
    setValue('classduration', `${classduration}`);
    setValue('status', `${status}`);
    setValue('fees', `${fees}`);

    const onSubmit = data => {
        axios.put(`https://limitless-eyrie-66726.herokuapp.com/courses/${_id}`, data)
            .then(res => {
                swal("Congratulation!", "Update Successfully!", "success");
                history.push('/')
            })
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col xm={12} md={12} lg={3}></Col>
                    <Col xm={12} md={12} lg={6}>
                        <Card className='py-4 bg-dark'>
                            <form className='form-design' onSubmit={handleSubmit(onSubmit)}>
                                <input className='form-control' {...register("courseId")} placeholder='Course ID' />
                                <select className='form-control' {...register("medium")}>
                                    <option value="English Medium">English Medium</option>
                                    <option value="Bangla Medium">Bangla Medium</option>
                                </select>
                                <input className='form-control' type='number' {...register("classes")} placeholder='Class' />
                                <input className='form-control' {...register("subjects")} placeholder='Subjects' />
                                <input className='form-control' type='number' {...register("participants")} placeholder='No of Perticipants' />
                                <input className='form-control' type='number' {...register("seats")} placeholder='Vacent Seats' />
                                <input className='form-control' type='date' {...register("startDate")} placeholder='Start Date' />
                                <input className='form-control' type='date' {...register("EndDate")} placeholder='End Date' />
                                <input className='form-control' type='time' {...register("classTime")} placeholder='Class Time' />
                                <input className='form-control' type='time' {...register("classduration")} placeholder='Class Duration' />
                                <select className='form-control' {...register("status")}>
                                    <option value="Paid">Paid</option>
                                    <option value="Free">Free</option>
                                </select>
                                <input className='form-control' type='number' {...register("fees")} placeholder='Fees' />

                                <input className='form-control' type="submit" value='update' />
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateCourse;