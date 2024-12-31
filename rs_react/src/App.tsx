import {useEffect} from "react";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  const callback = () => {
    console.log("Hello Rsbuild");
  };

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p className="text-2xl font-bold text-red-500">
        Start building amazing things with Rsbuild.
      </p>
      <Home />
    </div>
  );
};

export default App;
