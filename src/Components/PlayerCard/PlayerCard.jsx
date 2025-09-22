
import React, { useState } from 'react';

const PlayerCard = ({ player, setAvailableBalance, availableBalance,setPurchasedPlayers,purchasedPlayers }) => {
    const handleSelection = (player) => {
        if(availableBalance<player.biddingPrice){
            alert('not enough coin')
            return
        }
        if(purchasedPlayers.length===6){
            alert('already 6 players selected')
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - player.biddingPrice)

        setPurchasedPlayers([...purchasedPlayers,player])
    }
    const [isSelected, setIsSelected] = useState(false)
    return (
        <div className="mb-8 md:mx-0 mx-5 md:mb-0 card bg-base-100  border-2 border-gray-100 p-4">
            <figure>
                <img className='rounded-xl md:h-[350px] h-[250px] w-full'
                    src={player.image}
                    alt="Shoes" />
            </figure>
            <div className="mt-5 space-y-3">

                <div className='flex items-center gap-1'>
                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" /></svg>
                    <h2 className="card-title text-xl">{player.name}</h2>
                </div>


                <div className='flex justify-between border-b-2 border-gray-200 pb-4'>
                    <div className='flex items-center gap-1 text-gray-600'>
                        <svg className='w-5 h-5 opacity-40' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M160 96C160 78.3 145.7 64 128 64C110.3 64 96 78.3 96 96L96 544C96 561.7 110.3 576 128 576C145.7 576 160 561.7 160 544L160 422.4L222.7 403.6C264.6 391 309.8 394.9 348.9 414.5C391.6 435.9 441.4 438.5 486.1 421.7L523.2 407.8C535.7 403.1 544 391.2 544 377.8L544 130.1C544 107.1 519.8 92.1 499.2 102.4L487.4 108.3C442.5 130.8 389.6 130.8 344.6 108.3C308.2 90.1 266.3 86.5 227.4 98.2L160 118.4L160 96z" /></svg>
                        <p>{player.country}</p>
                    </div>
                    <button className='btn border-none bg-gray-100 rounded-lg'>{player.role}</button>
                </div>

                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Ratings</p>
                    <p className='text-gray-500 font-semibold'>{player.rating}</p>
                </div>


                <div className='flex justify-between items-center'>
                    <p className='font-bold'>{player.battingType}</p>
                    <p className='text-gray-500 font-semibold'>{player.bowlingType}</p>
                </div>


                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Price: $<span>{player.biddingPrice}</span></p>
                    <button disabled={isSelected} onClick={() => {
                        handleSelection(player)
                    }} className='btn bg-white border-1 border-gray-300 rounded-lg'>{isSelected ? 'Selected' : 'Choose Player'}</button>
                </div>

            </div>
        </div>
    );
};

export default PlayerCard;