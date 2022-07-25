import { Avatar } from '../Avatar';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

export function Header() {
  return (
    <header>
      <div>
        <div className='flex flex-col items-center'>
          <Avatar />
          <h1 className='font-medium text-xl mt-2'>Andres Argote 🇻🇪🇮🇹</h1>
          <span className='font-ligth text-sm text-gray-500'>@andresargotedev</span>
          <div className='flex gap-3 my-4'>
            <a
              href='https://twitter.com/andresargotedev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsTwitter className='w-6 h-6 text-gray-400 hover:text-[#1DA1F2]' />
            </a>
            <a
              href='https://www.linkedin.com/in/andresargote/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin className='w-6 h-6 text-gray-400 hover:text-[#0A66C2]' />
            </a>
            <a
              href='https://github.com/Andresargote'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub className='w-6 h-6 text-gray-400 hover:text-[#333]' />
            </a>
          </div>
        </div>
        <p className='text-sm text-gray-900 font-ligth '>
          Full stack javascript developer con +2 años de experiencia desarrollando
          aplicaciones con tecnologías como <b>HTML,</b> <b>CSS,</b> <b>JavaScript,</b>{' '}
          <b>ReactJS,</b> <b>NextJS,</b> <b>NodeJS,</b> <b>Express</b> y <b>MongoDB</b>.
        </p>
      </div>
    </header>
  );
}
