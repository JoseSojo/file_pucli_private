import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useAuth } from "./context/AuthContext";
import { Layout } from "./layout/Layout";
import { LoginPage } from "./pages/LoginPage";
import { ContactAdmin } from "./pages/ContactAdmin";
import { AdminPage } from "./pages/private/AdminPage";
import { DirectPage } from "./pages/private/DirectPage";
import { TeacherPage } from "./pages/private/TeacherPage";
import { ValidSession } from "./pages/ValidSession";

function App() {
  // const auth = useAuth();

  return (
    <Layout>
      <BrowserRouter>
        <Routes>

          <Route path='/login' Component={LoginPage} />
          <Route path='/contact/admin' Component={ContactAdmin} />

          <Route element={<ValidSession />}>
            <Route path='/dashboard/direct' Component={DirectPage} />
            <Route path='/dashboard/admin' Component={AdminPage} />
            <Route path='/dashboard/teacher' Component={TeacherPage} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default App
