import { AuthProvider } from "./auth/context";
import { EntranceAppRouter } from "./router";

export const EntranceApp = () => {
  return (
    <AuthProvider>
      <EntranceAppRouter />
    </AuthProvider>
  )
}
