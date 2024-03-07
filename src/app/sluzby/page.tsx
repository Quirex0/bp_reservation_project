import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

const tools = [
  {
    title: "Baňky",
    description: "Baňkování se provádí pomocí skleněných nebo silikonových baněk. Přikládají se na postižená místa nebo jednotlivé akupunkturní body. Podtlak, který vznikne ochlazením vzduchu v baňce vtáhne dovnitř pokožku, která se rychle prokrví a zčervená. Baňkování způsobuje intenzivní prokrvení masírované tkáně.",
    image: "/banky.jpg",
  },
  {
    title: "Ušní a tělové svíce",
    description: "Jsou skvělé k relaxaci a navození pocitu harmonie. Očišťují fyzické i energetické tělo. Používají se v případě bolesti svalů a kloubů, bolesti hlavy a celkově při pocitu neklidu.",
    image: "/svicky.jpg",
  },
  {
    title: "Lávové kameny",
    description: "Lávové kameny se před masáží se předehřejí na teplotu 37-40°C a poté se přikládají na tělo, kde dochází příjemnému uvolnění zatuhlých svalů. Má velmi pozitivní účinek na koncentraci, zklidnění mysli i regeneraci organismu. Díky spojení masáže, horkých kamenů a principů čínské medicíny nachází uplatnění při celé řadě potíží a její oblast působení je tedy opravdový široká.",
    image: "/kameny.jpg",
  },
  {
    title: "Moxa",
    description: "Moxování je léčebná metoda vycházejí z tradiční čínské medicíny. Jedná se o hloubkové prohřívání těla a akupunkturních bodu pomocí sušeného pelyňku. Prostrednictvím tepla dodává do těla energii. Používá se u nemoci z chladu i u dlouhodobě nemocných oslabených lidí. Metoda je vhodná i pro děti.",
    image: "/moxa.jpg",
  },
  {
    title: "Tejpy",
    description: "Tejpování je fyzioterapeutická metoda, která usnadňuje proces hojení svalů, šlach a kloubů. Uvolňuje přetížené a namáhané svaly. Lze ho použít pro zpěvnění svalů při náročných výkonech či sportehc. Pozitivně působí na fungování celé pohybové soustavy. Základ tvoří pružné tejpovací pásky, které se nalepí na kůži v daném místě – tam, kde cítíte bolest nebo u svalů, které chcete zpevnit před fyzickým výkonem.",
    image: "/tejpy.jpg",
  },
  {
    title: "Ladičky - fonoforéza",
    description: "Druh terapie, kdy se na akupunkturní body místo jehel přikládají vibrační vidlice. Těmito vibračními vidlicemi tzv. “ladičkami“ se jemně odbourávají blokády energetické, nervové i svalové. Fonoforéza může být velkým pomocníkem při léčbě bolavých zad, kloubů a migrén. Vibrace urychluje léčebný proces a nastolení energetické rovnováhy.",
    image: "/ladicky.jpg",
  },
];

