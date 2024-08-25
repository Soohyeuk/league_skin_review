import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
import SkinOfTheDay from './components/SkinOfTheDay/SkinOfTheDay'
import ChampSkinList from './components/ChampSkinList/ChampSkinList'
import SkinRelease from './components/SkinRelease/SkinRelease'
import { ProtectedRoute } from './routes/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route element={<ProtectedRoute/>}> {/*this is a multi-layered route for Authentication page */}
        <Route path='/signin' element={<SignIn/>}/>
      </Route>
      <Route path='/login' element={<LogIn/>} />
      {/* <Route path='/signin' element={<SignIn/>} /> */}
      <Route path='/skin_releases' element={<SkinRelease/>}/>
      <Route path='/skin_of_the_day' element={<SkinOfTheDay/>} />
      <Route path='/skin/:name' element={<ChampSkinList/>}/>
    </Routes>
  )
}

export default App
