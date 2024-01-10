import { Layout } from "./layout/Layout";
import { LoginPage } from "./pages/LoginPage";
import { ContactAdmin } from "./pages/ContactAdmin";
import { useEffect, useState } from "react";
import { NAVIGATION_EVENT } from "./constans.d";
import { IndexPage } from "./pages/IndexPage";
import { AlternadeDashboard } from "./pages/private/AlternateDashboard";
import { useAuth } from "./context/AuthContext";

function App() {
  const auth = useAuth();
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


  console.log(auth.session, currentPath == '/')

  return (
    <>
      <Layout>
        { !auth.session && currentPath === '/' && <IndexPage /> }
        { !auth.session && currentPath === '/login' && <LoginPage /> }
        { !auth.session && currentPath === '/contact/admin' && <ContactAdmin /> } 
        { auth.session && currentPath === '/' && <AlternadeDashboard /> }
      </Layout>
    </>
  )
}

export default App
