import { useState, useEffect, useRef } from "react";
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import TestPage from "./pages/testPage/TestPage";
import "./styles/global.scss"
import Loader from "./pages/loader/Loader";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let cursor = useRef()

  const isLoading = useSelector(state => state.isLoading)
  const projectIsOpen = useSelector(state => state.projectIsOpen)

  const cursorUpdate = useSelector(state=>state.cursorDifference)

  const [whatPage, setWhatPage] = useState(<Loader />)

  useEffect(()=>{
    if(isLoading)setWhatPage(<HomePage />)
  }, [isLoading])

  return (
    <div  className="app" style={projectIsOpen || isLoading ? {height: '100vh', overflow: "hidden"} : {height: '100%', overflow: "auto"}}>
      <BrowserRouter >
        <Routes>
          <Route path="/accueil" element={<HomePage />}/>
          <Route path="/" element={whatPage}/>
          <Route path="/test" element={<TestPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
