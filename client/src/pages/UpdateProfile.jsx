import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function UpdateProfile() {
    const { updateUser, currentUser } = useContext(AuthContext);

    // State to handle the profile image preview
    const [profileImage, setProfileImage] = useState(currentUser.userInfo?.avatar || '/images/userProfileImage.png');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl); // Update the preview with the new image URL
            // Optionally, you can upload the image to the server here, or in a separate submit function
        }
    };

    return (
        <div className="grid grid-cols-10 h-[485px]">
            <div className="col-span-5 flex items-center justify-center flex-col">
                <h4 className="text-2xl font-semibold">Update Profile</h4>
                <div className="mt-4 flex flex-col  items-center justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="username" className='text-xs font-semibold ml-1 text-slate-500'>Username</label>
                        <input
                            type="text"
                            name='username'
                            defaultValue={currentUser.userInfo.username}
                            className="py-1 px-2 focus:outline-none bg-slate-200 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="email" className='text-xs font-semibold ml-1 text-slate-500'>Email</label>
                        <input
                            type="email"
                            name='email'
                            defaultValue={currentUser.userInfo.email}
                            className="py-1 px-2 focus:outline-none bg-slate-200 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="password" className='text-xs font-semibold ml-1 text-slate-500'>Password</label>
                        <input
                            type="password"
                            name='password'
                            defaultValue={currentUser.userInfo.password}
                            className="py-1 px-2 focus:outline-none bg-slate-200 rounded-md"
                        />
                    </div>
                    <div className="bg-blue-500 w-full text-center mt-4 rounded-md">
                        <button
                            className="bg-blue-500 text-white py-1 px-2 ">
                            Update
                        </button>
                    </div>
                </div>
            </div>

            <div className='col-span-5 flex items-center flex-col justify-center bg-blue-200'>
                <img
                    src={profileImage} // Display the updated profile image preview
                    alt="Profile"
                    className='h-32 w-32 rounded-full'
                />

                <input
                    type="file"
                    accept="image/*"
                    id="fileInput"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                />

                <button
                    className="bg-blue-500 text-white py-1 px-2 rounded-md mt-4 cursor-pointer"
                    onClick={() => document.getElementById('fileInput').click()}>
                    Change profile photo
                </button>
            </div>
        </div>
    );
}
