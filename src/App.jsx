import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Primary from './Primary';
import Secret from './Secret';

function App() {
  return (
    <>
        <Routes>
            <Route
            path="/"
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
