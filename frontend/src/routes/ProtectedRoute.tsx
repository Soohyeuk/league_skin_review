import React from "react"
import {useRecoilValue} from "recoil"
import { isLoginSelector } from "../recoil/AuthAtom"
import { Navigate, Outlet } from "react-router-dom";



export const ProtectedRoute = () => {
    const isLogin = useRecoilValue(isLoginSelector);
    return isLogin?<Outlet></Outlet>:<Navigate to={'/login'} replace></Navigate>
}