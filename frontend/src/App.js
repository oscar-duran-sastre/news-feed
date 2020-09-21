import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
import NavbarTop from "./components/NavbarTop";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <div class="container">
        <div class="row">
          <div class="col">
            <Router>
              <Body>
                <Routes />
              </Body>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
