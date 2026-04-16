import { Outlet } from "react-router-dom";
import Nav from "../components/nav.jsx";
const Mainlayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default Mainlayout