import React from 'react';

const List = (props) => {
    return(
        <>
         <li> 
            <button onClick={() =>{
             props.onSelect(props.id);}}> - </button> 
             {props.add} 
         </li>
        </>
    ) ;
}

export default List;