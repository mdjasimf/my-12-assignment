import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../src/Shared/Loading';

const AllUser = () => {
    const { data: allusers, isLoading } = useQuery('users', () => fetch('http://localhost:5000/allUsers').then(res =>
        res.json()
    )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>email</th>
                            <th>make a admin</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers?.map(user =>
                                <tr key={user?._id}>
                                    <td>{user?.index}</td>
                                    <td>{user?.email}</td>
                                    <td><button class="btn btn-sm">make a adin</button></td>
                                    <td><button class="btn btn-sm">remove</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;