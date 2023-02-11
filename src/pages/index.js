import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Slider } from '@/components/Slider'
import { FaMapMarkedAlt, FaCamera } from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Início - Dedetizadora Carioca</title>
      </Head>
      <main >
        <Slider />

        <section className="my-10 flex items-center justify-center">
          <div className="container flex items-center justify-center flex-col sm:flex-row">
            <article className="text-center p-5 flex flex-col items-center justify-center max-w-md">
              <span>
                <FaMapMarkedAlt size={40} />
              </span>

              <h2 className="font-bold text-lg">
                No Inerior do Rio de Janeiro
              </h2>
              <p className="text-md">
                Sem necessidade de pegar estradas para quem está na capital.
                Seus ﬁlhos muito um passo da natureza.
              </p>
            </article>

            <article className="text-center p-5 flex flex-col items-center justify-center max-w-md">
              <span>
                <FaCamera size={40} />
              </span>

              <h3 className="font-bold text-lg">Acompanhamento Ao Vivo</h3>
              <p className="text-md">
                Através de um grupo privado no Facebook, você vai acompanhar
                fotos e vídeos durante todo o dia
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
