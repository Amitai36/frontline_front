import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/inbox/Inbox";
import LogIn from "./pages/Login";
import SendEmail from "./pages/SendEmail"
import { createTheme, MantineProvider } from '@mantine/core';
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div style={{ width: "100vw" }}>
      <Routes>
        <Route element={
          <LogIn />
        } path="/logIn" />
        <Route element={
          <SignUp />
        } path="/SignUp" />
        <Route element={
          <Inbox />
        } path="/user/:name" />
      </Routes>
      {/* <Inbox /> */}
    </div >
  )
}

export default App
