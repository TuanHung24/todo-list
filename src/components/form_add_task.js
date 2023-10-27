import { useRef } from "react";
import { useDispatch} from "react-redux";
import { add } from "../reducers/task_slice";

function FormAddTask(){
    
    const taskName=useRef();
    const dispatch=useDispatch();

    const addTask=()=>{
        if(taskName.current.value.trim()==="")
        {
            alert("Please input name of task!");
            taskName.current.value="";
            return ;
            
        }
        dispatch(add(taskName.current.value));
        taskName.current.value="";
    }
    return (
        <>
            <div class="form-add-task">
                <label>Task name:</label>
                <input type="text" ref={taskName} placeholder="Input name of task"/>
                <button onClick={addTask} >Add</button>
            </div>
        </>
    )
}
export default FormAddTask;