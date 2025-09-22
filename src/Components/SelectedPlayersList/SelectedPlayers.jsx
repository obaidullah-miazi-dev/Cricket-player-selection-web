import React from 'react';
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer}) => {
    // console.log(purchasedPlayers)
    return (
        <div className='md:w-11/12 md:mx-auto mx-3'>
            {
                purchasedPlayers.map(player => <SelectedPlayerCard removePlayer={removePlayer} player={player}></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayers;