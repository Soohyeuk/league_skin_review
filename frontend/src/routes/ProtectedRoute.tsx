import {useRecoilValue} from "recoil"
import { isLoginSelector } from "../recoil/AuthAtom"
import { Navigate, Outlet, useLocation } from "react-router-dom";


//we want one for the pages where you need to be logged in to view 
//and also for the pages where you shouldn't be logged in to view 
export const ProtectedRoute = () => {
    const isLogin = useRecoilValue(isLoginSelector);
    const currentLocation = useLocation(); 
    return isLogin?<Outlet></Outlet>:<Navigate to={'/login'} replace state={{redirectedFrom:currentLocation}}></Navigate>
}

export const OnlyGuestRoute = () => {
    const isLogin = useRecoilValue(isLoginSelector);
    const currentLocation = useLocation(); 
    return isLogin?<Navigate to={'/'} replace state={{redirectedFrom:currentLocation}}></Navigate>:<Outlet></Outlet>
}
