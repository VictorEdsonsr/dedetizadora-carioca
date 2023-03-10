import '@/styles/globals.scss';
import { Layout } from "@/components/Layout";
import { WhatsappButton } from "@/components/Buttons"
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#0000FF" height={5} />
      <Component {...pageProps} />
      <WhatsappButton />
    </Layout>
  )
}
