import userImg from '../assets/mingcute_user-4-fill.svg'
import { Link } from "react-router-dom"

function Navbar() {
      return (
        <>
        <div className='nav-div'>
        <div className="logo-div">
           <h1>STUDYECT</h1>
           <p>Learn . Study . Connect</p>
        </div>
        <div className="navLinks">
           <Link className="navLink nav-link" to="/">Home </Link>
           <Link className="navLink nav-link" to="/study">Study </Link>
           <Link className="navLink nav-link"to="/connect">Connect </Link>
        </div>
        </div>
        </>
      )
}

export default Navbar