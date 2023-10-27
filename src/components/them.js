import { useRef } from "react";
import { useState } from "react";

function Them()
{
    const [list,setList]=useState([])
    const taskName=useRef()

    const addTask=()=>{
        const testTask=taskName.current.value.trim();
        if(testTask.trim()==="")
        {
            alert("Vui lòng nhập tên");
            taskName.current.value="";
            return;
        }
        const newTask=list.concat(taskName.current.value);
        setList(newTask);
        taskName.current.value="";

    }
    const delTask=(task)=>{
        const upda=list.filter(a=>a!==task);
        setList(upda)
    }
    return(
        <>
        <div class="wrapper">
            <h1 class="text-center">TODO LIST APP</h1>
            <div class="form-add-task">
                <label>Task name:</label>
                <input type="text" ref={taskName} placeholder="Input name of task" required/>
                <button onClick={addTask} >Add</button>
            </div>
            <div class="list-tasks">
                <h3 class="mb-5">List of tasks:</h3>
                {
                    list.map(function(task)
                    {
                        return (
                            <div class="task">
                                <p>{task}</p>
                                <button onClick={()=>delTask(task)}>X</button>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
        </>
    )
}
export default Them;