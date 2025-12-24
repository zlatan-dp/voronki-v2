import { PlanSelectionProvider } from "../actions/planSelectionContext";
import { TimerProvider } from "../actions/useTimerContext";

export default function Flow03Layout({ children }) {
  return (
    <PlanSelectionProvider>
      <TimerProvider>{children}</TimerProvider>
    </PlanSelectionProvider>
  );
}
