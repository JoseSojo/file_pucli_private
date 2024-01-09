import { Layout } from "./layout/Layout";
import { LoginPage } from "./pages/LoginPage";
import { ContactAdmin } from "./pages/ContactAdmin";
import { AdminPage } from "./pages/private/AdminPage";
import { DirectPage } from "./pages/private/DirectPage";
import { TeacherPage } from "./pages/private/TeacherPage";
import { useEffect, useState } from "react";
import { NAVIGATION_EVENT } from "./constans.d";
import { IndexPage } from "./pages/IndexPage";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [renderApp, setRenderApp] = useState(false);

  useEffect(()=> {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    window.addEventListener('popstate', onLocationChange);
    setRenderApp(!renderApp);
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
      window.removeEventListener('popstate', onLocationChange);
    }
  }, [])


  return (
    <>
      <Layout>
        { currentPath === '/' && <IndexPage /> }
        { currentPath === '/login' && <LoginPage /> }
        { currentPath === '/contact/admin' && <ContactAdmin /> } 
        { currentPath === '/dashboard/direct' && <DirectPage /> }
        { currentPath === '/dashboard/admin' && <AdminPage /> }
        { currentPath === '/dashboard/teacher' && <TeacherPage /> }
      </Layout>
    </>
  )
}

export default App
