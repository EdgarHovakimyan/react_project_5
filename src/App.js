import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "buy apple", description: "kanach", done: false },
    { id: 2, name: "go to trip", description: "Italy", done: false },
    { id: 3, name: "buy a car", description: "BMW", done: true },
    { id: 4, name: "buy a house", description: "4 rooms", done: false }
  ])
  const add = (data) => {
    setTasks([...tasks, data])
  }
  const delPost = (id) => {
    setTasks(
      tasks.filter((elm) => elm.id !== id)
    )
  }
  const setDone = (id) => {
    setTasks(
      tasks.map(elm => {
        if (id === elm.id) {
          elm.done = !elm.done
        }
        return elm
      })
    )
  }
  return (<>
    <AddTask
      addTask={add}
    />
    <Tasks
      tasks={tasks}
      delPost={delPost}
      setDone={setDone}
    />
  </>)
}

export default App;