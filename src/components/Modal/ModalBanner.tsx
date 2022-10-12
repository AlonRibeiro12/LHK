import { FormEvent, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
// import * as Select from '@radix-ui/react-select';
import { useKeenSlider } from 'keen-slider/react'
import axios from 'axios';
import { Check, GameController } from 'phosphor-react'

import { Input } from '../Form/Input'
import { CardInfo } from '../CardInfoBanner/CardInfo';




interface ModalBannerProps {
    platformId: string;
}

export interface CardInfoProps {
    name?: string;
    yearsPlaying?: string;
    discord?: string;
    weekDays?: string;
    hourStart?: string;
    hourEnd?: string;
    useVoiceChannel?: boolean;
}

export function ModalBanner(props: ModalBannerProps) {

    const [cards, setCards] = useState<CardInfoProps[]>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getGames = async () => {

            const response = await axios(`http://localhost:3333/games/${props.platformId}/ads`);
            setCards(response.data);
            setIsLoading(false)
            console.log(response.data)

        }

        if (props.platformId) {
            getGames();
        }

    }, [props.platformId]);


    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
            slides: {
                perView: 2.2,
                spacing: 16,
            },
        },
        [
            // add plugins here
        ]);




    return (

        <Dialog.Portal>
            <Dialog.Overlay className="bg-[#061218]/60 inset-0 fixed flex" />
            <Dialog.Content className="w-[720px] fixed bg-[#05050500] pb-20 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg ml-[-260px]  ">
                {isLoading ? <></> : (

                    <div ref={sliderRef} className="keen-slider__slide  gap-10  flex justify-between">

                        {cards.map((item, index) => (
                            <CardInfo key={index} {...item} />

                        ))}


                    </div>


                )
                }
            </Dialog.Content>

        </Dialog.Portal>
    )
}


export default ModalBanner