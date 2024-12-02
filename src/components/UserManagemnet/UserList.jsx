import React, { useState } from "react";
import AddEditUserModal from "./AddEditUserModal";
import { mockUsers } from "../../utils/mockdata";

const UserList = () => {
  const [users, setUsers] = useState(mockUsers);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddEdit = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setModalOpen(false);
    setEditingUser(null);
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => { setEditingUser(user); setModalOpen(true); }}>Edit</button>
                <button onClick={() => setUsers(users.filter((u) => u.id !== user.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <AddEditUserModal
          user={editingUser}
          onClose={() => setModalOpen(false)}
          onSave={handleAddEdit}
        />
      )}
    </div>
  );
};

export default UserList;
