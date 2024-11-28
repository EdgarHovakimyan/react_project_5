import { useState } from "react";

function AddTask({ addTask }) {
    const [ntasks, setNtasks] = useState({
        id: Date.now(),
        name: "",
        description: "",
    })
    const changeValue = (e) => {
        let k = e.target.getAttribute("id")
        let val = e.target.value
        console.log(k, val);
        setNtasks({ ...ntasks, [k]: val })
    }
    const save = (e) => {
        e.preventDefault()
        console.log(ntasks);
        if (Object.values(ntasks).every(elm => elm != "")) {
            ntasks.done = false
            addTask(ntasks)
            setNtasks({
                id: Date.now(),
                name: "",
                description: "",
            })
        }
        else { alert("Fill all fields!") }
    }
    return (<>
        <form className="w-50 p-2 border mx-auto" onSubmit={save}>
            <div className="form-group my-2">
                <label>Task</label>
                <input type="text" id="name" className="form-control" value={ntasks.name} onChange={changeValue} />
            </div>
            <div className="form-group my-2">
                <label>Description</label>
                <input type="text" id="description" className="form-control" value={ntasks.description} onChange={changeValue} />
            </div>
            <button className="btn btn-success">Add</button>
        </form>
    </>)
}

export default AddTask