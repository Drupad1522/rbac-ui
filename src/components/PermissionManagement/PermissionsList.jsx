// src/components/Permissions/PermissionsList.jsx
import React from 'react';

const PermissionsList = () => {
    const permissions = [
        { id: 1, name: 'Read' },
        { id: 2, name: 'Write' },
        { id: 3, name: 'Delete' },
        { id: 4, name: 'Execute' }
    ];

    return (
        <div>
            <h2>Permissions List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Permission Name</th>
                    </tr>
                </thead>
                <tbody>
                    {permissions.map((permission) => (
                        <tr key={permission.id}>
                            <td>{permission.id}</td>
                            <td>{permission.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PermissionsList;
