
import Profilepage from "./pages/Profilepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Voicevault from "./pages/Voicevault"
import Projectpage from "./pages/Projectpage"
import Signup from "./components/auth/Signup"
import Dashboard from "./pages/Dashboard"
import Personaldetails from "./components/auth/Personaldetails"
import Agreementsign from "./components/voicevault/Agreementsign"
import Accountdetails from "./components/settings/Accountdetails"
import Settingspage from "./pages/Settingspage"
import Generalsettings from "./components/settings/Generalsettings"
import Notificationsettings from "./components/settings/Notificationsettings"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/personaldetails" element={<Personaldetails />} />

          <Route path="/settings" element={<Settingspage />} >
            <Route path="account" element={<Accountdetails />} />
            <Route path="general" element={<Generalsettings />} />
            <Route path="notification" element={<Notificationsettings />} />
          </Route>

          <Route path="/userdashboard" element={<Dashboard />} >
            <Route path="profile" element={<Profilepage />} />
            <Route path="voicevault" element={<Voicevault />} />
            <Route path="projectpage" element={<Projectpage />} />
            <Route path="agreementsign" element={<Agreementsign />} />
            {/* <Route path="settings" element={<Sidebar_settings />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
