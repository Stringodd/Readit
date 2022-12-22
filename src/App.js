import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import router from "./router";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
