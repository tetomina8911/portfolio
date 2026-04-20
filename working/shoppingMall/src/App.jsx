import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll'
import ProductDetail from './page/ProductDetail'
import Login from './page/Login'
import Header from './component/Header'
import PrivateRoute from './route/PrivateRoute'

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바를 만든댜
// 2. 전체 상품페이지 - 전체 상품
// 3. 로그인 클릭 -> 로그인페이지 form, preventDefault
// 3. 상품디테일 클릭 - 로그인 X -> 로그인페이지 
// 4. 로그인 O -> 상품디테일 페이지
// 5. 로그아웃 클릭시 로그아웃 
// 5. 로그아웃 후 상품디테일 페이지 상태면 로그인 페이지
// 6. 로그인/아웃 버튼 전환
// 7. 상품 검색

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect( () => {
    console.log('AAA', authenticate);
  }, [authenticate])

  return (
    <div id='wrapper'>
      <Header setAuthenticate={setAuthenticate} authenticate={authenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
      </Routes>
    </div>
  )
}


export default App