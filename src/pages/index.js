import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Slider } from '@/components/Slider'
import { FaUsers, FaBug, FaRegThumbsUp } from "react-icons/fa"


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Início - Dedetizadora Carioca</title>
      </Head>
      <main >
        <Slider />

        <section className="my-20 flex flex-col items-center justify-center">
          <h1 className='text-blue-500 text-3xl mb-5 font-bold'>Nossos Diferenciais</h1>
          <div className="container p-7 sm:p-0 flex items-center justify-center flex-col sm:flex-row gap-5">
            <article className=" hover:scale-105 transition-all border-2 shadow-xl rounded-md text-center p-5 flex flex-col items-center justify-center max-w-sm">
              <span>
                <FaUsers size={40} />
              </span>

              <h2 className="font-bold text-lg">
                Equipe experiente
              </h2>
              <p className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
            </article>

            <article className="hover:scale-105 transition-all border-2 shadow-xl rounded-md text-center p-5 flex flex-col items-center justify-center max-w-sm">
              <span>
                <FaBug size={40} />
              </span>

              <h3 className="font-bold text-lg">Controle de Pragas eficiente e eficaz</h3>
              <p className="text-md">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
            </article>

            <article className="hover:scale-105 transition-all border-2 shadow-xl rounded-md text-center p-5 flex flex-col items-center justify-center max-w-sm">
              <span>
                <FaRegThumbsUp size={40} />
              </span>

              <h3 className="font-bold text-lg">Clientes sempre satisfeitos</h3>
              <p className="text-md">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
            </article>
          </div>
        </section>

        <section className=" p-3 bg-gradient-to-t from-blue-500 bg-cover h-36 my-10 flex flex-col items-center justify-center">
          <h1 className='text-blue-500 text-4xl mb-5 font-bold'>Precisa de um Orçamento gratuito?</h1>
          <Link className='text-white font-bold bg-blue-700 hover:scale-105 transition-all hover:bg-white hover:text-blue-700 rounded-full text-xl p-3' href="">Fale Conosco</Link>
        </section>

        <section className="my-10 flex flex-col items-center justify-center">

          <div className="container p-7 sm:p-0 flex items-center justify-center flex-col sm:flex-row gap-5">
            <article className="shadow-xl rounded-md text-center p-5 flex flex-col items-center justify-center">
              <h1 className='text-blue-500 text-3xl mb-5 font-bold'>Nossa Empresa</h1>

              <p className="text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
