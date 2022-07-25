import Image from 'next/image';

export function Avatar() {
  return (
    <div className='flex flex-col items-center'>
      <div className='rounded w-80px h-80px transform transition duration-500 hover:scale-125'>
        <Image
          src='https://avatars.githubusercontent.com/u/42123859?v=4'
          alt='Andres Argote'
          width={80}
          height={80}
          className='rounded w-fit'
        />
      </div>
      <span className='z-10 mt-[-15px] w-fit px-3 py-1 bg-green-500 rounded-full text-sm bg-gradient-to-r from-cyan-500 to-green-500 text-white font-medium'>
        DEV
      </span>
    </div>
  );
}
