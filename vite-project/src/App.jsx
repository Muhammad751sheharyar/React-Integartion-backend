import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setPage("signup")}>Signup</button>
      <button onClick={() => setPage("login")}>Login</button>

      <hr />

      {page === "signup" ? <Signup /> : <Login />}
    </div>
  );
}

export default App;
