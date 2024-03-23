import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Masaze-jm',
};

const places = [
  {
    title: "Království krásy",
    description: "V Praze provozuji své služby na adrese Sokolovská 5/49, Praha 8 - Karlín. ",
    image: "/prostory_karlin.jpg",
  },
  {
    title: "Kadeřnictví, kosmetika a masáže",
    description: "V Praze mě můžete také navštívit na adrese Štětínská 380, Praha 8 - Bohnice.",
    image: "/lehatko_praha.jpg",
  },
  {
    title: "Studio Dante",
    description: "V Plzni mě můžete navštívit na adrese Purkyňova 27, Plzeň 3. Sídlím zde ve studiu DANTE.",
    image: "/prostory_plzen.jpg",
  },
];

export default function Provozovny() {

  return (
    <div>
      <Navbar />

      <div className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
        <div>
          <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium '>Provozovny</h1>
        </div>
      </div>

      <div className='flex justify-center my-12'>
        <h2 className='lg:text-5xl md:text-4xl text-3xl text-customColor font-serif'>Kde mě můžete najít?</h2>
      </div>

      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4">
          <div className="flex flex-col justify-between mb-12">
            {places.map((place, index) => (
              <div key={index}>
                <div className="flex flex-col items-center mx-3 my-12">
                  <div className='text-center'>
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6">{place.title}</h3>
                    <p className="lg:text-xl text-md text-gray-700 mb-6">{place.description}</p>
                  </div>
                  <div className="flex justify-center">
                    <Image className='rounded-2xl w-3/5 lg:w-4/5 h-auto' src={place.image} alt={place.title} width={300} height={300}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
