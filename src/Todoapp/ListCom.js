import React, {useState} from 'react';
import "./index.css";
import DeleteIcon from '@material-ui/icons/Delete';
export default function ListCom(props) {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    };
        


    return(
        <div className = "todo_style">
            <span onClick= {cutIt}>
                 <DeleteIcon className ="deleteIcon" /></span>
        <li style={{textDecoration : line ? 'line-through' : 'none'}}>
            {props.text}</li>
        </div>
    );
}