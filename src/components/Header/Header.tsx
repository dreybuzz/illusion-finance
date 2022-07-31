import "./Header.scss"
import darkLogo from "./../../assets/img/logo-dark.svg"
import lightLogo from "./../../assets/img/logo-light.svg"

interface Header {
  isDarkTheme: boolean
  toggleTheme: Function
  sidebarShown: boolean
  toggleSidebar: Function
}

export default function Header({
  isDarkTheme,
  toggleTheme,
  sidebarShown,
  toggleSidebar,
}: Header) {
  return (
    <div
      id="header"
      className="row justify-content-between align-items-center p-3">
      {/* Hamburger & Logo */}
      <div className="col-4 col-md-2 col-lg-2 col-xl-1 d-flex justify-content-start align-items-center p-0">
        {/* Hamburger */}
        <span
          className={`material-symbols-outlined fs-1`}
          role="button"
          id="theme-toggle"
          onClick={() => toggleSidebar()}>
          menu
        </span>

        {/* Logo */}
        <span>
          <img
            src={isDarkTheme ? lightLogo : darkLogo}
            alt=""
            className="img-fluid"
          />
        </span>
      </div>

      {/* Title */}
      {/* <div className="col d-none d-md-flex justify-content-center align-items-center">
          <span className="fs-4 fw-bolder">Online Banking</span>
        </div> */}

      {/* Icons */}
      <div className="col-2 col-md-2 col-lg-2 col-xl-1 d-flex justify-content-end align-items-center">
        {/* Settings */}
        <span
          className={`material-symbols-outlined fs-1 me-3`}
          onClick={() => toggleTheme()}
          role="button">
          {"settings"}
        </span>

        {/* Notifications */}
        <span
          className={`material-symbols-outlined fs-1 me-3`}
          onClick={() => toggleTheme()}
          role="button">
          {"notifications"}
        </span>

        {/* Theme Switcher */}
        <span
          className={`material-symbols-outlined fs-1 me-3`}
          onClick={() => toggleTheme()}
          role="button"
          id="theme-toggle">
          {isDarkTheme ? "dark_mode" : "light_mode"}
        </span>
      </div>
    </div>
  )
}
