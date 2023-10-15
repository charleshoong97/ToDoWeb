import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/login/loginPage";
import { theme } from "./style/theme";
import { ThemeUIProvider } from "theme-ui";
import { Provider } from "react-redux";
import store from "./utilities/redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeUIProvider theme={theme}>
        <div className="App">
          <LoginPage />
        </div>
      </ThemeUIProvider>
    </Provider>
  );
}

export default App;
