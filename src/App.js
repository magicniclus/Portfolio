import { useState, useEffect, useRef } from "react";
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import TestPage from "./pages/testPage/TestPage";
import "./styles/global.scss"
import Loader from "./pages/loader/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeTextColor, projectIsClose, updateScreenSize } from "./redux/actions/actions";
import MobilPage from "./pages/mobilPage/MobilPage";
import { homePageLoading } from './redux/actions/actions';


function App() {
  
  let cursor = useRef()
  
  const isLoading = useSelector(state => state.isLoading)
  const projectIsOpen = useSelector(state => state.projectIsOpen)
  
  const cursorUpdate = useSelector(state=>state.cursorDifference)

  const mobilSize = useSelector(state => state.mobilSize)
  
  const [whatPage, setWhatPage] = useState(<Loader />)

  const dispatch = useDispatch()

  useEffect(()=>{
      window.addEventListener('load', (event) => {
          setTimeout(()=>{
              dispatch(homePageLoading())
              window.scrollTo(0, 0);
          }, 5000)
      });
  }, [])
  
  const useIsMobile = () => {
    useEffect(() => {
        const onResize = () => {
            if(window.innerWidth <= 1024){
              dispatch(updateScreenSize(true))
            }else{
              dispatch(updateScreenSize(false))

            }
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
  }
 
  useIsMobile()

  useEffect(() => {
          if(window.innerWidth <= 1024){
            dispatch(updateScreenSize(true))
          }else{
            dispatch(updateScreenSize(false))
          }
  }, []);
    
  useEffect(()=>{
    if(window.innerWidth <= 1024){
      dispatch(projectIsClose());
      dispatch(changeColor("#EDEAE6"));
      dispatch(changeTextColor("#373634"))
    }


    if(!mobilSize && !isLoading){
        setWhatPage(<HomePage />)
    }else if (!mobilSize && isLoading){
      setWhatPage(<Loader />)
    }else {
      setWhatPage(<MobilPage />)
    }
  }, [mobilSize])

  useEffect(()=>{
    if(!mobilSize && !isLoading){
        setWhatPage(<HomePage />)
    }else if (!mobilSize && isLoading){
      setWhatPage(<Loader />)
    }else {
      setWhatPage(<MobilPage />)
    }
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
