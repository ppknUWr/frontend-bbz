
import AppBase from "./components/AppBase";
import { ContextController } from "./components/ContextController"
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "PHC UWr - Bibliografie Tematyczne";
  }, [])

  return <ContextController>
      <AppBase />
    </ContextController>;
}

export default App;
