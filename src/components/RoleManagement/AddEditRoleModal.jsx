import React, { useState } from "react";

const AddEditRoleModal = ({ role, onClose, onSave }) => {
  const [name, setName] = useState(role?.name || "");
  const [permissions, setPermissions] = useState(role?.permissions || []);

  const handlePermissionChange = (event) => {
    const { value, checked } = event.target;
    setPermissions((prev) =>
      checked ? [...prev, value] : prev.filter((p) => p !== value)
    );
  };

  const handleSave = () => {
    onSave({ id: role?.id, name, permissions });
  };

  const availablePermissions = ["Read", "Write", "Delete"];

  return (
    <div>
      <h3>{role ? "Edit Role" : "Add Role"}</h3>
      <label>
        Role Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div>
        <h4>Permissions</h4>
        {availablePermissions.map((perm) => (
          <label key={perm}>
            <input
              type="checkbox"
              value={perm}
              checked={permissions.includes(perm)}
              onChange={handlePermissionChange}
            />
            {perm}
          </label>
        ))}
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddEditRoleModal;
