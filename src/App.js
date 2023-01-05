import Login from "./components/Login/index";
import ChatRoom from "./components/ChatRoom/index"
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<ChatRoom/>}></Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
