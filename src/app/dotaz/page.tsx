import { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
    title: 'Masaze-jm',
}


export default function Dotaz({ }) {



    return (
        <div>

            <Navbar />

            <div className='flex w-full flex-wrap justify-center items-center mb-4 bg-customColor'>
                <div>
                    <h1 className='lg:text-7xl md:text-5xl text-4xl text-white font-serif uppercase md:p-8 p-4 whitespace-nowrap font-medium '>Hotovo</h1>
                </div>
            </div>

            <div className='flex justify-center my-12'>
                <h2 className='lg:text-5xl md:text-4xl text-3xl text-customColor font-serif'>Dotaz byl úspěšně odeslán</h2>
            </div>

            <div className='flex justify-evenly'>
                <div className='flex flex-col'>
                    <h3 className='flex justify-center lg:text-3xl md:text-2xl text-xl mb-4'>Děkujeme za zpětnou vazbu.</h3>
                    <h3 className='flex justify-center lg:text-3xl md:text-2xl text-xl mb-4'>Případně můžete využít kontaktní údaje níže. </h3>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col lg:mr-20 mt-6'>
                <h2 className='text-2xl m-4 font-serif'>Kontaktní informace:</h2>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <img
                            src="/telephone.png"
                            alt="location pin"
                            width={20}
                            height={20}
                            className="mr-2 ml-5"
                        />
                        <p className='text-xl m-2'> +420 724 557 167</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <img
                            src="/email.png"
                            alt="location pin"
                            width={20}
                            height={20}
                            className="mr-2 ml-5"
                        />
                        <p className='text-xl m-2'> mouce@seznam.cz</p>
                    </div>
                </div>
            </div>

            <div className='w-full fixed bottom-0'>
                <Footer />
            </div>
        </div>

    );
}