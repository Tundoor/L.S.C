import '../App.css'
import backgroundImage from '../assets/-Aristole.png'
import AddItem from "../components/addItem"
import {useState, useEffect} from "react"
import  resources  from '../assets/data.js'


function getSavedResources() {
  const STORAGE_KEY = "resources";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...(resources || [])];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read localStorage, using defaults", e);
    return [...(resources || [])];
  }
}

function App() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const STORAGE_KEY = "resources";
    const [resources, setResources] = useState(() => getSavedResources());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
  }, [resources]);

    return (
        <>
            <img className="background-img"
                src={backgroundImage}></img>
            <div className='main-page'>
                <div className='main-header'>
                    <h1 className='heading'>Resources</h1>
                    <p className='main-subheading'>This is your one stop destination to find study resources.
                                                                                                       From study guides to exam timetables it is all found right here.
                    </p>
                </div>

                <div className='resources-div'>
                    <div className='resource-btns'>
                        {/* <select name="All" className="selection">
                            <option value="All">All</option>
                            <option value="gradeEight">Grade 8</option>
                            <option value="gradeNine">Grade 9</option>
                            <option value="gradeTen">Grade 10</option>
                            <option value="gradeEleven">Grade 11</option>
                            <option value="gradeTwelve">Grade 12</option>
                        </select> */}
                        <button className='AddItem'
                            onClick={openModal}>Add Item</button>
                        <AddItem isOpen={isModalOpen}
                            onClose={closeModal}/>
                    </div>
                </div>
            <div className='exam-div'>
                {resources.map((data) => ( 
                <div className='main-resource-div'>
                    <div className='resource-links-div'>
                        <div className='resource'>
                            <h1>{data.fileName}</h1>
                            <div className='info-div'>
                               <h2 className='type'>{data.type}</h2>
                                <div className='grade-div'>
                                    <h2>Grade: {data.grade}</h2>
                                </div>
                                    <a href={data.fileURL} download className='download'>Download</a>               
                            </div>
                        </div>
                    </div>
                   </div>
                   ))}
                </div>
            </div>

        </>
    )
}

export default App
