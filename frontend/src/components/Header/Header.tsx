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
            <img className='hover' src="https://placehold.co/50x50" alt="" onClick={() => {navigate('/')}}/>
            <p>LOL</p>
        </div>
        <nav className='header-links'>
            <Link className='links hover' to={'/'}>Skin Reviews</Link>
            <Link className='links hover' to={'/skin_of_the_day'}>Skin of the Day</Link>
            <Link className='links hover' to={'/skin_releases'}>Skin Releases</Link>
            <Link className='links hover' to={'/my_comments'}>My Comments</Link>
        </nav>
        <div className='header-user'>
            {isLogin? <img className='right-icon' onClick={toLogOut} src="src/img/icons/user_icon.svg" alt="" /> :<button className='right-icon logIn hover' onClick={() => {navigate('/login');}}>Login</button>}
            <img className='right-icon hover' src="src/img/icons/dark_theme_icon.svg" alt="" />
            <img className='right-icon hover' src="src/img/icons/setting_icon.svg" alt="" />
        </div>
    </header>
  )
}

export default Header
