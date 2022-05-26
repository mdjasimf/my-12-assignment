import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyProfile = () => {


    const [user, loading] = useAuthState(auth);

    const handleProfile = (event) => {
        event.preventDefault();
        const profile = {
            name: user.displayName,
            email: user.email,
            education: event.target.education.value,
            location: event.target.location.value,
            linkdineLink: event.target.linkdineLink.value,
            phoneNumber: event.target.phoneNumber.value,
        }
        if (!profile.phoneNumber) {
            return alert('please fill up phone number')
        }
        if (!profile.education) {
            return alert('please fill up education')
        }
        if (!profile.location) {
            return alert('please fill up location')
        }
        if (!profile.linkdineLink) {
            return alert('please fill up linkdineProfile')
        }
        const url = 'https://dry-retreat-90563.herokuapp.com/profile';
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)

        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                toast('successful');
                event.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-center mt-2 text-3xl text-accent'>Rate us</h1>
            <form onSubmit={handleProfile} className='grid grid-cols-1 gap-2 justify-items-center'>
                <input type="text" value={user.displayName} class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" value={user.email} class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='education' name='education' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='linkdie profile' name='linkdineLink' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='phone number' name='phoneNumber' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="text" placeholder='Your district' name='location' class="input input-bordered input-accent w-full max-w-xs" />
                <input type="submit" value='submit' class="btn btn-outline btn-primary input input-bordered input-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;