import { HashRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AuthListener from "@/features/auth/AuthListener";
import { Toaster } from "@/components/ui/toaster"
import "./App.css";

function App() {
  return (
    <>
      <AuthListener />
      <Router>
        <AppRouter />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
