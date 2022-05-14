import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { processTime } from '../../Utilities/Utilities';

const MyVerticallyCenteredModal = (props) => {
  const [courses, setCourses] = useState({});
  const {courseId, medium, subjects, participants, seats, startDate, EndDate, classTime, fees, classes, classduration, status } = courses;

  useEffect(() => {
    fetch(`https://limitless-eyrie-66726.herokuapp.com/courses/${props.id}`)
      .then(res => res.json())
      .then(data => setCourses(data))
  }, []);

  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {subjects} Class-{classes}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Course ID: <span> {courseId} </span></p>
        <p>Curriculum: <span> {medium} </span></p>
        <p>Class:<span> {classes} </span></p>
        <p>Subjects:<span> {subjects} </span></p>
        <p>No of Participants:<span> {participants} </span></p>
        <p>Vacant Seats: <span> {seats} </span></p>
        <p>Course Start Date<span> {startDate} </span></p>
        <p>Course End Date<span> {EndDate} </span></p>
        <p>Class Time<span> {processTime(classTime)} </span></p>
        <p>Class End Time<span> {processTime(classduration)} </span></p>
        <p>Status<span> {status} </span></p>
        <p>Fees<span> {fees} </span></p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}
export default MyVerticallyCenteredModal;