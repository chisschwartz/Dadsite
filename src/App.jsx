import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Primary from './Primary';
// import Password from './password';
import Secret from './Secret';

function App() {
  return (
    <>
        <Routes>
          {/* <Route
            path="/"
            element={<Password />}
            /> */}
            <Route
            path="/Dadsite"
            element={<Primary />}
            />
            <Route
            path="/mydad"
            element={<Secret />}
            />
        </Routes>
    </>
  );
}

export default App;
