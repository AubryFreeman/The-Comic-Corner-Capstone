import { useEffect, useState } from "react";
import { getAllUsers } from "../Components/Services/UserService.js";

export const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((userArray) => {
      setUsers(userArray);
    });
  }, []);

  return (
    <div className="users">
      {users.map((userObject) => {
        return (
          <div>
            <div>
              <div>Name</div>
              <div>{userObject.name}</div>
            </div>
            <div>
              <div>Email</div>
              <div>{userObject.email}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
