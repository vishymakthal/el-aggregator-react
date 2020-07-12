import React from 'react';

import './profile-section.styles.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProfileSection = ({playerData}) => (
    <>

        {playerData ? 
            <div className='profileSection'>
                <h3>{playerData.long_name}</h3>
                <img className='playerImg' alt={playerData.short_name} src={playerData.img} />
                <br/>
                <b>{playerData.club} | {playerData.nationality}</b>
                <p>{playerData.age} | {playerData.player_positions}</p>
                <p>{playerData.bio}</p>
            </div>
                :
            <div className='profileSection'>
                <SkeletonTheme>                
                    <h3><Skeleton /></h3>
                    <br/>
                    <Skeleton circle={true} height={120} width={120} />
                    <Skeleton />
                    <br/>
                    <p><Skeleton count={3} /></p>
                </SkeletonTheme>
            </div>
                }
            
            </>
);

export default ProfileSection;