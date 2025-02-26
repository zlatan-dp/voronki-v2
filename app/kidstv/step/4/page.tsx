import { Suspense } from "react";
import StepFourDispatcher from "./Dispatcher";


export default function StepFourPage() {

  return (
      <Suspense fallback={
        <div>Loading...</div>
      }>
        <StepFourDispatcher/>
      </Suspense>
  )
}