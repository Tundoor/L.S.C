import userImg from '../assets/mingcute_user-4-fill.svg'

function Navbar() {
      return (
        <>
        <div className='nav-div'>
        <div className="logo-div">
           <h1>LEARN STUDY CONNECT</h1>
           <p>Grab Your Future</p>
        </div>
        <div className="navLinks">
           <a className="navLink nav-link">Home </a>
           <a className="navLink nav-link">Study </a>
           <a className="navLink nav-link">Planner </a>
           <a className="navLink nav-link">Connect </a>
           <a className="navLink">
             <img src={userImg} alt="user-symbol" className='user-enter-img'></img>
           </a>
        </div>
        </div>
        </>
      )
}

export default Navbar