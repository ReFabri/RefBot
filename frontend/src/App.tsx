import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
