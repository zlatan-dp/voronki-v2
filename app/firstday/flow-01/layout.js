// import FacebookPixel from "@/app/components/FacebookPixel/FacebookPixel";

import { UserProvider } from "../actions/userContext";

export default function Flow01Layout({ children }) {
  return (
    <UserProvider>
      {/* <FacebookPixel /> */}
      {children}
    </UserProvider>
  );
}
