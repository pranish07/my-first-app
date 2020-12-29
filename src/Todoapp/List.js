import React, { useState } from 'react';
import "./index.css";
import DeleteIcon from '@material-ui/icons/Delete';
export default function List(){
   const[line, setLine] =useState(false);
 
   const cutIt = () => {
       setLine(true);
   };
        return (
            <>
            <div>
                
            </div>
            </>
        );
   
}
