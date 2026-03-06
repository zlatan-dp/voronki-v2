import FBPixelDigitalPack from "@/app/components/FacebookPixel/FbPixelDigitalPack";

import { UserProvider } from "../actions/userContext";

export default function Flow01Layout({ children }) {
  return (
    <UserProvider>
      <FBPixelDigitalPack />
      {children}
    </UserProvider>
  );
}
