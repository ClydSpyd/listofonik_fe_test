import ListTest from "./components/ListTest/ListTest";
import LandingPage from "./views/LandingPage/LandingPage";
import Routes from "./AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
