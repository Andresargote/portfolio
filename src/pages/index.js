import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Andres Argote | Frontend developer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mx-auto max-w-xl flex justify-center items-center h-screen p-4 sm:p-0'>
        <main className='w-full bg-white p-6 rounded shadow-lg'>
          <Header />
        </main>
      </div>
    </>
  );
}
