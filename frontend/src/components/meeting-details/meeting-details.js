import React, { useState } from "react";
import "./meeting-details.css";
import { useParams } from "react-router-dom";

export default function MeetingDetails() {
  const [open, setOpen] = useState(false);
  const { roomId } = useParams();

  //copy link
  const myFunction = () => {
    console.log("called+");
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    console.log(copyText.value);
    document.execCommand("copy");
    alert("Copied the Meeting Link: " + copyText.value);
  };

  const handleRoomID = () => {
    var copyText = document.getElementById("myInput");
    copyText.value = roomId;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the MeetingID : " + copyText.value);
  };

  return (
    <div className="meeting-details">
      <button className="meeting-button" onClick={() => setOpen(!open)}>
        <span>Meeting Details</span>
        <i class="fas fa-info-circle"></i>
      </button>
      <div className={open ? "meeting-expand" : "meeting-hide"}>
        <div className="meeting-head">Meeting Details :-</div>
        <div className="meeting-id">
          <span>Meeting Id- </span>
          <input
            className="copy-text-input"
            type="text"
            value={roomId}
            id="myInput"
          />
          <button className="copy-text-button" onClick={() => handleRoomID()}>
            {" "}
            Copy Link <i class="fas fa-paste"></i>
          </button>
        </div>
        <span className="meeting-id">Meeting Link- </span>
        <input
          className="copy-text-input"
          type="text"
          value={window.location.href}
          id="myInput"
        ></input>
        <button className="copy-text-button" onClick={() => myFunction()}>
          Copy Link<i class="fas fa-paste"></i>
        </button>
      </div>
    </div>
  );
}
