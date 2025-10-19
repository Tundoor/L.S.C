import { useState } from "react"
import { communication } from "../assets/data"

function addConnection ({ isOpen, onClose, addCommunication }) {

    const [formData, setFormData] = useState({
        name: "",
        groupLink: "",
        app: ""
    })

    if (!isOpen) return null

       const STORAGE_KEY = "communications"

    // Read saved items from localStorage, or fall back to initial data
    function getSavedCommunications() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY)
            if (!raw) return [...(communication || [])]
            return JSON.parse(raw)
        } catch (e) {
            console.error("Failed to read localStorage, using defaults", e)
            return [...(communication || [])]
        }
    }

    // Save array of items to localStorage
    function saveCommunications(items) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
        } catch (e) {
            console.error("Failed to write to localStorage", e)
        }
    }

       function close (e) {
            e.preventDefault()
            onClose()
        }  

        function submit (e) {
            e.preventDefault()

            const newItem = {
            id: Date.now(),
            name: formData.name.trim(),
            groupLink: formData.groupLink.trim(),
            app: formData.app.trim()
        }

        // simple validation: require a name and link
        if (!newItem.name || !newItem.groupLink) {
            alert("Please enter both a group name and a link.")
            return
        }

        const current = getSavedCommunications()
        const updated = [...current, newItem]
        saveCommunications(updated)

            addCommunication(newItem);
        // setTimeout(() => window.location.reload(), 60)
            setFormData({ name: "", groupLink: "", app: "" })
            onClose()
        }

    

    return (
        <>
            <div className="overlay">
                <form className="addItemForm">
                    <h1>Contribute by adding a resource</h1>
                    <label>Add Name of Group:</label>
                    <input type="text" placeholder="eg. studyBuddies✏️"
                    name="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    ></input>
                    <label>Add Link URL:</label>
                    <input type="text" placeholder="eg. www.geteducated.co.va"
                    name="groupLink"
                    value={formData.groupLink}
                    onChange={e => setFormData({ ...formData, groupLink: e.target.value })}
                    ></input>
                    <label>App Group is on:
                    </label>
                    <input type="text" placeholder="eg. Whatsapp, Discord, Instagram"
                    name="app"
                    value={formData.app}
                    onChange={e => setFormData({ ...formData, app: e.target.value })}
                    ></input>
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