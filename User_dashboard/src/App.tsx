
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
import Projectdetails from "./components/projects/Projectdetails"
import AuthCallback from "./pages/AuthCallBack"
import ProtectedRoute from "./components/ProtectedRoute"
import { Toaster } from "react-hot-toast";
import { NotificationProvider } from "./components/global/NotificationContext"


function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #333",
          },
        }}
      />
      <NotificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/termsofservice" element={<Termsofservice />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/personaldetails" element={<Personaldetails />} />
          <Route path="/login" element={<Login />} />

          <Route path="/auth/callback" element={<AuthCallback />} />


          <Route path="/userdashboard" element={<Dashboard />} >
            <Route path="profile" element={<ProtectedRoute> <Profilepage /> </ProtectedRoute>} />

            <Route path="voicevault" element={<Voicevault />} />

            <Route path="projectpage" element={<Projectpage />} >
              <Route path="createproject" element={<Createproject />} />
              <Route path="projectdetails" element={<Projectdetails />} />
            </Route>

            <Route path="sidebarsettings" element={<SidebarSettings />} />
            <Route path="settings" element={<Settingspage />} >
              <Route path="account" element={<Accountdetails />} />
              <Route path="general" element={<Generalsettings />} />
              <Route path="notification" element={<Notificationsettings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </NotificationProvider>
    </>
  )
}

export default App
