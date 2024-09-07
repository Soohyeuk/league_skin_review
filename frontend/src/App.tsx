import { Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
import SkinOfTheDay from './components/SkinOfTheDay/SkinOfTheDay'
import ChampSkinList from './components/ChampSkinList/ChampSkinList'
import SkinRelease from './components/SkinRelease/SkinRelease'
import {OnlyGuestRoute, ProtectedRoute} from './routes/ProtectedRoute'
import Header from './components/Header/Header'
import Comments from './components/Comments/Comments'

import {useRecoilState, useSetRecoilState} from "recoil"
import {useState, useEffect} from "react"
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AuthAtom, AuthUser } from './recoil/AuthAtom'


function App() {
  const [token, setToken] = useRecoilState(AuthAtom);
  const setAuthUser = useSetRecoilState(AuthUser); 
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const getNewAccessToken = async () => {
    console.log('updated');
  
    if (refreshing) return;
    setRefreshing(true);
  
    try {
      const res = await axios.post('http://127.0.0.1:8000/user/token/refresh', {
        refresh: token?.refresh,
      });
  
      setToken(res.data); 
      setAuthUser(jwtDecode(res.data.access));  
      localStorage.setItem('tokens', JSON.stringify(res.data));  
      console.log('Token refreshed successfully');
    } catch (error) {
      console.log('Error refreshing token, logging out', error);
      setToken(undefined);  
      setAuthUser(undefined); 
      localStorage.removeItem('tokens');  
    } finally {
      setRefreshing(false);
      if (loading) setLoading(false); 
    }
  };
  
  useEffect(() => {
    if (loading) {
      getNewAccessToken();  
    }
  
    const interval = setInterval(() => {
      if (token) {
        getNewAccessToken();
      }
    }, 1000 * 4 * 60)
  
    return () => clearInterval(interval);
  }, [token, loading]);
  
  

  const shouldShowHeader = !['/login', '/signin'].includes(location.pathname);
  return (
    <>
      {shouldShowHeader && <Header />}
      {loading ? null : (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/my_comments' element={<Comments/>}/>
        </Route>

        <Route path='/skin_releases' element={<SkinRelease/>}/> 
        <Route path='/skin_of_the_day' element={<SkinOfTheDay/>} />
        <Route path='/skin/:name' element={<ChampSkinList/>}/>

        <Route element={<OnlyGuestRoute/>}> {/*this is a multi-layered route for Authentication page */}
          <Route path='/login' element={<LogIn/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Route>
      </Routes>)}
    </>
  )
}

export default App
