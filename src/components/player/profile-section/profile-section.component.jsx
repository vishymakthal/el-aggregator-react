import React from 'react';

import './profile-section.styles.scss';

const ProfileSection = ({playerData}) => (
    <>
        <div className='profileSection'>
            <h3>{playerData.long_name}</h3>
            <img className='playerImg' src={playerData.img} />
            <br/>
            <b>{playerData.club} | {playerData.nationality}</b>
            <p>{playerData.age} | {playerData.player_positions}</p>
            <p>{playerData.bio}</p>
        </div>
    </>
);

export default ProfileSection;