import React, { useState } from "react";

const AddEditUserModal = ({ user = {}, onClose, onSave }) => {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [role, setRole] = useState(user.role || "");
  const [status, setStatus] = useState(user.status || "Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...user, name, email, role, status });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Role:</label>
        <input value={role} onChange={(e) => setRole(e.target.value)} required />

        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddEditUserModal;
