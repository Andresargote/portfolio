import Head from 'next/head';
import { ContactMe } from '../components/ContactMe';
import { Header } from '../components/Header';
import { LastProjects } from '../components/LastProjects';
import { LastWork } from '../components/LastWork';
import { Select } from '../components/Select';

export default function Home() {
  const options = [
    {
      label: '🇻🇪 Español',
      value: 'es',
      id: 1,
    },
    {
      label: '🇺🇸 English',
      value: 'en',
      id: 2,
    },
    {
      label: '🇮🇹 Italiano',
      value: 'it',
      id: 3,
    },
  ];

  return (
    <>
      <Head>
        <title>Andres Argote | Frontend developer</title>
        <link rel='icon' href='/favicon.ico' />

        <meta
          name='description'
          content='Full stack javascript developer con +2 años de experiencia desarrollando aplicaciones con tecnologías como HTML, CSS, JavaScript, ReactJS, NextJS, NodeJS, Express y MongoDB.'
        />

        <meta itemProp='name' content='Andres Argote | Frontend developer' />
        <meta
          itemProp='description'
          content='Full stack javascript developer con +2 años de experiencia desarrollando aplicaciones con tecnologías como HTML, CSS, JavaScript, ReactJS, NextJS, NodeJS, Express y MongoDB.'
        />
        <meta itemProp='image' content='/logoAndres.jpg' />

        <meta property='og:url' content='https://andresargote.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Andres Argote | Frontend developer' />
        <meta
          property='og:description'
          content='Full stack javascript developer con +2 años de experiencia desarrollando aplicaciones con tecnologías como HTML, CSS, JavaScript, ReactJS, NextJS, NodeJS, Express y MongoDB.'
        />
        <meta property='og:image' content='/logoAndres.jpg' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Andres Argote | Frontend developer' />
        <meta
          name='twitter:description'
          content='Full stack javascript developer con +2 años de experiencia desarrollando aplicaciones con tecnologías como HTML, CSS, JavaScript, ReactJS, NextJS, NodeJS, Express y MongoDB.'
        />
        <meta name='twitter:image' content='/logoAndres.jpg' />
      </Head>
      <div className='container flex items-center justify-center max-w-xl p-6 mx-auto'>
        <div className='w-full bg-white rounded-lg shadow-lg'>
          <main className='relative p-6'>
            <Header />
            <LastWork />
            <LastProjects />
            <div className='container flex justify-center mt-4'>
              <ContactMe />
            </div>
            <Select options={options} />
          </main>
        </div>
      </div>
    </>
  );
}
