
import '../App.css'
import backgroundImage from '../assets/-Aristole.png'

function App() {
  

  return (
    <>
      <img className="background-img" src={backgroundImage}></img>
      <div className='main-page'>
        <div className='main-header'>
          <h1 className='heading'>Resources</h1>
        <p className='main-subheading'>This is your one stop destination to find study resources.
           From study guides to exam timetables it is all found right here. 
        </p>
        </div>
        
        <div className='resources-div'>
        
          <select name="All" className="selection">
            <option value="All">All</option>
            <option value="gradeEight">Grade 8</option>
            <option value="gradeNine">Grade 9</option>
            <option value="gradeTen">Grade 10</option>
            <option value="gradeEleven">Grade 11</option>
            <option value="gradeTwelve">Grade 12</option>
          </select>
          <button className='AddItem'>Add Item</button>
        </div>

        <div className='resource-links-div'></div>
       </div>
     
    </>
  )
}

export default App
