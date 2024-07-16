import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/inbox/Inbox";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import MuiDef from "./theme/MuiDef";

function App() {
  return (
    <MuiDef>
      <Routes>
        <Route element={
          <LogIn />
        } path="/logIn" />
        <Route element={
          <SignUp />
        } path="/SignUp" />
        <Route element={
          <Inbox />
        } path="/user/:id" />
      </Routes>
      {/* <Inbox /> */}
    </MuiDef>
  )
}

export default App
