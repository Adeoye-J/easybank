// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import RequestInvite from './components/RequestInvite/RequestInvite'
import WhyEasyBank from './components/WhyEasyBank/WhyEasyBank'
import Article from './components/Articles/Article'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <RequestInvite />
      <WhyEasyBank />
      <Article />
      <Footer />
    </>
  )
}

export default App

//   "homepage": "https://adeoye-j.github.io/easybank/",
// 
// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist",


// base: "/easybank/"