import React, { useState } from 'react';
import './NoteTakingApp.css';




function NoteTakingApp() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, '']);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const updateNote = (index, value) => {
    const newNotes = [...notes];
    newNotes[index] = value;
    setNotes(newNotes);
  };

  function downloadNotes() {
    const notesText = notes.join('\n');
    const blob = new Blob([notesText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'notes.txt';
    link.href = url;
    link.click();
  }
  

  return (
    // <div>

   
    //   <h1>Notes</h1>
    //   <div >
    //   <button onClick={handleAddNote}>Add</button>
    //   <ul>
    //     {notes.map((note, index) => (
    //       <li key={index}>
    //         <textarea value={note} onChange={(e) => handleUpdateNote(index, e.target.value)} />
    //         <button onClick={() => handleDeleteNote(index)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    // </div>

    <div className="note-taking-app">
  <h1>SamLy Notes</h1>
  <button className="add-note-button" onClick={addNote}>Add Note</button>
  <button className="download-notes-button" onClick={downloadNotes}>Download Notes</button>

  <ul className="note-list">
    {notes.map((note, index) => (
      <li key={index}>
        <textarea
          className="note-textarea"
          value={note}
          onChange={(e) => updateNote(index, e.target.value)}
        />
        <button
          className="delete-note-button"
          onClick={() => deleteNote(index)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

  );


}

export default NoteTakingApp;
