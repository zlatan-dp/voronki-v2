import { PlanSelectionProvider } from "../actions/planSelectionContext";
import { TimerProvider } from "../actions/useTimerContext";

export default function Flow06Layout({ children }) {
  return (
    <PlanSelectionProvider defaultPlan={1}>
      <TimerProvider initialSeconds={600}>{children}</TimerProvider>
    </PlanSelectionProvider>
  );
}
