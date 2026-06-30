import React from 'react';
import { Navigate } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import Loader from '../Shared/Loader/Loader';

const DashboardRedirect = () => {
    const [isAdmin, isAdminLoading] = useAdmin();

    if (isAdminLoading) {
        return <Loader />;
    }

    return (
        <Navigate to={isAdmin ? '/dashboard/adminHome' : '/dashboard/cart'} replace />
    );
};

export default DashboardRedirect;