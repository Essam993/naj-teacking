import React, { useState } from 'react';
import { LoginWrapper } from './login.styles';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            navigator('/dashboard');
        }
    };

    return (
        <LoginWrapper>
            <Form onSubmitCapture={handleSubmit}>
                <img src="https://naj.ae/assets/images/logo-en.png" width={200} alt="" />
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="primary" htmlType="submit">Login</Button>
            </Form>
        </LoginWrapper>
    );
};

export default Login;