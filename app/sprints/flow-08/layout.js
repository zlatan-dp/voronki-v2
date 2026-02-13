import { UserProvider } from "../actions/userContext";
import { TimerProvider } from "../actions/useTimerContext";

export default function Flow06Layout({ children }) {
  return (
    <UserProvider>
      <TimerProvider initialSeconds={600}>{children}</TimerProvider>
    </UserProvider>
  );
}
