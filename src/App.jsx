import React, { useState } from 'react';
import List from './List';

const App = () => {
    const [todo , setTodo] = useState("");
    const [arr , setArr] = useState([]);

    const addToDo = (event) => {
        setTodo(event.target.value);
    };

    const addToList = () => {
        setArr ((oldArr) => {
            return [...oldArr,todo];
        });
        setTodo("");
    };

    const deleteFromList = (id) => {
        console.log("deleted");
        setArr ((oldArr) => {
            return oldArr.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };

    return(
        <>
            <div className="container">
                <div className="header">
                    <h1> To Do List</h1>
                </div>
                <div className="list"> 
                    <input type='text'
                     placeholder="Add an item"
                     onChange={addToDo}
                     name={todo} 
                     value={todo}
                     />
                    <button onClick={addToList}> + </button>
                </div>
                <div className="todo">
                    <ol>
                        {arr.map((itemVal,index) => 
                            {
                                return <List add={itemVal} onSelect={deleteFromList} key={index} id={index}/>;
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;