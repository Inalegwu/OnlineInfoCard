import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MainCard from "./components/MainCard/MainCard";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainCard>
        <Left />
        <Right />
      </MainCard>
    </div>
  );
}

export default App;
