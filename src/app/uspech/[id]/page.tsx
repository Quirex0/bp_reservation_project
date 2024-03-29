import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import prisma from '@/utils/prisma';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale';


export const metadata: Metadata = {
    title: 'Masaze-jm',
}

function getPlaceName(code: string): string {
    switch (code) {
        case 'Praha_8_Bohnice':
            return 'Praha 8 - Bohnice';
        case 'Praha_8_Karlin':
            return 'Praha 8 - Karlín';
        case 'Plzen':
            return 'Plzeň';
        default:
            return code;
    }
}

export default async function Uspech({ params }: {
    params: { id: string };
}) {

    const info = await prisma.reservation.findFirst({
        where: {
            id: params.id,
        }
    })
    console.log(info)


    return (
        <div className='h-full'>

            <Navbar />

            <div className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
                <div>
                    <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium '>Rezervace</h1>
                </div>
            </div>

            <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 mt-4 md:mt-28 flex justify-center items-center flex-col'>
                <div className='flex justify-center my-12'>
                    <h2 className='lg:text-5xl md:text-4xl text-3xl text-customColor text-center font-serif'>Rezervace byla úspěšně vytvořena</h2>
                </div>

                <div className='flex justify-evenly'>
                    <div className='flex flex-col'>
                        <h3 className='flex justify-center lg:text-3xl md:text-2xl text-xl text-center mb-4'>Následující shrnutí bylo zasláno i na Vaši emailovou adresu:</h3>

                        <div className='flex justify-center flex-col my-2 mb-20'>
                            <div className='flex justify-center text-lg'>
                                {info?.firstName} {info?.lastName}
                            </div>
                            <div className='flex justify-center text-lg'>
                                {info?.email}
                            </div>
                            <div className='flex justify-center text-lg'>
                                {info?.place && getPlaceName(info.place)}
                            </div>
                            <div className='flex justify-center text-lg'>
                                {info?.date ?
                                    `${info.date.getDate()}. ${info.date.getMonth() + 1}. ${info.date.getFullYear()} ${info.date.getHours()}:${info.date.getMinutes().toString().padStart(2, '0')}`
                                    : ''}
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className='w-full fixed bottom-0'>
                <Footer />
            </div>
        </div>

    );
}