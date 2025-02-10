import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import ByeCredit from "./pages/ByeCredit";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
// import { SignInButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navebar/>
      
      <Routes>
        <Route>
       <Route path="/" element= {<Home/>} />
       <Route path="/result" element= {<Result/>} />
       <Route path="/buy" element= {<ByeCredit/>} />

        </Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
