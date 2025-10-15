import backgroundImageTwo from "../assets/-James humes.png"

function community() {
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
                  <button className='AddConnectBtn'>Add Connection</button>
                 </div>
                <div className="TandC'sDiv">
                  <p className="terms&conditions"></p>
                </div>
            </div>
        </>
    )
}

export default community
