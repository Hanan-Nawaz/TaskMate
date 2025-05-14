import React, { useState } from "react";
import '../assets/css/to_do.css';
import 'font-awesome/css/font-awesome.min.css';

function to_do() {

    const [task, setTask] = useState({
        task_desc: '',
        is_completed: false,
    });

    const [taskList, setTaskList] = useState([]);

    const addTasktoList = (e) => {
        setTaskList([...taskList, task]);
        setTask({ task_desc: '', is_completed: false })
    }

    const completedCount = taskList.filter(t => t.is_completed).length;
    const totalCount = taskList.length;


    return (
        <div className="container">
            <div className="header">
                <h1 className="heading">
                    <span className="first_part">task</span>
                    <span className="second_part">mate</span>
                </h1>
            </div>

            <div className="container-sub">
                <input className="input-add" placeholder="enter your task here" value={task.task_desc} onChange={(e) => setTask({ ...task, task_desc: e.target.value })} />
                <button className="btn-add" onClick={addTasktoList}><i className="fa fa-plus-circle"></i></button>
            </div>

            <div className="sub-details">
                <div className="left">
                    <span className="text">Total Tasks</span>
                    <span className="details">{totalCount}</span>
                </div>

               <div className="right">
                    <span className="text">Completed Tasks</span>
                    <span className="details">{completedCount} of {totalCount}</span>
                </div>
                
            </div>

            {taskList.map((t, index) => (
                
                    <div key={index} className="task-card">
                        <input type="checkbox" className="checkbox" value={t.is_completed} onChange={() => {
                            const updatedList = [...taskList];
                            updatedList[index].is_completed = !updatedList[index].is_completed;
                            setTaskList(updatedList);
                        }}/>
                        <p className="task-desc">{t.task_desc}</p>
                        <button className="btn-del" onClick={()=> {
                            const updatedList = taskList.filter((_, i) => i !== index);
                            setTaskList(updatedList)
                        }}><i className="fa fa-trash"></i></button>
                    </div>

            ))}

            <div className="footer">
                Made with 💚 by <a href="https://hanannawaz.me">hanannawaz.me</a>
            </div>

        </div>
    )
}

export default to_do;