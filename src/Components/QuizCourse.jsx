import React from 'react'
import "./NavbarStyles.css"
import "./QuizCourse.css"
import {useLocation} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const QuizCourse=() =>{
  const [examResultImage,setExamResultImage]=useState(null)
  const[percentage,setPercentage]=useState(0);
  const [choosenOption,setChoosenOption]=useState('');
  const [testCompleted,setTestCompleted]=useState(false)
  const [isClicked,setIsClicked]=useState(false);
  const [clickButton,setClickButton]=useState('SUBMIT')
  const[correctAnswer,setCorrectAnswer]=useState(0);
  const [clickedOption,setClickedOption]=useState(null)
  const location=useLocation();
  const navigate=useNavigate();
  const[questionNumber,setQuestionNumber]=useState(0);
  const {course}=location.state;
  const courseQuestions=course.questions;
  const questionLength=courseQuestions.length;
  const handleSubmitButton=()=>{
  if (questionNumber + 1 === questionLength) {
    courseQuestions[questionNumber].correctAnswer === choosenOption
      ? setCorrectAnswer(correctAnswer + 1)
      : setCorrectAnswer(correctAnswer);
    setTestCompleted(true);
  }
  
   else{
    courseQuestions[questionNumber].correctAnswer === choosenOption
      ? setCorrectAnswer(correctAnswer + 1)
      : setCorrectAnswer(correctAnswer);
    setQuestionNumber(questionNumber+1);
    } 
  }
  useEffect(()=>{
           setClickedOption(null);
  },[testCompleted,questionNumber])
  return (
    <div className='container'>
    <nav>
    <img src={`${process.env.PUBLIC_URL}/Trimble.png`} id='logoImg'></img>
     <div>
     <div>
    <ul id='navbar'>
       
        <li><a href='/' className='activeLink'><b>COURSES</b></a></li>
        <li><a href='/course'><b>CREATE COURSE</b></a></li>
    </ul>
    </div>
    {!testCompleted?
    (<div id='question-container'>
    <h1 id='question'>{courseQuestions[questionNumber].questionText}</h1>
    <ul>
           {(courseQuestions[questionNumber].options).map((option,index)=>(
               <li id='options'><button id={index===clickedOption?('optionButtonClicked'):('optionButton')} onClick={()=>{setChoosenOption(option);setClickedOption(index)}}/>{option}</li>
           ))}
           </ul>
           <button id={clickedOption===null?('submitButtonInActive'):('submitButton')} onClick={clickedOption!=null?(handleSubmitButton):(()=>{''})}>{clickButton}</button>
        
    </div>):(
    <div id='result-container'>
        <img src={correctAnswer>3?`${process.env.PUBLIC_URL}/passedExam.jpg`:`${process.env.PUBLIC_URL}/retakeexam.jpg`} id='resultImg'></img>
        <h4>You Have  Correctly Answered {correctAnswer}/{questionLength} of Questions </h4>
    </div>)}
    </div>
          </nav> 
          </div>
  )
}

export default QuizCourse