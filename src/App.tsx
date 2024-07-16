import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/inbox/Inbox";
import LogIn from "./pages/Login";
import SendEmail from "./pages/SendEmail"
import { createTheme, MantineProvider } from '@mantine/core';

function App() {
  const theme = createTheme({
  });
  return (
    <div style={{ width: "100vw" }}>
      <Routes>
        <Route element={
          <LogIn />
        } path="/logIn" />
        <Route element={
          <Inbox />
        } path="/user/:name" />
      </Routes>
      {/* <Inbox /> */}
    </div>
  )
}

export default App
