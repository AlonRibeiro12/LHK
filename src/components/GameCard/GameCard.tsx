import { useState } from 'react';
import { SpeakerHigh } from 'phosphor-react'
import { ModalBanner } from '../Modal/ModalBanner';


import * as Dialog from '@radix-ui/react-dialog';



interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
    id: string;

    setPlatformId: (id: string) => void
}

function GameCard(props: GameBannerProps) {
    return (


        <Dialog.Trigger onClick={() => props.setPlatformId(props.id)} className="keen-slider__slide relative rounded-lg overflow-hidden flex justify-between w-[720px]">
            <img src={props.bannerUrl} alt={`${props.title} cover`} />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0 ">
                <strong className="font-bold text-white  left-4 block mt-0 ">{props.title}</strong>
                <span className="text-zinc-300 text-sm block">{props.adsCount} anúncios</span>
            </div>
        </Dialog.Trigger>


    )
}

export default GameCard;