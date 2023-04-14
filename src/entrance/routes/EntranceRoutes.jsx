import { Navigate, Route, Routes } from "react-router-dom";
import { EntranceRouterContext } from "../";

import { CalendarPage, CompanyPage, EntranceDashboard, HistoricPage, IncidentsPage, UserPage } from '../pages';

export const EntranceRoutes = () => {
    return (
      <Routes>
          <Route element={ <EntranceRouterContext /> } >
            <Route path="/" element={ <EntranceDashboard /> } />
            <Route path="/user/:id" element={ <UserPage /> } />
            <Route path="/company" element={ <CompanyPage /> } />
            <Route path="/historic" element={ <HistoricPage /> } />
            <Route path="/calendar" element={ <CalendarPage /> } />
            <Route path="/incidents" element={ <IncidentsPage /> } />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Route>
      </Routes>
    )
}
