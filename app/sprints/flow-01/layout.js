import { TimerProvider } from "../actions/useTimerContext";
import { PlanSelectionProvider } from "../actions/planSelectionContext";

export default function Flow01Layout({ children }) {
  return (
    <PlanSelectionProvider defaultPlan={1}>
      <TimerProvider initialSeconds={720}>{children}</TimerProvider>
    </PlanSelectionProvider>
  );
}
