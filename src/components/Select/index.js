import { useRouter } from 'next/router';

export function Select({ options }) {
  const router = useRouter();

  const handleChangeLanguage = (e) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };

  return (
    <select
      className='absolute w-[70px] px-4 py-2 text-gray-900 bg-gray-100 text-lg rounded-xl top-6 right-6 sm:w-fit sm:text-sm'
      onChange={handleChangeLanguage}
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
