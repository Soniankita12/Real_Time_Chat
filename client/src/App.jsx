import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../src/component/auth/ProtectRoute";
import { LoaderLayout } from "./component/layout/Loaders";
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
            <Suspense fallback={<LoaderLayout />}>
              <ProtectedRoute user={user} />
            </Suspense>
          }>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoaderLayout />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/chat/:chatId"
            element={
              <Suspense fallback={<LoaderLayout />}>
                <Chat />
              </Suspense>
            }
          />
          <Route
            path="/groups/:groupId"
            element={
              <Suspense fallback={<LoaderLayout />}>
                <Groups />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoaderLayout />}>
              <ProtectedRoute user={!user} redirect="/">
                <Login />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoaderLayout />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
