import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './assets/header'
import { Filter } from './assets/filter'
import { Content } from './assets/content'
import { Footer } from './assets/footer'

function App() {

  return (
    <>
      <div className="container">
        <Header/>
        <Filter/>
        <Content/>
         <Footer/> 
      </div>
    </>
  )
}

export default App
