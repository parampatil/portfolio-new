import AppRouter from "./router/AppRouter";
import AuthListener from "@/features/auth/AuthListener";
import "./App.css";


function App() {

  return (
    <>
      <AuthListener />
      <AppRouter />
    </>
  );
}

export default App;
