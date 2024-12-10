import React, { useEffect, useState } from "react";
import "./UserList.css";
import { io } from "socket.io-client";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [socket, setSocket] = useState();
  const userId = 123;
  const userName = "K xa";

  useEffect(() => {
    const socketInstance = io("http://localhost:3000", {
      transports: ["websocket"],
    });
    setSocket(socketInstance);

    socketInstance.emit("register", { userId, userName });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const getUserList = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUserList(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <div className="list">
        <ul className="user-list">
          <li className="single-list">
            <div className="user-data">
              <h2>UserName</h2>
              <button>Send Request</button>
            </div>
          </li>
          <li className="single-list">
            <div className="user-data">
              <h2>UserName</h2>
              <button>Send Request</button>
            </div>
          </li>
          <li className="single-list">
            <div className="user-data">
              <h2>UserName</h2>
              <button>Send Request</button>
            </div>
          </li>
          <li className="single-list">
            <div className="user-data">
              <h2>UserName</h2>
              <button>Send Request</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserList;
