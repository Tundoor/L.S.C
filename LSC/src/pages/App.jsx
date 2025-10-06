
import '../App.css'
import backgroundImage from '../assets/-Aristole.png'

function App() {
  

  return (
    <>
      <img className="background-img" src={backgroundImage}></img>
      <div className='main-page'>
        <div className='main-header'>
          <h1>Resources</h1>
        <p>This is your one stop destination to find study resources.
           From study guides to exam timetables it is all found right here. 
        </p>
        </div>
        
      </div>
     
    </>
  )
}

export default App
