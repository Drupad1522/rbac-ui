import React, { useState } from "react";
import AddEditRoleModal from "./AddEditRoleModal";

const RoleList = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleAddRole = () => {
    setSelectedRole(null);
    setShowModal(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleSaveRole = (role) => {
    if (role.id) {
      setRoles(roles.map((r) => (r.id === role.id ? role : r)));
    } else {
      setRoles([...roles, { ...role, id: roles.length + 1 }]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={handleAddRole}>Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <button onClick={() => handleEditRole(role)}>Edit</button>
                <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <AddEditRoleModal
          role={selectedRole}
          onClose={() => setShowModal(false)}
          onSave={handleSaveRole}
        />
      )}
    </div>
  );
};

export default RoleList;