export default function Sluzby() {
  return (
    <div>
      <Navbar />

      <div className='flex w-full flex-wrap justify-center items-center p-2 mb-4 bg-customColor'>
        <div>
          <h1 className='md:text-7xl text-white font-serif uppercase p-8 whitespace-nowrap font-medium text-4xl'>Nabízené služby</h1>
        </div>
      </div>

      <div className='flex flex-col justify-center w-full px-4'>
        <div className="flex flex-col justify-center my-8">
          <div className='flex justify-center'>
            <h2 className='md:text-5xl text-3xl text-customColor font-serif m-2 pt-2'>Shiatsu</h2>
          </div>
          <div className="md:flex md:flex-row justify-evenly my-12">
            <div className="flex justify-end">
              <Image className='rounded-2xl' src="/jitka_3.jpg" alt="Shiatsu" width={350} height={300} />
            </div>
            <div className="flex md:w-1/3">
              <div className="flex flex-col justify-center">
                <p className="md:text-base text-sm text-gray-700 mb-4">
                  Shiatsu je masážní technika, která pochází z Japonska.
                  Skrývá v sobě prvky přikládání prstů a dlaní, pracuje se systémem akupunkturních drah známých z čínské medicíny.
                  Klient leží oblečený v pohodlném oblečení na zemi na futonu.
                  Shiatsu je výborná preventivní metoda jak akutních, tak chronických onemocnění.
                  Ulevuje od stresu i emočního napětí a tak umožňuje optimální funkci imunitního systému.
                </p>
                <p className='md:text-base text-sm text-gray-700 mb-4'>
                  Je vhodné pro různé stavy:
                </p>
                <ul className="list-disc ml-6">
                  <li>únava</li>
                  <li>pocit nedostatku energie</li>
                  <li>nespavost</li>
                  <li>bolesti hlavy</li>
                  <li>potíže s dýcháním</li>
                  <li>potíže se zažíváním</li>
                  <li>bolesti v pohybovém aparátu</li>
                  <li>gynekologické obtíže</li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center my-8 text-center">
          <div className='flex justify-center'>
            <h2 className='md:text-5xl text-3xl text-customColor font-serif m-2'>Celková masáž</h2>
          </div>
          <div className="md:flex md:flex-row justify-center my-12">
            <div className="flex md:w-1/3">
              <div className="flex justify-center items-center">
                <p className="md:text-base text-sm text-gray-700 mb-4">
                  Klasická masáž je vhodná k regeneraci organismu po zátěži, uvolnění napětí a bolesti ve ztuhlých svalových partiích, 
                  odstranění únavy a navození celkového pocitu pohody.
                  Stimuluje krevní a lymfatický oběh.
                  Můžete si vybrat ze dvou variant: celková masáž těla, nebo masáž vybraných partií.
                  K masáži využívám kvalitní certifikované oleje v bio kvalitě.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-center">
                <Image className='rounded-2xl' src="/lehatko_plzen.jpg" alt="Celková masáž" width={350} height={200} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center my-8 text-center">
          <div className='flex justify-center'>
            <h2 className='md:text-5xl text-3xl text-customColor font-serif m-2'>Medová masáž</h2>
          </div>
          <div className="md:flex md:flex-row justify-center my-12">
            <div className="md:w-1/2">
              <div className="flex justify-center">
                <Image className='rounded-2xl' src="/med.jpg" alt="Medová masáž" width={400} height={300} />
              </div>
            </div>
            <div className="flex md:w-1/3">
              <div className="flex items-center justify-center">
                <p className="md:text-base text-sm text-gray-700 mb-4">
                  Medová masáž je spojení klasické masáže a léčivých účinků medu.
                  Tekutý a zahřátý med se rozetře po celém těle a následně se začne jemnými pohyby rukou vmasírovávat do pokožky.
                  K tomu je využívána speciální technika, tzv. pumpování,
                  které je v souladu s tokem lymfy a tak napomáhá vylučování toxinů a jedovatých látek z těla.
                  Při tomto procesu se med vstřebává do kůže a po určité době je opět vylučován i se škodlivými látkami na povrch.
                  Celý proces se opakuje 3x. Před nanesením další vrstvy se z těla omývá.
                  Výsledkem je vyčištěná, prokrvená a na dotek velice jemná pokožka.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center my-8 text-center">
          <div className='flex justify-center'>
            <h2 className='md:text-5xl text-3xl text-customColor font-serif m-2'>Kranio terapie</h2>
          </div>
          <div className="md:flex md:flex-row justify-center my-12">
            <div className="flex md:w-1/3">
              <div className="flex items-center justify-center">
                <p className="md:text-base text-sm text-gray-700 mb-4">
                  Kraniosakrální terapie (cranio = lebka a sacrum = křížová kost) je jemná a velmi účinná terapeutická harmonizační metoda,
                  která vylaďuje rytmus, který pulzuje hluboko uvnitř fyziologického systému.
                  V kraniosakrální terapii se věnuje pozornost rozpouštění blokád uložených v tkáních (svaly, vaziva, klouby, kosti),
                  uvolňování napětí, starých vzpomínek a traumat uložených v těle.
                  Provádí se v leže na zádech, v pohodlném oblečení na masážním lehátku a s klientem se téměř vůbec nemanipuluje.
                  Jedná se o  dotyky těla a hlavy. Jemně, a přesto velmi účinně uvolňuje fyzické i psychické bloky.
                  Na závěr má klient možnost si ještě chvíli odpočinout a nechat vše pozvolně doznít.
                  Kraniosakrální terapie působí na celou řadu fyzických i psychických potíží. Harmonizuje metabolismus i imunitní systém.
                  Je vhodná pro těhotné ženy i děti. Integruje tělo, mysl i duši.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-center">
                <Image className='rounded-2xl' src="/kranio.jpg" alt="Kranio terapie" width={300} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex justify-center my-12'>
        <h2 className='md:text-5xl text-2xl text-customColor font-serif'>Doplňkové služby k masážím</h2>
      </div>

      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4">
          {tools.map((tool, index) => (
            <div className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} my-12`} key={index}>
              <div className="md:w-1/2">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="md:text-2xl text-lg font-bold mb-4">{tool.title}</h2>
                  <p className="md:text-base text-sm text-gray-700 mb-4">{tool.description}</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex justify-center">
                  <Image className='rounded-2xl' src={tool.image} alt={tool.title} width={350} height={300} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
