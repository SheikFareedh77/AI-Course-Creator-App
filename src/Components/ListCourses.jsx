import React from 'react';
import {useNavigate} from 'react-router-dom'

 const ListCourses = ({ courses, onHandleCLick }) => {
  const navigate=useNavigate();
  return (
    <div >
      <h5 id='trimble-course-heading'>Welcome to Trimble's AI based learning platform for employees</h5>
      <div className='list-course'>
        <ul id='course-row'>
          {courses.map((course, index ) => (
            <li key={index} id='course-box'  onClick={() =>{ onHandleCLick(course);navigate(`quiz/${course.courseName}`, {state:{course}})}}>
              {course.image==='reactCourse' && <img src={`${process.env.PUBLIC_URL}/${course.image}.jpg`} id='courseImg'/>}
              {course.image==='softTesting' && <img src={`${process.env.PUBLIC_URL}/${course.image}.jpg`} id='courseImg'/>}
              {course.image==='webCourse' && <img src={`${process.env.PUBLIC_URL}/${course.image}.jpg`} id='courseImg'/>}
              {course.image==='databaseCourse' && <img src={`${process.env.PUBLIC_URL}/${course.image}.jpg`} id='courseImg'/>}
              {course.image==='devopsCourse' && <img src={`${process.env.PUBLIC_URL}/${course.image}.jpg`} id='courseImg'/>}
              {course.image==='excelCourse' && <img src={`${process.env.PUBLIC_URL}/${course.image}.png`} id='courseImg'/>}
              <p id='course-name'>{course.courseName}</p>
             
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
};

export default ListCourses;
