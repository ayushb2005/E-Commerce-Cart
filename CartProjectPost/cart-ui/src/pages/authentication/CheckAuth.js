import { Navigate, Outlet} from "react-router-dom";
function CheckAuth(){
    const x = JSON.parse(localStorage.getItem('loginBool'))
    return(
        x?<Outlet/>:<Navigate to ='/loginAdmin'/>
        
    )
}
export default CheckAuth