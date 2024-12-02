// src/components/Permissions/EditPermissionsModal.jsx
import React, { useState } from 'react';

const EditPermissionsModal = ({ onClose }) => {
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const handleCheckboxChange = (permissionId) => {
        setSelectedPermissions((prevPermissions) => {
            if (prevPermissions.includes(permissionId)) {
                return prevPermissions.filter(id => id !== permissionId);
            } else {
                return [...prevPermissions, permissionId];
            }
        });
    };

    const handleSave = () => {
        console.log('Permissions saved:', selectedPermissions);
        onClose();
    };

    const permissions = [
        { id: 1, name: 'Read' },
        { id: 2, name: 'Write' },
        { id: 3, name: 'Delete' },
        { id: 4, name: 'Execute' }
    ];

    return (
        <div className="modal">
            <h2>Edit Permissions</h2>
            <form>
                {permissions.map((permission) => (
                    <div key={permission.id}>
                        <input
                            type="checkbox"
                            id={permission.name}
                            checked={selectedPermissions.includes(permission.id)}
                            onChange={() => handleCheckboxChange(permission.id)}
                        />
                        <label htmlFor={permission.name}>{permission.name}</label>
                    </div>
                ))}
            </form>
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default EditPermissionsModal;
