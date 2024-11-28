import Button from "./Button";
import { useState } from "react";
export default function Todos() {
    // component state variables
    const [pendingTodo,changePendingTodo] = useState(['Learn python']);
    const [completedTodo,changeCompletedTodo] = useState(['Learn Java']);
    const [todoText,changeTodoText] = useState("");
    const [errorVisible,changeErrorVisible] = useState(false);
    const [error,changeError] = useState('');
    // function to update todo text
    const handleInputChange =(event)=>{
        if(event.target.value.length >2){
            changeError('')
        }
        changeTodoText(event.target.value);
    }
    // to add todo in pending todo
    const addTodo =()=>{
        if(todoText.length >2){
            changePendingTodo([...pendingTodo,todoText]);
        changeTodoText('')
        }
        else{
            changeError('Todo text should be minimum 3 characters')
        }
    }
    // handle cancel button
    const handleCancel =()=>{
        changeTodoText('');
    }
    // clear todo sections
    const clearTodo = (section)=>{
        if(section=='pending'){
            changePendingTodo([]);
        }
        else{
            changeCompletedTodo([]);
        }
    }
    const completeTodo = (index)=>{
        const element = pendingTodo[index];
        changeCompletedTodo([...completedTodo,element]);
        const currentPendingItems = [...pendingTodo];
        currentPendingItems.splice(index,1);
        changePendingTodo(currentPendingItems);
    }
    const deleteTodo = (index,from) =>{
        if(from=='pending'){
            const currentPendingItems = [...pendingTodo];
            currentPendingItems.splice(index,1);
            changePendingTodo(currentPendingItems);
        }
        else{
            const currentCompletedItems = [...completedTodo];
            currentCompletedItems.splice(index,1);
            changeCompletedTodo(currentCompletedItems)
        }
    }
    return (
        <>
        <div className="todo-form">
            <h1>Add ToDo</h1>
            <input type="text" placeholder="Type todo" value={todoText} onChange={handleInputChange}/>
            <span className="error">{error}</span>
            <div className="todo-form-buttons">
                <Button class="add-btn" handleClick={()=>addTodo()} btnText="Add" />
                <Button class="cancel-btn" handleClick={()=>handleCancel()} btnText="Cancel" /> </div>
               </div> 
                <div className="todo-section">
                    <div className="todo-left">
                        <h1>Pending ToDo ({pendingTodo.length}) <Button class="add-btn" handleClick={()=>clearTodo('pending')} btnText="Clear" /></h1>
                    {
                        pendingTodo.map((todo,index)=><div className="todo-item" key={`pending-${index}`}><div className="todo-item-text">({index+1}) {todo}</div>
                        <div className="todo-form-buttons">
                            <Button class ="complete-btn" btnText="Complete" handleClick={()=>completeTodo(index)} />
                            <Button class ="delete-btn" btnText="Delete" handleClick={()=>deleteTodo(index,'pending')} />
                                </div>
                                </div>)
                    }
                    </div>
                    <div className="todo-right"><h1> Completed ToDo ({completedTodo.length}) <Button class="add-btn" handleClick={()=>clearTodo('completed')} btnText="Clear" /></h1>
                    
                 
                    {
                        completedTodo.map((todo,index)=><div className="todo-item" key={`completed-${index}`}><div className="todo-item-text">({index+1}) {todo}</div>
                        <div className="todo-form-buttons">
                           
                            <Button class ="delete-btn" btnText="Delete" handleClick={()=>deleteTodo(index,'completed')} />
                                </div>
                                </div>)
                    }
                    </div>
                    </div>
                    </>
    
                )
            };