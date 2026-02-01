import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route}from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Button from "./components/Button";
function App() {
  // const [page, setPage] = useState("signup");

  return (
    <div>
       {/* <Router>
        <Routes>
          <Route path= "/Signup" element={<Signup />}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>  */}
       {/* <button onClick={() => setPage("signup")}>Signup</button> */}
       {/* <button onClick={() => setPage("login")}>Login</button> */}
      {/* <hr /> */}
      {/* {page === "signup" ? <Signup /> : <Login />} */}
      <Button />
      <Signup />
      kjckgiasgd
    </div>
  );
}

export default App;
