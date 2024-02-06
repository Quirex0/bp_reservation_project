import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

const services = [
  {
    title: "Název služby 1",
    description: "Popis služby 1",
    image: "/logo.jpg",
  },
  {
    title: "Název služby 2",
    description: "Sem vložte váš popis služby. Popis shiatsu masaze ktery zatim nemam. Bude super az tu bude vypsano to co tu ma byt. Yada yada yada.",
    image: "/logo.jpg",
  },
  {
    title: "Název služby 3",
    description: "Popis služby 3",
    image: "/logo.jpg",
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
        <h2 className='md:text-5xl text-2xl text-customColor font-serif'>Masáže a další služby</h2>
      </div>

      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4">
          {services.map((service, index) => (
            <div className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} my-12`} key={index}>
              <div className="md:w-1/2">
                <div className="flex flex-col items-center justify-center md:justify-start">
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-2">{service.description}</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex justify-center">
                  <Image src={service.image} alt={service.title} width={300} height={300} />
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
