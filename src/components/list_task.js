import { useDispatch, useSelector } from "react-redux";
import { del } from "../reducers/task_slice";

function ListTask(){
    const dispatch=useDispatch();

    const tasks=useSelector((state)=>state.task.list);

    const delTask=(name)=>{
        dispatch(del(name));
    }

    return (
        <>
        <div class="list-tasks">
                <h3 class="mb-5">List of tasks:</h3>
                {
                    tasks.map(function(task)
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
        </>
    )
}
export default ListTask;