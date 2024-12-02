// src/pages/RolesPage.jsx
import React, { useState } from 'react';
import RoleList from '../components/RoleManagement/RoleList';
import AddEditRoleModal from '../components/RoleManagement/AddEditRoleModal';

const RolesPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddRole = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>Role Management</h1>
            <button onClick={handleAddRole}>Add Role</button>
            <RoleList />
            {showModal && <AddEditRoleModal onClose={handleCloseModal} />}
        </div>
    );
};

export default RolesPage;
