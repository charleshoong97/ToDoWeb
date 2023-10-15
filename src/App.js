import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/login/loginPage";
import { theme } from "./style/theme";
import { ThemeUIProvider } from "theme-ui";
import { Provider } from "react-redux";
import store from "./utilities/redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import NotFoundPage from "./components/notFoundPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeUIProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LoginPage />} />
              {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeUIProvider>
    </Provider>
  );
}

export default App;
