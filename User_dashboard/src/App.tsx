import Sidebar from "./components/Sidebar"
import Profilepage from "./pages/Profilepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Voicevault from "./pages/Voicevault"
import Projectpage from "./pages/Projectpage"
function App() {
  return (
    <>
      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profilepage />} />
            <Route path="/voicevault" element={<Voicevault />} />
            <Route path="/projectpage" element={<Projectpage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
