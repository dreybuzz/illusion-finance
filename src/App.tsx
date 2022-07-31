import { useState } from "react"
import "./App.scss"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/Main/Main"

export default function App() {
  // Theme Toggle
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)
  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  // Sidebar Toggle
  const [sidebarShown, setSidebarShown] = useState(true)
  function toggleSidebar() {
    setSidebarShown(!sidebarShown)
  }

  return (
    <BrowserRouter>
      <div
        className={`${
          isDarkTheme ? "dark-mode" : "light-mode"
        } container-fluid d-flex flex-column justify-content-between h-100 mh-100 overflow-scroll`}>
        {/* Header */}
        <Header
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
          sidebarShown={sidebarShown}
          toggleSidebar={toggleSidebar}
        />

        {/* Sidebar & Main */}
        <div className="container-fluid h-100 mh-100 overflow-scroll">
          <div className="row h-100">
            {/* Sidebar */}
            <Sidebar
              sidebarShown={sidebarShown}
              toggleSidebar={toggleSidebar}
            />

            {/* Main */}
            <Main />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
