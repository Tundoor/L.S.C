import { useState, useEffect } from "react"
import  resources  from "../assets/data"

function AddItem({ isOpen, onClose, addResource }) {
      
    const [formData, setFormData] = useState({
        // starting values for the form
        fileName: "",
        fileURL: "",
        grade: "",
        type: ""
    })
    
    if (!isOpen) return null;

    const STORAGE_KEY = "resources"

    // Read saved items from localStorage, or fall back to the bundled data
    function getSavedResources() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY)
            if (!raw) return [...(resources || [])]
            return JSON.parse(raw)
        } catch (e) {
            console.error("Failed to read localStorage, using defaults", e)
            return [...(resources || [])]
        }
    }

    // Save array of items to localStorage
    function saveResources(items) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
        } catch (e) {
            console.error("Failed to write to localStorage", e)
        }
    }

    function closeModal (e) {
         e?.preventDefault()
         onClose()
    }

    function submit(e) {
        e.preventDefault()

        const newItem = {
            id: Date.now(),
            fileName: formData.fileName.trim(),
            fileURL: formData.fileURL.trim(),
            grade: formData.grade.trim(),
            type: formData.type.trim(),
        }

        if (!newItem.fileName || !newItem.fileURL) {
            alert("Please enter a name and a URL for the resource.")
            return
        }

        const current = getSavedResources()
        const updated = [...current, newItem]
        saveResources(updated)

        // setTimeout(() => window.location.reload(), 60)
        // reset and close
        addResource(newItem); 
        setFormData({ fileName: "", fileURL: "", grade: "", type: "", file: "" })
        onClose()
    }

    return (
        <>
            <div className="overlay">
                <form className="addItemForm" onSubmit={submit}>
                    <h1>Contribute by adding a resource</h1>

                    <label>Add Link Name:</label>
                    <input
                        type="text"
                        placeholder="eg. Exam paper one"
                        required
                        value={formData.fileName}
                        onChange={e => setFormData({ ...formData, fileName: e.target.value })}
                    />

                    <label>Add Link URL:</label>
                    <input
                        type="text"
                        placeholder="eg. https://example.com"
                        required
                        value={formData.fileURL}
                        onChange={e => setFormData({ ...formData, fileURL: e.target.value })}
                    />

                    <label>Resource for what grade?</label>
                    <input
                        type="text"
                        placeholder="(Please only enter grade 8 - 12)"
                        value={formData.grade}
                        onChange={e => setFormData({ ...formData, grade: e.target.value })}
                    />

                    <label>Resource type:</label>
                    <input
                        type="text"
                        placeholder="eg. Past paper, video, study guide, memo, website"
                        required
                        value={formData.type}
                        onChange={e => setFormData({ ...formData, type: e.target.value })}
                    />

                    {/* <label>Add File (optional):</label>
                    <input
                        type="file"
                        onChange={e => setFormData({ ...formData, file: e.target.files?.[0]?.name ?? "" })}
                    /> */}

                    <div className="addItemsBtns">
                        <button id="cancelAddItem" type="button" onClick={closeModal}>Cancel</button>
                        <button id="submitItem" type="submit" onClick={submit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddItem
