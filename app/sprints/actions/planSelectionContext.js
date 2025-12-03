"use client";

import { createContext, useContext, useState } from "react";

const PlanSelectionContext = createContext();

export function PlanSelectionProvider({ children }) {
  const [selectedPlanId, setSelectedPlanId] = useState(null);

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
