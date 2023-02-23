import {BrowserRouter,Routes,Route} from "react-router-dom";
import SpecialPage from "./components/SpecialPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [activePage,setActivePage] = useState("home")



  return (
    <div id="app" className={`bg-homeDesktop min-h-screen font-barlow text-customWhite bg-cover bg-no-repeat w-desktopW`}>
      <BrowserRouter>
      <Navbar activePage={activePage} setActivePage={setActivePage}/>

      <Routes>

        <Route path="/" exact element={<HomePage/>} />
        <Route path="/:page" element={<SpecialPage setActivePage={setActivePage}  />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
