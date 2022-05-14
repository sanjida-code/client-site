import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { processTime } from '../../Utilities/Utilities';
import Countdown from "react-countdown";


const DisplayClass = ({ course}) => {
    const [show, setShow] = useState('d-block')
    const { courseId, subjects, classTime, classes, classduration, status } = course;
   
    let time1 = `${classTime}:00`
    let array1 = time1.split(":");
    let seconds1 = (parseInt(array1[0], 10) * 60 * 60) + (parseInt(array1[1], 10) * 60) + parseInt(array1[2], 10);

    let currentTime = new Date();

    let countDown = currentTime.toLocaleTimeString('en-GB');
    let time2 = `${countDown}:00`
    let array2 = time2.split(":");
    console.log(countDown, 'Time 20', time2, 'Process Time: ', countDown)
    let seconds2 = (parseInt(array2[0], 10) * 60 * 60) + (parseInt(array2[1], 10) * 60) + parseInt(array2[2], 10);
    let mainTime = seconds1 - seconds2

    //--------------------------------------ending class -----------------------------------//
    let time3 = `${classduration}:00`
    let array3 = time3.split(":");
    let seconds3 = (parseInt(array3[0], 10) * 60 * 60) + (parseInt(array3[1], 10) * 60) + parseInt(array3[2], 10);

    let dueration = seconds3 - seconds2;
    const renderer1 = ({ completed }) => {

        if (completed) {
        
            setShow('d-none')
            return <></>;
        }

        else {
            return <></>;
        }
    };

    return (
            <div className={`${show} m-2`}> 
            <Countdown date={Date.now() + dueration * 1000} renderer={renderer1} />
            <Card className='py-2 px-3 shadow' style={{
                borderLeft: '6px solid #0EB9C4',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '10px'
            }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4 style={{ color: '#0EB9C4', fontWeight: 700 }}>{subjects}, Class-{classes}</h4>
                        <p className='text-secondary'>Batch: {courseId}</p>
                    </div>
                    <div>
                        <span className='rounded text-white' style={{ fontSize: '15px', backgroundColor: 'goldenrod', padding: '5px 10px' }}>{status}</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h6 className='text-danger'>{processTime(classTime)} to {processTime(classduration)}</h6>
                        <Countdown date={Date.now() + (mainTime * 1000)} renderer={renderer} />

                    </div>
                    <div>
                        <a href="https://meet.google.com/" target='blank' className='btn rounded bg-danger text-white' style={{ fontSize: '15px' }}>join class </a>
                    </div>
                </div>

            </Card>
            </div> 
    )
};

// Random component
const Completionist = () => {
    return <span className='text-secondary' style={{ fontFamily: 'cursive', fontSize: '15px' }}>Class Already Started!</span>

}

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span>
                {hours} hours: {minutes} minutes: {seconds} seconds
            </span>
        );
    }
};


export default DisplayClass;