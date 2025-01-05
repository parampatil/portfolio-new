import { HashRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AuthListener from "@/features/auth/AuthListener";
import "./App.css";

function App() {
  return (
    <>
      <AuthListener />
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
