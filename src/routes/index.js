import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from '../pages/signin';
import SignUp from '../pages/signup';

import Dashboard from '../pages/dashboard';
import Profile from '../pages/Profile';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}