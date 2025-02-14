import React from "react";

export default function Todo(props) {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                {/* 在 JSX 属性中使用布尔值（true 和 false），你必须用大括号把它们括起来。defaultChecked="true"的"true"是一个字符串。 */}
                <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)}/>
                {/* htmlFor 属性对应于 HTML 中使用的 for 属性 */}
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}>
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}
  