import { Outlet } from "react-router-dom";
import { EntranceProvider } from "./EntranceProvider";

export const EntranceRouterContext = () => {
  return (
    <EntranceProvider>
        <Outlet />
    </EntranceProvider>
  )
}
