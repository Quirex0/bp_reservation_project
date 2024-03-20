import { Metadata } from 'next'
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Masaze-jm',
}
export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <div className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
          <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium'>
            Moje cesta
          </h1>
        </div>
        <h2 className='flex justify-center font-serif underline underline-offset-8 text-5xl m-12'>
          Od sportu k masážím
        </h2>
        <div className='flex justify-evenly flex-col lg:flex-row'>
          <div className='flex justify-center items-center'>
            <div className='m-4'>
              <img className="rounded-2xl h-auto max-w-xs md:max-w-sm" src="/hory.jpg" alt="vizitky" />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>

            <div className='flex flex-col border rounded-md p-6 bg-stone-100 items-start m-4'>
              <p>
                Začala jsem v roce 1996, kdy jsem obsolvovala v ČR první Masérskou školu REFIT - sportovní a rekondiční masáže.
              </p>
              <div className='flex flex-col justify-center'>
                <p className='text-xl my-4'>
                  Další roky následovalo mé sebevzdělávání:
                </p>
                <p className='my-2'>
                  Reflexologie plosky nohou a dlaní, reflexní lymfatická masáž na ploskách nohou, spoušťové body v reflexním systému.
                </p>
                <p className='my-2'>
                  Následně jsem absolvovala 3-leté studium Shiatsu, TČM, Kraniosakrální terapie - Darja Shiatsu school.
                </p>
                <p className='my-2'>
                  Fonoforéza, prenatální masáž, Reiki - Inge Schubert var Kraft, Praxe v rehabilitačním ústavu Kladruby.
                </p>
              </div>
              <div className='flex flex-col'>
                <p className='text-xl my-4'>
                  Dále následovaly kurzy:
                </p>
                <p className='my-2'>
                  Kraniosakrální osteopatie - Mudr.Jana Holubová / Eric Le Neuder.
                </p>
                <p className='my-2'>
                  Rehabilitace a regenerace páteře - SM Systém Mudr.Smíšek.
                </p>
                <p className='my-2'>
                  Seminář Zdravé nohy - Vlaďka Botlíková.
                </p>
                <p className='my-2'>
                  Seminář Bachovy esence z psychologického hlediska - PeadDr.et.Mgr. Marie Kotábová.
                </p>
                <p className='my-2'>
                  Náprava a korekce metodou z MBS s prvky Chiropraxe - INPROV Masérská škola Brno.
                </p>
              </div>


            </div>

          </div>

        </div>

        <p className='text-xl font-semibold flex justify-center m-10'>"Naší povinností je udržovat si zdravé tělo, protože bez toho nemůžeme mít silnou a zdravou mysl." - JM</p>

      </main>

      <div className='w-full'>
        <Footer />
      </div>

    </div>
  );
}
