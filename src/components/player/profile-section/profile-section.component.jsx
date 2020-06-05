import React from 'react';

import './profile-section.styles.scss';

const ProfileSection = ({playerData}) => (
    <>
        <div className='profileSection'>
            <h3>{playerData.long_name}</h3>
            <b>{playerData.club} | {playerData.nationality}</b>
            <img className='playerImg' src={playerData.img} />
            <p>{playerData.age} | {playerData.player_positions}</p>
            <p className='playerBio'>{playerData.bio}</p>
        </div>
    </>
);

export default ProfileSection;