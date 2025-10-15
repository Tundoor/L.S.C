function addConnection ({ isOpen, onClose }) {
    
       if (!isOpen) return null

       function close (e) {
            e.preventDefault()
            onClose()
        }  

        function submit (e) {
            e.preventDefault()
            onClose()
        }

    return (
        <>
            <div className="overlay">
                <form className="addItemForm">
                    <h1>Contribute by adding a resource</h1>
                    <label>Add Name of Group:</label>
                    <input type="text" placeholder="eg. studyBuddies✏️"></input>
                    <label>Add Link URL:</label>
                    <input type="text" placeholder="eg. www.geteducated.co.va"></input>
                    <label>App Group is on:
                    </label>
                    <input type="text" placeholder="eg. Whatsapp, Discord, Instagram"></input>
                    <div className="addItemsBtns">
                        <button id="cancelAddItem" onClick={close} >Cancel</button>
                        <button id="submitItem" onClick={submit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default addConnection