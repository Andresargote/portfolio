import useTranslation from 'next-translate/useTranslation';

export function ContactMe() {
  const { t } = useTranslation('home');

  return (
    <a
      className='px-4 py-3 text-white bg-black shadow-lg rounded-3xl shadow-green-500/40'
      target='_blank'
      rel='noopener noreferrer'
      href='mailto:contact@andresargote.com'
    >
      {t('contact')} 📨
    </a>
  );
}
