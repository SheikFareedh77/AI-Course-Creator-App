import React, { useState } from 'react'
import './CreateCourse.css'
function CreateCourse() {
const [userCourse,setUserCourse]=useState(''); 
  return (
    <div className='container'>
    <nav>
    <img src={`${process.env.PUBLIC_URL}/Trimble.png`} id='logoImg'></img>
    <div>
    <ul id='navbar'>
        <li><a href='/' ><b>COURSES</b></a></li>
        <li><a href='course' className='activeLink'><b>CREATE COURSE</b></a></li>
    </ul>
    </div>
          </nav> 
   <div className='ai-text'>Smart Question Generator: Transforming Text into Questions</div> 
         <div className='course-container'>
            <h1 className='heading'>CREATE YOUR  COURSE</h1>
            </div>
            <div id='input-container'><input type='text' value={userCourse} id='input-text' placeholder='Please Type in Your Course' onChange={(e)=>setUserCourse(e.target.value)} autoFocus /></div>
          <button id='create-course-button'>Create Course</button>
    </div>
  )
}

export default CreateCourse;