import { useState, useEffect } from "react";
import Data from "./components/Data";
import Login from "./components/Login";

function App() {
  const [user, setuser] = useState(false);

  useEffect(() => {
    let loginstate = localStorage.getItem("user");
    if (JSON.parse(loginstate)) {
      const email = JSON.parse(loginstate).email;
      if (email !== "") {
        setuser(true);
      } else {
        setuser(false);
      }
    }
  }, [user]);

  return <div className="App">{!user ? <Login /> : <Data />}</div>;
}

export default App;
