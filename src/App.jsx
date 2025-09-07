import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Primary from './Primary';
import Password from './password';

function App() {
  return (
    <>
        <Routes>
          <Route
            path="/"
            element={<Password />}
            />
            <Route
            path="/joeschwartz"
            element={<Primary />}
            />
        </Routes>
    </>
  );
}

export default App;
