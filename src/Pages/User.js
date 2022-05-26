import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('successfully make an admin');
                }
            })

    }




    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">make a adin</button>}</td>
            <td><button class="btn btn-sm">remove</button></td>
        </tr>
    );
};
export default User;