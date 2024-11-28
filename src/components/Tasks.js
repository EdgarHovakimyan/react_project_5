import { useState } from "react";

function Tasks({ tasks, delPost, setDone }) {
    return (<>
        <table className="table table-dark table-hover table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tasks</th>
                    <th>Description</th>
                    <th>Done</th>
                    <th>Delete</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((elm, i) => <tr key={i} style={{ textDecoration: elm.done ? "line-through" : "none" }}>
                    <td>{elm.id}</td>
                    <td>{elm.name}</td>
                    <td>{elm.description}</td>
                    <td>{elm.done.toString()}</td>
                    <td><button className="btn btn-danger" onClick={() => delPost(elm.id)}>Delete</button></td>
                    <td><button className="btn btn-danger" onClick={() =>setDone(elm.id)}>Set Done</button></td>
                </tr>)}
            </tbody>
        </table>
    </>)
}

export default Tasks