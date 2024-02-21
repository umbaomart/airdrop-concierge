import Home from './pages/Home';
import Task from './pages/Task';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgotPass';

import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter basename="/airdrop-concierge">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="task" element={<Task />} />
          <Route path="intro" element={<Intro />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-pass" element={<ForgotPass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App