import React from 'react';
import { useState } from 'react';
const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >=0){
    setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
        handleAddNote(noteText)
        setNoteText('');
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        
        {/* Reminder Button */}
        <button
  className="save"
  onClick={async () => {
    const date = prompt("Enter reminder date (YYYY-MM-DD):");
    let time = prompt("Enter reminder time (HH:MM AM/PM):");

    if (date && time) {
      // Convert time to 24-hour format
      const timeParts = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!timeParts) {
        alert("Invalid time format. Use HH:MM AM/PM.");
        return;
      }

      let [, hour, minute, meridian] = timeParts;
      hour = parseInt(hour);
      minute = parseInt(minute);
      meridian = meridian.toUpperCase();

      if (meridian === "PM" && hour !== 12) hour += 12;
      if (meridian === "AM" && hour === 12) hour = 0;

      const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`;
      const reminderTime = new Date(`${date}T${formattedTime}`);
      const now = new Date();

      const delay = reminderTime - now;

      if (delay > 0) {
        const permission = await Notification.requestPermission();

        if (permission === "granted") {
          setTimeout(() => {
            new Notification(" Reminder", {
              body: `Your note reminder for ${date} at ${time} is due!`,
            });
          }, delay);

          alert(`Reminder set for ${date} at ${time}`);
        } else {
          alert("Notification permission denied.");
        }
      } else {
        alert("Please enter a future time.");
      }
    }
  }}
>
  Set Reminder
</button>

  
        {/* Save Button */}
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );}
  
export default AddNote