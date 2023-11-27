import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // 새로운 CSS 파일을 생성하고 여기에 코드를 복사합니다.
import Elevator from './pages/elevator'; 
import Home from "./pages/home";
//Link 활용법으로 페이지 전환하기 2023-11-24

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/elevator" element={<Elevator/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
