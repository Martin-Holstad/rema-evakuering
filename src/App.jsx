import "./App.css";
import { useState, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./components/Login/Login";
import Panel from "./components/Panel/Panel";
import Modal from "./components/common/Modal/Modal";
import AppMessage from "./components/common/Messages/AppMessage";

function App() {
  const [user, setUser] = useState(null);
  const [modelContent, setModalContent] = useState("");
  const [appMessage, setAppMessage] = useState({ open: false, content: "", important: false });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ setModalContent, appMessage, setAppMessage, user }}>
      <div className="App">
        <Router>
          {modelContent && <Modal>{modelContent}</Modal>}
          <AppMessage>{appMessage.content}</AppMessage>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            {user && <Route path="/panel" element={<Panel />} />}
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
