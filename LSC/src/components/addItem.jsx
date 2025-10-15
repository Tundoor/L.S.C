
function AddItem({ isOpen, onClose }) {
      
     if (!isOpen) return null;

    function closeModal (e) {
         e.preventDefault()
         onClose()
    }

    function submit(e) {
        e.preventDefault()
        onClose()
    }
    return (
        <>
            <div className="overlay">
                <form className="addItemForm">
                    <h1>Contribute by adding a resource</h1>
                    <label>Add Link Name:</label>
                    <input type="text" placeholder="eg. Exam paper one"></input>
                    <label>Add Link URL:</label>
                    <input type="text" placeholder="eg. www.geteducated.co.va"></input>
                    <label>Resource for what grade?
                    </label>
                    <input type="text" placeholder="(Please only enter grade 8 - 12)"></input>
                    <label>Resource type:</label>
                    <input type="text" placeholder="eg. Past paper, video, study guide, memo, website"></input>
                    <label>Add File:</label>
                    <input type="file"></input>
                    <div className="addItemsBtns">
                        <button id="cancelAddItem" onClick={closeModal}>Cancel</button>
                        <button id="submitItem" onClick={submit} >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddItem
