
import { useState } from 'react';
import { GameController } from 'phosphor-react'
import * as Toast from '@radix-ui/react-toast';


import { CardInfoProps } from '../Modal/ModalBanner'

const copyToClipboard = (text: any) => {
    return navigator.clipboard.writeText(text);

};





export function CardInfo(props: CardInfoProps) {


    return (
        <div className="bg-[#2A2634]  rounded-md p-6  keen-slider__slide md:w-32 lg:w-48 truncate....">
            <p className="font-light mb-3"> Nome
                <h1 className="font-bold">{props.name}</h1>
            </p>

            <p className="font-light mb-3 "> Tempo de Jogo
                <h1 className="font-bold">{props.yearsPlaying} ano's</h1>
            </p>

            <p className="font-light mb-3 "> Disponibilidade
                <h1 className="font-bold">{`${props.weekDays?.length} dia's \u2022 
                ${props.hourStart} - ${props.hourEnd}`}</h1>
            </p>

            <p className="font-light mb-3"> Chamada de áudio
                <h1 className={`font-bold ${props.useVoiceChannel ? 'text-[#39ef9a]' : 'text-red-500'}`}>
                    {props.useVoiceChannel ? "Sim" : "Não"}
                </h1>
            </p>

            <p className="font-light mb-3 "> Discord
                <h1 className="font-bold p-2 bg-[#27252d] rounded text-center mt-1">{props.discord}</h1>
            </p>

            <button
                type="submit" onClick={() => copyToClipboard(props.discord)}

                className="bg-[#8B5CF6] px-5 h-12 rounded-md font-semibold flex items-center gap-3  ml-10 hover:bg-green-400"
            >
                <GameController size={24} />
                Encontrar Duo
            </button>
        </div>





    );

}