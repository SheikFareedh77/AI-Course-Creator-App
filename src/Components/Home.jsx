import React, { useEffect, useReducer, useState } from 'react'
import "./NavbarStyles.css"
import "./ListCourse.css"
import { useNavigate } from 'react-router-dom'
import {FaSearch} from "react-icons/fa"
import quizData from './quizData.json'
import ListCourses from './ListCourses'
import QuizCourse from './QuizCourse'
const quizDataLength=quizData.courses.length;
const quizCourses=quizData.courses;
function Home() {
  const[searchQuery,setSearchQuery]=useState('');
  const [currentCourse,setCurrentCourse]=useState(null);
  const onCourseClick=(currentCourse)=>{
    console.log(currentCourse)
    setCurrentCourse(currentCourse);
    }
    const filteredCourses = quizCourses.filter((course) =>
  course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
);
useEffect(()=>{

},[searchQuery])
  return (
    <>
    <nav>
    <img src={`${process.env.PUBLIC_URL}/Trimble.png`} id='logoImg'></img>
    <div className='input-wrapper'>
    <input type='text'  className='input-field'placeholder='Search all available content' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
    <button className='search-button'><FaSearch className='search-icon'/></button>
    </div>
    <div>
    <ul id='navbar'>
       
        <li><a href='/' className='activeLink'><b>COURSES</b></a></li>
        <li><a href='/course'><b>CREATE COURSE</b></a></li>
    </ul>
    </div>
    </nav> 
    { quizDataLength===0 || filteredCourses.length==0?(<img src={`${process.env.PUBLIC_URL}/no-course-found.png`} className='course-img'/>):(<div className='list-course'>
           
           <div>{currentCourse?(<QuizCourse/>):(<ListCourses courses={filteredCourses} onHandleCLick={onCourseClick}/>)}</div> 
    </div>)}
    </>
  )
}

export default Home