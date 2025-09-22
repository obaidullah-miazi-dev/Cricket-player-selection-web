import React from 'react';

const SelectedPlayerCard = ({ player, removePlayer }) => {


    const handleRemove = () => {
        removePlayer(player)
    }


    return (
        <div className='border-2 border-gray-200 p-3 rounded-xl mt-5 flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <img className='w-20 h-20 rounded-xl' src={player.image} alt="" />
                <div>
                    <h3 className='font-bold text-2xl'>{player.name}</h3>
                    <p>{player.role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <p>❌</p>
            </div>
        </div>
    );
};

export default SelectedPlayerCard;