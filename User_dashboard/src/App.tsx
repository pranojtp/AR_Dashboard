
import Profilepage from "./pages/Profilepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Voicevault from "./pages/Voicevault"
import Projectpage from "./pages/Projectpage"
import Signup from "./components/auth/Signup"
import Dashboard from "./pages/Dashboard"
import Personaldetails from "./components/auth/Personaldetails"
import Accountdetails from "./components/settings/Accountdetails"
import Settingspage from "./pages/Settingspage"
import Generalsettings from "./components/settings/Generalsettings"
import Notificationsettings from "./components/settings/Notificationsettings"
import Login from "./components/auth/Login"
import SidebarSettings from "./components/settings/Sidebar_settings"
import LandingPage from "./pages/LandingPage"
import Termsofservice from "./components/landingpage/Termsofservice"
import Privacypolicy from "./components/landingpage/Privacypolicy"
import Createproject from "./components/projects/Createproject"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/termsofservice" element={<Termsofservice />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/personaldetails" element={<Personaldetails />} />
          <Route path="/login" element={<Login />} />



          <Route path="/userdashboard" element={<Dashboard />} >
            <Route path="profile" element={<Profilepage />} />

            <Route path="voicevault" element={<Voicevault />} />

            <Route path="projectpage" element={<Projectpage />} >
              <Route path="createproject" element={<Createproject />} />
            </Route>

            <Route path="settings" element={<SidebarSettings />} />
            <Route path="settings" element={<Settingspage />} >
              <Route path="account" element={<Accountdetails />} />
              <Route path="general" element={<Generalsettings />} />
              <Route path="notification" element={<Notificationsettings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
