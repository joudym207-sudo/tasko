import "./TaskCard.css";
import { useState } from "react";

export default function TaskCard({ title, subject }) {
    const [iscompleted, setiscompleted] = useState(false);

    function handletask() {
        setiscompleted(!iscompleted);
    }
    return (
        <div className="task-card">
            <span className={`subject ${iscompleted ? "completed-subject" : ""}`}>
                {subject}
            </span>
            <div className={`task-info ${iscompleted ? "completed" : ""}`}>
                <h3>{title}</h3>
                <button onClick={handletask} className="btn"> {iscompleted ? "Done" : "completed"}</button>
                <button className="text-btn">Delete</button>
            </div>
        </div>
    )
};
