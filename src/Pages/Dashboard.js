import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(admin);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 bg-slate-100 text-base-content">

                    {
                        admin ? <>
                            <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addTools'>Add tools</Link></li>
                            <li><Link to='/dashboard/manageTools'>Manage Tools</Link></li>
                            <li><Link to='/dashboard/allUser'>Make Admin</Link></li>
                        </>
                            : <><li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReview'>Add Reviews</Link></li></>
                    }
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;