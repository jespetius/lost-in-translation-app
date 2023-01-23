import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./views/Login";
import Translate from "./views/Translation";
import Profile from "./views/Profile";
function App() {
  
  return (
        <BrowserRouter>
        <div className="App">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </div>
        </BrowserRouter>
  );
}
export default App;
