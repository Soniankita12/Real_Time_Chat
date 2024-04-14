import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../src/component/auth/ProtectRoute";
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));
let user = true;
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute user={user} />
            </Suspense>
          }>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
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
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute user={!user} redirect="/">
                <Login />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
