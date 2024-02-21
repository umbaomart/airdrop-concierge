import Home from './pages/Home';
import Task from './pages/Task';
// import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    // <Home />
    <BrowserRouter basename="/airdrop-concierge">
      <Routes>
        {/* <Route path="/" element={<Layout />} > */}
          <Route index element={<Home />} />
          <Route path="task" element={<Task />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
