
import '../App.css'
import backgroundImage from '../assets/-Aristole.png'
import AddItem from "../components/addItem"
import { useState } from "react"

function App() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


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
          <button className='AddItem' onClick={openModal}>Add Item</button>
          <AddItem isOpen={isModalOpen} onClose={closeModal}/>
        </div>

        <div className='resource-links-div'>
           <div className='resource'>
              <h1>Exam Paper 2 2015</h1>
              <div className='grade-div'>
              <h2>Grade: 10</h2>
              </div>
              <h2>Type: Past Paper</h2>
              <div className='downloadDiv'>
                <h2>Download:</h2>
                <a href='' download>Link name</a>
              </div>
           </div>
        </div>
       </div>
     
    </>
  )
}

export default App
