import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth";
import { EntranceRoutes } from '../entrance';
import { useAuthLogin } from "../hooks";


export const EntranceAppRouter = () => {

  const { status } = useAuthLogin();
    // if(status === 'checking') {
    //     return <CheckingAuth />
    // }

    
  return (
    <Routes>
      {
        ( status === 'authenticated' )
        ? <Route path="/*" element={ <EntranceRoutes/> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }
         
        <Route path="*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
