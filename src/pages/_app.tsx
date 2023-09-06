import '@/styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import localFont from "next/font/local"

const satoshi = localFont({
  src: [
    // {
    //   path: '../../public/fonts/Satoshi-Black.otf',
    //   weight: '400',
    //   style: 'black',
    // },
    // {
    //   path: '../../public/fonts/Satoshi-BlackItalic.otf',
    //   weight: '400',
    //   style: 'black',
    // },
    {
      path: '../../public/fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Italic.otf',
      weight: '400',
      style: 'Italic',
    },
    // {
    //   path: '../../public/fonts/Satoshi-Light.otf',
    //   weight: '400',
    //   style: 'Light'
    // },
    // {
    //   path: '../../public/fonts/Satoshi-LightItalic.otf',
    //   weight: '400',
    //   style: 'LightItalic'
    // },
    // {
    //   path: '../../public/fonts/Satoshi-Medium.otf',
    //   weight: '400',
    //   style: 'Medium'
    // },
    // {
    //   path: '../../public/fonts/Satoshi-MediumItalic.otf',
    //   weight: '400',
    //   style: 'MediumItalic'
    // },
    {
      path: '../../public/fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
})

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Open House Fasilkom 2023</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  );
}