import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import prisma from '@/utils/prisma';

export const metadata: Metadata = {
    title: 'Masaze-jm',
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
        <div>

            <Navbar />

            <div className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
                <div>
                    <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium '>Rezervace</h1>
                </div>
            </div>

            <div className='flex justify-center my-12'>
                <h2 className='lg:text-5xl md:text-4xl text-3xl text-customColor font-serif'>Rezervace byla úspěšně vytvořena</h2>
            </div>

            <div className='flex justify-evenly'>
                <div className='flex flex-col'>
                    <h3 className='flex justify-center lg:text-3xl md:text-2xl text-xl'>Shrnutí:</h3>

                    <div className='flex justify-center flex-col ml-6 my-2'>
                        <div>
                            {info?.firstName} {info?.lastName}
                        </div>
                        <div>
                            {info?.email}
                        </div>
                        <div>
                            {info?.place}
                        </div>
                        <div>
                            {info?.date?.toString()} // Convert the date to a string
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