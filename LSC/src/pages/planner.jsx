function Planner () {
    return(
        <>
        <div className="planner-btns">
            <button className="reset">Reset</button>
            <button classname="Add Item">Add item</button>
        </div>
        <div className="boards">
            <div className="to-do-list"></div>
            <div className="doing-list"></div>
            <div className="done-list"></div>
        </div>
         {/* New Task Modal: Form for adding a new task.  */}
    <form class="modal-window" id="new-task-modal-window">
        <h4 class="modal-title">Add New Task</h4>
        <div class="input-div">
            <label class="label-modal-window" id="modal-title-input" for="title-input">Title</label>
            {/* <!-- Title for newTaskModal --> */}
            <input type="text" class="modal-input" id="title-input" placeholder="e.g. Take a little break"></input>
        </div>
        <div class="input-div">
            <label class="label-modal-window" id="modal-desc-input" for="desc-input">Description</label>
            {/* <!-- Desc for newTaskModal --> */}
            <textarea name="description" id="desc-input" placeholder="e.g. Pet your dog, have a cup of coffee, dance to your favourite song and come back to conquer this challenge. 💪🏾"></textarea>
        </div>
        <div class="input-div">
            {/* <!-- This is the dropDown for addNewTask modal --> */}
            <label class="label-modal-window" id="modal-select-status" for="select-status">Status</label>
            <select name="status" id="select-status">
                <option value="todo">todo</option>
                <option value="doing">doing</option>
                <option value="done">done</option>
            </select>
        </div>
        <div class="button-group">
            <button type="submit" class="submit-btn" id="create-task-btn">Create Task</button>
            <button type="button" class="submit-btn" id="cancel-add-task-btn">Cancel</button>
        </div>
    </form>

      {/* <!-- Edit Task Modal: Form for editing an existing task's details. --> */}
    <div class="edit-task-modal-window">
        <form id="edit-task-form">
            <div class="edit-task-div" id="edit-task-header">
                {/* <!-- title for existing card --> */}
                <input type="text" id="edit-task-title-input" class="task-title-input" placeholder="Task Title"></input>
                <button id="edit-btn" class="edit-btn"></button>
            </div>
            <div class="edit-task-div">
                {/* <!-- desc for existing task modal --> */}
                <textarea id="edit-task-desc-input" class="edit-task-description-input" placeholder="Task Description"></textarea>
            </div>
            <div class="edit-task-div">
                <label class="label-modal-window" for="edit-select-status">Current Status</label>
                <select name="status" id="edit-select-status">
                    <option value="todo">todo</option>
                    <option value="doing">doing</option>
                    <option value="done">done</option>
                </select>
            </div>
            <div class="edit-task-div button-group">
                <button type="button" class="editBtns" id="save-task-changes-btn">Save Changes</button>
                <button type="button" class="editBtns" id="cancel-edit-btn">Cancel</button>
                <button type="button" class="editBtns" id="delete-task-btn">Delete Task</button>
            </div>
        </form>
    </div>
        </>
    )
}

export default Planner
