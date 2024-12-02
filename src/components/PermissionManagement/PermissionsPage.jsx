import React, { useState } from "react";

const PermissionsPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const handlePermissionToggle = (roleId, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((p) => p !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  const availablePermissions = ["Read", "Write", "Delete"];

  return (
    <div>
      <h2>Permissions Management</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            {availablePermissions.map((perm) => (
              <th key={perm}>{perm}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              {availablePermissions.map((perm) => (
                <td key={perm}>
                  <input
                    type="checkbox"
                    checked={role.permissions.includes(perm)}
                    onChange={() => handlePermissionToggle(role.id, perm)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsPage;
