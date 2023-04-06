import React,{useState} from 'react';

export default function NoteApp()
{
    const [notes,setNotes] = useState([]);

    const addNotes =()=>{
        setNotes([...notes,'']);
        
    };

    const removeNotes =(index)=>{
        const newNotes = [...notes];
        newNotes.splice(index,1);
        setNotes(newNotes);
    };

    return(
        <>
        <h1>Notes</h1>
        <button onClick={addNotes}>Ajouter</button>
        <ol>
            {notes.map((_note,index) => (
            <li key ={index}>
                <textarea></textarea>
                <button onClick={()=> removeNotes(index)}>Supprimer</button> 
            </li>))}
          
        </ol>
        </>
    )
}