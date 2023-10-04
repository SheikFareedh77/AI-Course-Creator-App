import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Routes,Route} from 'react-router-dom'
import QuizCourse from './Components/QuizCourse'
import CreateCourse from './Components/CreateCourse';
function App() {
  return (
    <div className="App">
      <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='course' element={<CreateCourse/>}/>
   <Route path='quiz/:courseName' element={<QuizCourse/>}/>
      </Routes>
    </div>
  );
}

export default App;
