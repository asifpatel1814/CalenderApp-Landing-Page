import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import { NextUIProvider } from '@nextui-org/react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ImagComp from '@/components/ImagComp'
import Cards from '@/components/Cards'
import Pricing from '@/components/Pricing'
import FAQs from '@/components/FAQs'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <NextUIProvider>
      <main
        className={`flex min-h-screen flex-col justify-between ${inter.className}`}
      >
        <Head>
          <title>Milton-clone Prathamesh Pawar</title>
        </Head>

        <div className="sticky top-0" style={{ zIndex: 100 }}>
          <Header />
        </div>

        <div className="mt-4" style={{ zIndex: 10 }}>
          <Hero />
        </div>

        <div className="mt-4" style={{ zIndex: 10 }}>
          <ImagComp />
        </div>

        <div className="mt-4" id="testimonial" style={{ zIndex: 10 }}>
          <Features />
        </div>

        <div className="mt-4" id="features" style={{ zIndex: 10 }}>
          <Cards />
        </div>

        <div className="mt-4" id="pricing" style={{ zIndex: 10 }}>
          <Pricing />
        </div>

        <div className="mt-4" id="faqs" style={{ zIndex: 10 }}>
          <FAQs />
        </div>

        <div className="mt-4 mb-16" id="blog" style={{ zIndex: 10 }}>
          <Blog />
        </div>

        <div className="mt-4" id="footer" style={{ zIndex: 100 }}>
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
