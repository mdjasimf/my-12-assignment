import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 bg-slate-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myReviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/addTools'>Add tools</Link></li>
                    {/* <li><Link to='/dashboard/allUser'>All User</Link></li>
                    <li><Link to='/dashboard/addTools'>Add tools</Link></li>
                    <li><Link to='/dashboard/manageTools'>Manage Tools</Link></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;