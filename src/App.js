// FUNCTION BASED
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
// import NewsItem from './Components/NewsItem';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App =()=> {
  const pagesize = 9;
  // apiKey="89209b5fcf524fae8d4ae7cb052f3cc5";
  const apiKey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <>
          <Router>
            <Navbar />
            {/* top loading bar */}
            <LoadingBar
              height={2}
              color="#f11946"
              progress={progress}
            />
            <div>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="Home"
                      pagesize={pagesize}
                      country="in"
                      category="General"
                    />
                  }
                />
                <Route
                  exact
                  path="/About"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="About"
                      pagesize={pagesize}
                      country="in"
                      category="About"
                    />
                  }
                />
                <Route
                  exact
                  path="/Business"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="Business"
                      pagesize={pagesize}
                      country="in"
                      category="Business"
                    />
                  }
                />
                <Route
                  exact
                  path="/Entertainment"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="Entertainment"
                      pagesize={pagesize}
                      country="in"
                      category="Entertainment"
                    />
                  }
                />
                <Route
                  exact
                  path="/General"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="General"
                      pagesize={pagesize}
                      country="in"
                      category="General"
                    />
                  }
                />
                <Route
                  exact
                  path="/Health"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="Health"
                      pagesize={pagesize}
                      country="in"
                      category="Health"
                    />
                  }
                />
                <Route
                  exact
                  path="/Science"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="Science"
                      pagesize={pagesize}
                      country="in"
                      category="Science"
                    />
                  }
                />
                <Route
                  exact
                  path="/Sports"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="Sport"
                      pagesize={pagesize}
                      country="in"
                      category="Sports"
                    />
                  }
                />
                <Route
                  exact
                  path="/Technology"
                  element={
                    <News
                      setProgress={setProgress}
                      apiKey={apiKey}
                      key="Technology"
                      pagesize={pagesize}
                      country="in"
                      category="Technology"
                    />
                  }
                />
              </Routes>
            </div>
          </Router>
        </>
      </div>
    );
  
}

export default App;

