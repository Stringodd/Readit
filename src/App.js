import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./router";
import Auth from "./Pages/Auth";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
