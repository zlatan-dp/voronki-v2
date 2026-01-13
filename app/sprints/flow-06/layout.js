import { PlanSelectionProvider } from "../actions/planSelectionContext";
import { TimerProvider } from "../actions/useTimerContext";

export default function Flow06Layout({ children }) {
  return (
    <PlanSelectionProvider>
      <TimerProvider>{children}</TimerProvider>
    </PlanSelectionProvider>
  );
}
