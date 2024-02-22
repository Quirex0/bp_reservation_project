import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

const services = [
  {
    title: "Shiatsu",
    description: "Popis shiatsu masaze ktery zatim nemam. Bude super az tu bude vypsano to co tu ma byt.",
    image: "/jitka_3.jpg",
  },
  {
    title: "Celková masáž",
    description: " Yada yada yada.",
    image: "/logo.jpg",
  },
  {
    title: "Medová masáž",
    description: "Popis služby 3",
    image: "/med.jpg",
  },
  {
    title: "Kranio terapie",
    description: "Popis služby 3",
    image: "/logo.jpg",
  },
];

const tools = [
  {
    title: "Baňky",
    description: "Popis služby 3",
    image: "/banky.jpg",
  },
  {
    title: "Svíčky",
    description: "Popis služby 3",
    image: "/svicky.jpg",
  },
  {
    title: "Masážní pistole",
    description: "Popis služby 3",
    image: "/logo.jpg",
  },
  {
    title: "Lávové kameny",
    description: "Popis služby 3",
    image: "/logo.jpg",
  },
  {
    title: "Moxa",
    description: "Popis služby 3",
    image: "/logo.jpg",
  },
  {
    title: "Tejpy",
    description: "Popis služby 3",
    image: "/tejpy.jpg",
  },
  {
    title: "Ladičky",
    description: "Popis služby 3",
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

      <div className='flex justify-center my-12'>
        <h2 className='md:text-5xl text-3xl text-customColor font-serif'>Masáže</h2>
      </div>

      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4">
          {services.map((service, index) => (
            <div className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} my-12`} key={index}>
              <div className="md:w-1/2">
                <div className="flex flex-col items-center justify-center md:justify-start">
                  <h2 className="md:text-2xl text-lg font-bold mb-4">{service.title}</h2>
                  <p className="md:text-base text-sm text-gray-700 mb-4">{service.description}</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex justify-center">
                  <Image className='rounded-2xl' src={service.image} alt={service.title} width={400} height={300} />
                </div>
              </div>
            </div>
          ))}
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
                <div className="flex flex-col items-center justify-center md:justify-start">
                  <h2 className="md:text-2xl text-lg font-bold mb-4">{tool.title}</h2>
                  <p className="md:text-base text-sm text-gray-700 mb-4">{tool.description}</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex justify-center">
                  <Image className='rounded-2xl' src={tool.image} alt={tool.title} width={400} height={300} />
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
