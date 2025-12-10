import { TimerProvider } from "../actions/useTimerContext";
// import { PlanSelectionProvider } from "../actions/planSelectionContext";

export default function Flow02Layout({ children }) {
  return (
    // <PlanSelectionProvider>
    <TimerProvider initialSeconds={600}>{children}</TimerProvider>
    // </PlanSelectionProvider>
  );
}
