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

  const loading = useSelector(state => state.isLoading)

  const cursorUpdate = useSelector(state=>state.cursorDifference)

  const [whatPage, setWhatPage] = useState(<Loader />)

  useEffect(()=>{
    if(loading)setWhatPage(<HomePage />)
  }, [loading])

  const cursorTraker = e => {
    cursor.current.setAttribute('style', `top: ${e.pageY - 20}px; left:${e.pageX - 20}px;`)
  }

  return (
    <div onMouseMove={cursorTraker} className="app">
      <div className={cursorUpdate ? "cursorPerso difference" : "cursorPerso"} ref={cursor}></div>
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
