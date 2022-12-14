import { MagnifyingGlassPlus } from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mb-2 overflow-hidden">
            <div className="bg-[#040d11] px-8 py-6  flex justify-between items-center horizontal">

                <div>
                    <strong className="text-2xl text-white font-black">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400 block">Publique um anuncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className="py-3 px-4 bg-[#F85757] hover:bg-[#FD3E3E] text-white rounded flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anuncio
                </Dialog.Trigger>
            </div>
        </div>

    )
}