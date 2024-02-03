import React, { useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import "./home.css";


import { createRoomAPI } from "../api";
export default function Home({ currentUserId, setTheme, theme }) {
  //console.log(props)
  const history = useHistory();

  const createRoom = useCallback(async () => {
    try {
      const roomInformation = await createRoomAPI(currentUserId);
      history.push(`/rooms/${roomInformation.roomId}`);
    } catch (err) {
      console.log(err);
    }
  }, [currentUserId]);

  const join = () => {
    const x = document.getElementById("join");
    console.log(x.value);
    if (x.value) {
      history.push(`/rooms/${x.value}`);
    } else {
      alert("Enter Meeting Id");
    }
  };

  return (
    <div>
      <div className={theme ? "container-outside" : "container-1"}>
        <div className={theme ? "dark-circle" : "circle"}></div>
        <div className={theme ? "dark-landing" : "columns-landing"}>
          <div className={theme ? "landing-1" : "columns-landing-1"}>
          
            <div className="shift">
              <div className={theme ? "dark-text-head" : "text-head"}>
                My Chat
                <span className={theme ? "dark-change-color" : "change-color"}>
                  {" "}
                  App
                </span>
              </div>
              <div className={theme ? "dark-text-head" : "text-head"}>
                Create{" "}
                <span className={theme ? "dark-change-color" : "change-color"}>
                  Video Room
                </span>
              </div>
              <button
                onClick={() => {
                  history.push("/chat");
                }}
                className={theme ? "dark-join-button" : "join-button"}
              >
                Your Rooms
              </button>
              <button
                onClick={createRoom}
                className={theme ? "dark-join-button" : "join-button"}
              >
                Instant Meet
              </button>

              <div>
                <input
                  className="join"
                  type="text"
                  id="join"
                  placeholder="Enter Meeting Id"
                ></input>
                <button
                  onClick={join}
                  className={theme ? "dark-join-button" : "join-button"}
                >
                  Join Meeting
                </button>
              </div>
              <div className={theme ? "dark-style" : "style"}>
                <div>Chat with your friends</div>
                <div>Enjoy unlimited Video Calling</div>
                <div>Enjoy screen sharing</div>
                <div>Stay Connected</div>
              </div>
            </div>
          </div>
          <div className={theme ? "landing-2" : "columns-landing-2"}>
         
          </div>
        </div>

        <div className={theme ? "dark-landing-footer" : "landing-footer"}>
          <div className={theme ? "dark-footer-outer" : "footer-outer"}>
            Developed by Vivek Upadhyay🌈🔥
          </div>
        </div>
      </div>
    </div>
  );
}
