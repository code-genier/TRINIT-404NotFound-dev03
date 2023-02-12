
import './App.css';
//import io form 'socket.io-client';
import {io} from 'socket.io-client';
import { useState } from "react";
import Chat from "./Chat";
import { useSelector } from "react-redux";

const socket=io("http://localhost:3002");
function ChatApp() {
  const token = useSelector((state) => state);
  console.log(token.user.firstName)
  const name = token.user.firstName;
  // setUser(name);


   
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  // setUsername(name);

  return (
    <div className="App">
    {!showChat ? (
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="John..."
          value={name}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join A Room</button>
      </div>
    ) : (
      <Chat socket={socket} username={name} room={room} />
    )}
  </div>
  );
}

export default ChatApp;