import backgroundImageTwo from "../assets/-James humes.png"
import AddConnection from "../components/addConnection.jsx"
import { useState } from "react"

function community() {

   const [ isModalOpen, setIsModalOpen ] = useState(false)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);



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
                  <AddConnection isOpen={isModalOpen} onClose={closeModal}/>
                 </div>
                 <div className='main-resource-div'>
                    <div className='resource-links-div'>
                        <div className='resource'>
                            <h1 className="groupName">Group xyz</h1>
                            <div className='info-div'>
                                    <a href='' className='download join'>Join Group</a>               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="TandC'sDiv">
                  <p className="terms&conditions"></p>
                </div>
            </div>
        </>
    )
}

export default community
