import backgroundImageTwo from "../assets/-James humes.png"
import AddConnection from "../components/addConnection.jsx"
import { useState, useEffect } from "react"
import { communication } from "../assets/data.js"

function getSavedCommunications() {
  const STORAGE_KEY = "communications";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...(communication || [])];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read localStorage, using defaults", e);
    return [...(communication || [])];
  }
}

function community() {
 
const [communications, setCommunications] = useState(() => getSavedCommunications());

    useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(communications));
  }, [communications]);

  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const STORAGE_KEY = "communications";

  const addCommunication = (newItem) => {
    setCommunications(prev => [...prev, newItem]); // update state immediately
    closeModal(); // close the modal after adding
};

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(communications));
  }, [communications]);

    return (
        <>
            <img className="background-img"
                src={backgroundImageTwo}></img>
            <div className='main-page'>
                <div className='main-header'>
                    <h1 className='heading'>Communication</h1>
                    <p className='main-subheading'>
                        Looking to make studying and exams just a little easier? Join groups, connect with peers, and be part of communities where students support each other, share resources, and grow together.
                        Who knows? Joining one study group could be your first step toward a better, more successful future.
                    </p>
                </div>
                 <div className='resources-div'>
                  <button className='AddConnectBtn' onClick={openModal}>Add Connection</button>
                  <AddConnection isOpen={isModalOpen} onClose={closeModal} addCommunication={addCommunication} />
                 </div>
                
               <div className="comms-div">
             {communications.map((data) => (  
                 <div className='main-resource-div'>
                    <div className='resource-links-div'>
                        <div className='resource'>
                            <h1 className="groupName">{data.name}</h1>
                            <div className='info-div'>
                                   <h2 className='type'>{data.app}</h2>
                                    <a href={data.groupLink} className='download join' target="_blank">Join Group</a>               
                            </div>
                        </div>
                    </div>
                </div>
                ))}
</div>
                <div className="TandC'sDiv">
                  <p className="terms&conditions"></p>
                </div>
            </div>
        </>
    )
}

export default community
