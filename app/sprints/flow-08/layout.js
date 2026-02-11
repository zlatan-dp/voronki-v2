import { PlanSelectionProvider } from "../actions/planSelectionContext";
import { UserProvider } from "../actions/userContext";
import { TimerProvider } from "../actions/useTimerContext";

export default function Flow06Layout({ children }) {
  return (
    <PlanSelectionProvider defaultPlan={1}>
      <UserProvider>
        <TimerProvider initialSeconds={600}>{children}</TimerProvider>
      </UserProvider>
    </PlanSelectionProvider>
  );
}
