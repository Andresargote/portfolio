import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

export function LastWork() {
  const { t } = useTranslation('home');

  return (
    <section>
      <h2 className='my-4 font-medium text-gray-900 text-md'>{t('lastWork')}</h2>
      <div className='container flex'>
        <div className='mr-2 w-80px h-80px '>
          <Image
            src='https://media-exp1.licdn.com/dms/image/C4D0BAQGUee-UbsOZ9Q/company-logo_200_200/0/1622138071994?e=1667433600&v=beta&t=BBSQvcxudl5RrSsYhNagB7jdVRhQlmg-_-UjLELh04M'
            width={80}
            height={80}
            alt='Artesanshop'
            className='rounded w-fit'
          />
        </div>

        <div className='text-sm text-gray-900 font-ligth '>
          <h3>
            <a
              href='https://www.linkedin.com/company/artesanshop/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Artesanshop
            </a>
          </h3>
          <p>
            {t('position')} <b>Full stack developer.</b>
          </p>
          <p>Stack: Figma, Next.js, Ant Design, Firebase, Node.js y MongoDB.</p>
        </div>
      </div>
    </section>
  );
}
