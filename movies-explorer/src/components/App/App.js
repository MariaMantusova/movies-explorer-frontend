import React from "react";
import {Route, Routes, Redirect, useHistory} from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Routes>
          <Route path="/sign-in">

          </Route>
          <Route path="/sign-up">

          </Route>
          <Route path="/movies">

          </Route>
          <Route path="/saved-movies">

          </Route>
          <Route path="/profile">

          </Route>
          <Route exact path="/">

          </Route>
      </Routes>
    </div>
  );
}

export default App;
