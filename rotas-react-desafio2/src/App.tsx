



import { BrowserRouter, Route, Routes } from "react-router-dom"
import Host from "./routes/Host"
import Home from "./routes/Host/Home"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Host />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
