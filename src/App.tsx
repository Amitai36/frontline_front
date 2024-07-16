import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/inbox/Inbox";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import MuiDef from "./theme/MuiDef";
import DraftIndex from "./pages/draft";

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
        <Route element={
          <DraftIndex />
        } path="/draft/:id" />
      </Routes>
    </MuiDef>
  )
}

export default App
