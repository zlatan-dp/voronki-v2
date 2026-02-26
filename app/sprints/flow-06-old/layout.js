import { PlanSelectionProvider } from "../actions/planSelectionContext";
import { TimerProvider } from "../actions/useTimerContext";

import FacebookPixel from "@/app/components/FacebookPixel/FacebookPixel";

export default function Flow06Layout({ children }) {
  return (
    <PlanSelectionProvider defaultPlan={1}>
      <TimerProvider initialSeconds={600}>
        <FacebookPixel />
        {children}
      </TimerProvider>
    </PlanSelectionProvider>
  );
}
