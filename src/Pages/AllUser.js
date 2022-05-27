import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../src/Shared/Loading';
import User from './User';

const AllUser = () => {
    const { data: allusers, isLoading, refetch } = useQuery('users', () => fetch('https://dry-retreat-90563.herokuapp.com/allUsers', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
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
                            <th>serial no</th>
                            <th>email</th>
                            <th>make a admin</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers?.map((user, index) => <User
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></User>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;