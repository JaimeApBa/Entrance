import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from '../auth/pages';
import { CalendarPage, EntranceDashboard, HistoricPage, IncidentsPage } from '../entrance';

export const EntranceAppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/login" element={ <LoginPage /> } />
        <Route path="/auth/register" element={ <RegisterPage /> } />
        <Route path="/" element={ <EntranceDashboard /> } />
        <Route path="/historic" element={ <HistoricPage /> } />
        <Route path="/calendar" element={ <CalendarPage /> } />
        <Route path="/incidents" element={ <IncidentsPage /> } />
        <Route path="*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
