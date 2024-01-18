import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/home/home';
import SignIn from '../pages/signin/signin';
import SignUp from '../pages/signup/signup';
import UserLayout from '../layout/User/userLayout';
import Account from '../pages/account/account';
import AdminLayout from '../layout/Admin/adminLayout';
import Dashboard from '../pages/dashboard/dashboard';
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Home />} />
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
            <Route path='user' element={<UserLayout />}>
                <Route path='account' element={<Account />} />

            </Route>

            <Route path='admin' element={<AdminLayout />}>
                <Route path='dashboard' element={<Dashboard />} />
            </Route>
        </Route>
    ),
)