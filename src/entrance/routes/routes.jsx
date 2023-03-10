import { Navigate, Route } from "react-router-dom";
import { EntranceDashboard } from '../pages';

export const routes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={ <EntranceDashboard />} />
        <Route path="*" element={ <Navigate to='/' />} />
    </Routes>
  )
}
