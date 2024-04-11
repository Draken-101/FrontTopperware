import { useNavigate } from "react-router-dom"

export function PrivateRoute({children, token}){
    const router = useNavigate()
    if (!token) {
        router('/Login')
    }
    return children;
}