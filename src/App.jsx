import { useState } from "react";
import "./App.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./component/Body";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./component/Feed";
import Connections from "./component/Connections";
import Requests from "./component/Requests";
import Premium from "./component/Premium";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
             <Route path="/requests" element={<Requests />} />
             <Route path="/premium" element={<Premium />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
