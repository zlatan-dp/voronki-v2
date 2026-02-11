import { TimerProvider } from "../actions/useTimerContext";

import FBPixelDigitalPack from "@/app/components/FacebookPixel/FbPixelDigitalPack";

export default function Flow06Layout({ children }) {
  return (
    <TimerProvider initialSeconds={600}>
      <FBPixelDigitalPack />
      {children}
    </TimerProvider>
  );
}
