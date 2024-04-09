import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path="/chat/:chatId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Chat />
            </Suspense>
          }
        />
        <Route
          path="/groups/:groupId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Groups />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
