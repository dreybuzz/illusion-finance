import { useEffect, useLayoutEffect, useState } from "react"
import useWindowDimensions from "./../../Hooks/useWindowDimensions"
import NavBar from "../NavBar/NavBar"
import "./Sidebar.scss"
import { api } from "../../utilities/helpers"

interface Sidebar {
  sidebarShown: boolean
  toggleSidebar: Function
}
export default function Sidebar({ sidebarShown, toggleSidebar }: Sidebar) {
  const { width, height } = useWindowDimensions()
  const [userIP, setUserIP] = useState("")

  // Sidebar Shown State
  useLayoutEffect(() => {
    if (width < 767) {
      toggleSidebar()
    }
    api("https://ifconfig.me").then((res) => setUserIP(res))
  }, [width])

  return (
    <div
      id="sidebar"
      className={`col-12 col-lg-4 col-xl-3 col-xxl-2 col-md-4 p-0 h-100 mh-100 ${
        sidebarShown ? "shown" : "hidden"
      } justify-content-center align-items-center overflow-scroll`}>
      <div className="container-fluid d-flex flex-column p-2 h-100 mh-100">
        {/* Profile Info */}
        <div className="shadowed p-2 d-flex pointer mb-5">
          {/* Display Picture */}
          <span className="col-2 p-1">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
              className="rounded-circle img-fluid"
            />
          </span>

          {/* Name & E-Mail */}
          <span className="col p-1 d-flex flex-column justify-content-center">
            <span>Idowu Damilare</span>
            <span className="profile-email badge bg-primary">
              dammy@damilareidowu.com
            </span>
          </span>

          {/* Log Out */}
          <span className="col-1 p-1 d-flex align-items-center justify-content-end">
            <span
              className={`material-symbols-outlined fs-1`}
              role="button"
              id="theme-toggle">
              {"logout"}
            </span>
          </span>
        </div>

        {/* NavBar */}
        <span className="h-100 mh-100 overflow-auto shadowed mb-3 p-3">
          <NavBar />
        </span>

        {/* IP Address */}
        <span className="shadowed p-3 d-flex justify-content-center align-items-center pointer">
          IP Address: <span className="ms-2 fw-bolder"> {userIP} </span>
        </span>
      </div>
    </div>
  )
}
