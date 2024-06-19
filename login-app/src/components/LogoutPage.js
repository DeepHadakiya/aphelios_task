import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem('user');
            navigate('/login');
        } else {
            navigate('/dashboard');
        }
    }, [navigate]);

    return null;
}

export default LogoutPage;
