import { Routes, Route} from 'react-router-dom'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
import SkinOfTheDay from './components/SkinOfTheDay/SkinOfTheDay'
import Home from './components/Home/Home'


function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/skin_of_the_day' element={<SkinOfTheDay/>} />
        <Route path='/skin/:name' element={<SkinOfTheDay/>}/>
    </Routes>
  )
}

export default App
