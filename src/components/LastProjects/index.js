import useTranslation from 'next-translate/useTranslation';
import { BsGithub } from 'react-icons/bs';

export function LastProjects() {
  const { t } = useTranslation('home');

  return (
    <section>
      <h2 className='my-4 font-medium text-gray-900 text-md'>{t('lastProjects')}</h2>

      <div className='container flex'>
        <div className='text-sm text-gray-900 font-ligth '>
          <h3>
            <a
              href='https://simple-dev-clone-front.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Dev.to clone
            </a>
          </h3>
          <p>Stack: Next.js, JWT, Node.js y MongoDB.</p>
          <a
            href='https://github.com/Andresargote/simple-dev-clone-front'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub className='w-6 h-6 text-gray-400 hover:text-[#333]' />
          </a>
        </div>
      </div>

      <div className='container flex mt-4'>
        <div className='text-sm text-gray-900 font-ligth '>
          <h3>
            <a
              href='https://zoom-clone-frontend.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Zoom clone
            </a>
          </h3>
          <p>Stack: React.js.</p>
          <a
            href='https://github.com/Andresargote/zoom-clone-frontend'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub className='w-6 h-6 text-gray-400 hover:text-[#333]' />
          </a>
        </div>
      </div>

      <div className='container flex mt-4'>
        <div className='text-sm text-gray-900 font-ligth '>
          <h3>
            <a
              href='https://andresargote.github.io/vercel-clone/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Vercel landing page clone
            </a>
          </h3>
          <p>Stack: HTML y SASS.</p>
          <a
            href='https://github.com/Andresargote/vercel-clone'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub className='w-6 h-6 text-gray-400 hover:text-[#333]' />
          </a>
        </div>
      </div>

      <div className='container flex mt-4'>
        <div className='text-sm text-gray-900 font-ligth '>
          <h3>
            <a
              href='https://andresargote.github.io/Pinterest-clone/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Pinterest landing page clone
            </a>
          </h3>
          <p>Stack: HTML y CSS.</p>
          <a
            href='https://github.com/Andresargote/Pinterest-clone'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub className='w-6 h-6 text-gray-400 hover:text-[#333]' />
          </a>
        </div>
      </div>
    </section>
  );
}
