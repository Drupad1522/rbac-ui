// src/pages/PermissionsPage.jsx
import React, { useState } from 'react';
import PermissionsList from '../components/PermissionManagement/PermissionsList';
import EditPermissionsModal from '../components/PermissionManagement/EditPermissionsModal';

const PermissionsPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleEditPermissions = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>Permissions Management</h1>
            <button onClick={handleEditPermissions}>Edit Permissions</button>
            <PermissionsList />
            {showModal && <EditPermissionsModal onClose={handleCloseModal} />}
        </div>
    );
};

export default PermissionsPage;
