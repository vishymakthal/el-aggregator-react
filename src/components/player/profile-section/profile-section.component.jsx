import React from 'react';

import './profile-section.styles.scss';

const ProfileSection = ({playerData}) => (
    <div className='profileSection'>
        <h2>{playerData.short_name}</h2>
        <img className='playerImg' src={playerData.img} />
        <b>{playerData.club} | {playerData.nationality}</b>
        <p>{playerData.age} | {playerData.player_positions}</p>
        <p className='playerBio'>{playerData.bio}</p>
    </div>
);

export default ProfileSection;