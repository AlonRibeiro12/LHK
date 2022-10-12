import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

import logoImg from '../src/assets/logo.svg';
import './styles/main.css';


import { CreateAdBanner } from './components/CreateBanner/CreateAdBanner';
import { CreateAdModal } from './components/CreateModal/CreateAdModal';
import GameCard from './components/GameCard/GameCard'
import ModalBanner from './components/Modal/ModalBanner';



interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const [platformId, setPlatformId] = useState('');

  const [isLoading, setIsLoading] = useState(true);


  function handlePlatformId(id: string) {
    setPlatformId(id)
  }

  useEffect(() => {
    const getGames = async () => {
      const response = await axios('http://localhost:3333/games');
      setGames(response.data);
      setIsLoading(false)
    }

    getGames();
  }, []);


  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
      slides: {
        perView: 6,
        spacing: 15,
      },
    },
    [
      // add plugins here
    ]);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 py-8">
      <img src={logoImg} className="mt-[-6rem]" />
      <h1 className="text-6xl text-white font-black mt-20">

      </h1>

      <Dialog.Root>
        {isLoading ? <></> : (
          <div ref={sliderRef} className="mb-8 keen-slider">


            {games.map(game => (
              <GameCard key={game.id} title={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.ads}
                id={game.id} setPlatformId={handlePlatformId} />
            ))}



          </div>


        )
        }
        <ModalBanner platformId={platformId} />
      </Dialog.Root>



      <Dialog.Root>

        <CreateAdBanner />

        <CreateAdModal />

      </Dialog.Root>
    </div>
  )
}

export default App;