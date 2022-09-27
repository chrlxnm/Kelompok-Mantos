import { useNavigate } from "react-router-dom";

export function Protect({children}) {
    const navigate = useNavigate();
    
    if (true) {
        navigate('/');
    }
}