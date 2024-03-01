import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
