export function Select({ options }) {
  return (
    <select className='absolute w-[70px] px-4 py-2 text-gray-900 bg-gray-100 text-lg rounded-xl top-6 right-6 sm:w-fit sm:text-sm'>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
