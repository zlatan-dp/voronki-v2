import { TimerProvider } from "../actions/useTimerContext";

export default function Flow06Layout({ children }) {
  return <TimerProvider initialSeconds={600}>{children}</TimerProvider>;
}
