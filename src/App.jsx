import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./Page";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Page />}>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
