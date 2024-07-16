import LogIn from "./pages/Login";
import SendEmail from "./pages/SendEmail"
import { createTheme, MantineProvider } from '@mantine/core';

function App() {
  const theme = createTheme({
  });
  return (
    <div style={{ width: "100vw" }}>
      <LogIn />
    </div>
  )
}

export default App
