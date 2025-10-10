import Sidebar from "./components/Sidebar"
import Profilepage from "./pages/Profilepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <div className="flex min-h-screen bg-black text-white">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profilepage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
