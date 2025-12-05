"use client";

import { createContext, useContext, useState } from "react";

const PlanSelectionContext = createContext();

export function PlanSelectionProvider({ defaultPlan = 1, children }) {
  const [selectedPlanId, setSelectedPlanId] = useState(defaultPlan);

  return (
    <PlanSelectionContext.Provider
      value={{ selectedPlanId, setSelectedPlanId }}
    >
      {children}
    </PlanSelectionContext.Provider>
  );
}

export function usePlanSelection() {
  return useContext(PlanSelectionContext);
}
