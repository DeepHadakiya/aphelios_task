import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
            if (response.data && response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('/dashboard');
            } else {
                setError('Invalid response from server');
            }
        } catch (err) {
            setError('Invalid username or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="left">
                <div className="login-form">
                    <h1>Sign In</h1>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <form onSubmit={handleLogin}>
                        <div>
                            {/* <label>or use your email password</label> */}
                            <input
                                type="text"
                                placeholder="Username/Email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            {/* <a href="#">Forget Your Password?</a> */}
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="sign-up-container">
                    <h2>Hello, Friend!</h2>
                    <p>Login with your personal details to use all of site features</p>
                    {/* <button >Sign Up</button> */}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
