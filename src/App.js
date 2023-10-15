import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/login/loginPage";
import { theme } from "./style/theme";
import { ThemeUIProvider } from "theme-ui";

function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <div className="App">
        <LoginPage />
      </div>
    </ThemeUIProvider>
  );
}

export default App;
