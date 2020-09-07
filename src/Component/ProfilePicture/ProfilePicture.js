import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';

const ProfilePicture = () => {
    const [picture , setPicture]= useState('');
    useEffect(() => {
   fetch('https://randomuser.me/api/')
   .then(res => res.json())
   .then(data => setPicture(data.results[0].picture.large))
    },[])
    return (
        <div>
            <Avatar alt="Travis Howard" src={picture} />
        </div>
    );
};

export default ProfilePicture;