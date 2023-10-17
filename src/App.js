import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import { theme } from "./style/theme";
import { ThemeUIProvider } from "theme-ui";
import { Provider, useDispatch } from "react-redux";
import store from "./utilities/redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import NotFoundPage from "./components/notFoundPage";
import Dashboard from "./components/dashboard";
import CreateToDo from "./components/createToDo";
import SyncLocalStorage from "./components/authentication/syncLocalStorage";
import ValidateAuthorization from "./components/authentication/validateAuthorization";
import Home from "./components/home";

function App() {
  // store.subscribe(() => {
  //   console.log("subscribe")
  //   const state = store.getState();
  //   console.log(state)
  //   const serializedState = JSON.stringify(state);
  //   localStorage.setItem("state", serializedState);
  // });

  return (
    <Provider store={store}>
      <ThemeUIProvider theme={theme}>
        <SyncLocalStorage>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="dashboard"
                  element={
                    <ValidateAuthorization>
                      <Dashboard />
                    </ValidateAuthorization>
                  }
                />
                <Route
                  path="create"
                  element={
                    <ValidateAuthorization>
                      <CreateToDo />
                    </ValidateAuthorization>
                  }
                />
                {/* <Route path="contact" element={<Contact />} /> */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SyncLocalStorage>
      </ThemeUIProvider>
    </Provider>
  );
}

export default App;
