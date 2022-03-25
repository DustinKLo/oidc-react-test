import React from "react";

import AuthProvider from "./components/AuthProvider";
import RootRoutes from "./RootRoutes";

export default function () {
  return (
    <AuthProvider>
      <RootRoutes />
    </AuthProvider>
  );
}
