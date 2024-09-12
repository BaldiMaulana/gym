import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./Page";
import Contact from "./components/Contact";
import Prices from "./components/Prices";

function App() {

  return (
    <BrowserRouter>

      <Routes>
        
        <Route path="/" element={<Page />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/price" element={<Prices/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
