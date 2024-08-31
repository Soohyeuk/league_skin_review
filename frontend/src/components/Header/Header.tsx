import {Link, useNavigate} from 'react-router-dom'
import './Header.css'
import {useRecoilValue, useSetRecoilState} from "recoil"
import { AuthAtom, AuthUser, isLoginSelector } from '../../recoil/AuthAtom';


const Header : React.FC = () => {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(AuthAtom); 
  const setAuthUser = useSetRecoilState(AuthUser); 
  const toLogOut = () => {
    setToken(undefined);
    setAuthUser(undefined);
    localStorage.removeItem('tokens');
    navigate('/');
  }
  const isLogin = useRecoilValue(isLoginSelector);
  return (
    <header className='header'>
        <div className='header-image'>
            <img src="https://placehold.co/50x50" alt="" onClick={() => {navigate('/')}}/>
            <p>LOL</p>
        </div>
        <nav className='header-links'>
            <Link className='links' to={'/'}>Skin Reviews</Link>
            <Link className='links' to={'/skin_of_the_day'}>Skin of the Day</Link>
            <Link className='links' to={'/skin_releases'}>Skin Releases</Link>
            <Link className='links' to={'/'}>Your Comments</Link>
        </nav>
        <div className='header-user'>
            {isLogin? <button onClick={toLogOut}>Log Out</button> :<button onClick={() => {navigate('/login');}}>LogIn</button>}
            <img src="https://placehold.co/30" alt="" />
            <img src="https://placehold.co/30" alt="" />
        </div>
    </header>
  )
}

export default Header
