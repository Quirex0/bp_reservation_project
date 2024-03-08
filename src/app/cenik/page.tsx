import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Masaze-jm',
}

export default function Cenik() {
  const services = [
    { name: 'Shiatsu 90 minut', prices: [1100, 1000] },
    { name: 'Masáž celková 90 minut', prices: [1000, 900] },
    { name: 'Masáž zad a šíje 60 minut', prices: [700, 600] },
    { name: 'Masáž zad a nohou 60 minut', prices: [700, 600] },
    { name: 'Masáž plosek nohou', prices: [500, 500] },
    { name: 'Medová masáž 60 minut', prices: [500, 500] },
    { name: 'Kraniosakrální osteopatie terapie', prices: [600, 600] },
    { name: 'Baňkování 30 minut', prices: [300, 300] },
  ];

  return (
    <div>
      <Navbar />

      <div className='flex w-full flex-wrap justify-center items-center p-2 mb-4 bg-customColor'>
        <div>
          <h1 className='md:text-7xl text-white font-serif uppercase p-8 whitespace-nowrap font-medium text-4xl'>Ceník služeb</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4 pt-8">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <td className="text-start text-2xl font-serif text-customColor px-4 py-2">Služby</td>
                <td className="text-end text-2xl font-serif text-customColor px-4 py-2">
                  <div className="flex items-center justify-end">
                    <Image
                      src="/location.png"
                      alt="location pin"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Praha
                  </div>
                </td>
                <td className="text-end text-2xl font-serif text-customColor px-4 py-2">
                  <div className="flex items-center justify-end">
                    <Image
                      src="/location.png"
                      alt="location pin"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Plzeň
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{service.name}</td>
                  <td className="text-end px-4 py-2">{service.prices[0]} Kč</td>
                  <td className="text-end px-4 py-2">{service.prices[1]} Kč</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='py-8'>
            <div className='text-2xl font-serif text-customColor px-4 my-4'>Doplňkové ošetření</div>

            <div className='flex flex-col'>
              <div className='px-4 my-1'>Tělové a ušní svíce - příplatek  50 - 100 Kč </div>

              <div className='px-4 my-1'>Masážní pistole "BODY SONIC" </div>
              <div className='px-4 my-1'>Fonoforéza</div>
              <div className='px-4 my-1'>Baňky </div>
              <div className='px-4 my-1'>Lávové kameny </div>
              <div className='px-4 my-1'>Moxování </div>
            </div>
          </div>



          <div className='flex flex-row justify-between items-center px-4 mb-12'>
            <div className='flex flex-col'>
              <p>Pro zájemce je možnost pořídit poukázku jako dárek.</p>
              <p>Lze použít jednorázově nebo koupit balíček.</p>
            </div>
            <div className='flex'>
              <Image src="/poukazka.jpg"
                alt="poukazka"
                width={500}
                height={400}
                className="" />
            </div>
          </div>



        </div>
      </div>

      <Footer />
    </div>
  );
}
