import { useState } from "react";

export function TodoItem({title,isDone, setArrayOfTodos}){
    return <li className="listitem">
    <span>{title}</span>
    <span>{isDone}</span>
    </li>
    
}

export default function TodoList(props){
    const [TodoArray,setArrayOfTodos] = useState([{title : 'bla',isDone : true},{title : 'gla',isDone : true}])
    setArrayOfTodos(TodoArray[i].isDone = true ? TodoArray[i].isDone = false : TodoArray[i].isDone = true)
    return (
        <ul className="unorderlist">
            {TodoArray.map((number,i)=>{
                return <TodoItem key={i} title={number.title} isDone={number.isDone} setArrayOfTodos={setArrayOfTodos} TodoArray={TodoArray}/>
            })}
        </ul>
    )
}
