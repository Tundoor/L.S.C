import userImg from './assets/mingcute_user-4-fill.svg'

function Navbar() {
      return (
        <>
        <div className='nav-div'>
        <div className="logo-div">
        </div>
        <div className="navLinks">
           <a className="navLink">Home </a>
           <a className="navLink">Study </a>
           <a className="navLink">Planner </a>
           <a className="navLink">
             <img src={userImg} alt="user-symbol"></img>
           </a>
        </div>
        </div>
        </>
      )
}

export default Navbar