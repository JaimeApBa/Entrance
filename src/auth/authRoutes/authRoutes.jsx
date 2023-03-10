import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const authRoutes = () => {
  return (
    <Routes>
        <Route path="/auth" element={ <LoginPage />} />
        <Route path="/auth/register" element={ <RegisterPage />} />
        <Route path="/auth/*" element={ <Navigate to={ "/auth" } />} />
    </Routes>
  )
}
