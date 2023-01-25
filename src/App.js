import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./views/Login";
import Translate from "./views/Translate";
import Profile from "./views/Profile";
import NavBar from "./components/Navbar/Navbar";
function App() {
  
  return (
        <BrowserRouter>
        <div className="App">
        <NavBar/>  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </div>
        </BrowserRouter>
  );
}
export default App;
