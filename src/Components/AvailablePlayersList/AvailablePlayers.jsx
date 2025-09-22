import React, { use } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance }) => {
    const players = use(playersPromise)
    console.log(players)
    return (
        <div className='md:w-11/12 mx-auto mt-5 md:grid grid-cols-3 gap-20'>


        {
            players.map(player => <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
        }


            
        </div>
    );
};

export default AvailablePlayers;